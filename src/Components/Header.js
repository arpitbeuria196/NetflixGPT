import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../Utils/userSlice";
import { Logo, Netflix_Logo } from "../Utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Get user from Redux store
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };


  
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
          <span className="text-white font-semibold">{user.displayName}</span> {/* Display name */}
          <img
            alt="User Icon"
            src={Logo}
            className="w-10 h-10 border-2 border-red-600 hover:scale-110 transition-transform duration-300"
          />
          <button
            onClick={handleSignout}
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-red-700 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
