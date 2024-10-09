const Header = () => {
    return (
      <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black to-transparent z-50">
        <div className="flex items-center justify-between">
          {/* Netflix Logo */}
          <img
            className="w-36 md:w-40 lg:w-48 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
          />
        </div>
      </div>
    );
  };
  
  export default Header;
  