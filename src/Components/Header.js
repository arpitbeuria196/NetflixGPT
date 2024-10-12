import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../Utils/userSlice";
import { Logo, Netflix_Logo, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { handleGPTSearch } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Get user from Redux store
  const dispatch = useDispatch();
  const gptSearchEnable = useSelector((store)=> store.gpt.GPTSearchEnabled);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleSearch = () =>
    {
        dispatch(handleGPTSearch());    
    }

    const handleLanguageChange =  (e) =>
    {
        dispatch(changeLanguage(e.target.value));
    }

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black to-transparent z-50">
      {/* Netflix Logo */}
      <img
        className="w-36 md:w-40 lg:w-48 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        src={Netflix_Logo}
        alt="Netflix Logo"
      />

      {/* User Profile Section */}
      {user?.email && (
        <div className="flex items-center space-x-4">
            { gptSearchEnable && 
            (
                <select className=" p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleLanguageChange}
                >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier} className="bg-gray-900 text-white">
                    {lang.name}
                  </option>
                ))}
              </select>
                
            )
            }
            <button 
            onClick={handleSearch}
            className="text-white font-semibold px-2 py-3 bg-cyan-700 rounded-md shadow-lg border-red-500 hover:scale-105 transition-transform duration-300">
                { !gptSearchEnable ? ("GPTSearch"):("HomePage")}
                </button>
          <span className="text-white font-semibold">{user.displayName}</span> {/* Display name */}
          <img
            alt="User Icon"
            src={Logo}
            className="w-10 h-10 border-2 border-red-600 hover:scale-110 transition-transform duration-300"
          />
          <button
            onClick={handleSignout}
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:scale-105 bg-red-700 transition-transform duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
