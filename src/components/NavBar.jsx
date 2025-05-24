import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Mic, MoreVert } from "@mui/icons-material";
import SideBar from "./SideBar";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
 
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setShowMobileSearch(false);
    }
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  return (
    <header className="bg-black-800 shadow-gray-900 shadow-2xl px-2 sm:px-4 h-14 flex items-center sticky top-0 z-50">
      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="absolute inset-0 bg-black flex items-center px-4 md:hidden">
          <button
            onClick={toggleMobileSearch}
            className="mr-4 text-white hover:bg-zinc-800 p-2 rounded-full"
          >
            ←
          </button>
          <form
  onSubmit={handleSearch}
  className="flex items-center border-1 border-l-2 border-zinc-600 bg-zinc-900 rounded-full overflow-hidden h-10 w-[640px] max-w-full"
>
  <input
    type="text"
    placeholder="Search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full h-full px-4 text-sm text-white  bg-black placeholder-zinc-400 focus:outline-none"
  />
  <button
    type="submit"
    className="w-16 h-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 border-l-0 border-zinc-600 rounded-r-full transition-colors"
  >
    <Search className="text-white text-xl" />
  </button>
</form>

        </div>
      )}

      {/* Desktop Layout */}
      <div className={`w-full flex items-center ${showMobileSearch ? 'hidden md:flex' : 'flex'}`}>
        {/* Left Section: Sidebar + Logo */}
        <div className="flex items-center flex-shrink-0 w-12 pl-8 sm:w-32 md:w-48 lg:w-64">
          <SideBar />
          <Link to="/" className="hidden sm:flex items-center ml-2 md:ml-4">
            <img
              src="https://www.gstatic.com/youtube/img/promos/growth/36f1d869b3e939c5855bae466329d5694dd69708b243a9fb62d4b02ff5c349e4_244x112.webp"
              alt="YouTube"
              className="h-6 md:h-8 lg:h-10 xl:h-[64px] w-auto"
            />
          </Link>
        </div>

        {/* Center Section: Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center px-4">
          <div className="flex items-center w-full max-w-2xl">
            <form
              onSubmit={handleSearch}
              className="flex items-center flex-1 h-10 border-l-2 border"
            >
              <div className="flex items-center flex-1 border border-l-2
              border-zinc-600 rounded-l-full bg-black overflow-hidden">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 px-4 text-base text-white bg-black placeholder-zinc-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-16 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 border border--0 border-zinc-600 rounded-r-full transition-colors"
              >
                <Search className="text-white text-xl" />
              </button>
            </form>
           
            {/* Mic Button (Desktop) */}
            <button className="w-10 h-10 ml-2 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 rounded-full transition-colors">
              <Mic className="text-white text-xl" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center flex-shrink-0 justify-end ml-auto md:ml-0 md:w-48 lg:w-64">
          {/* Mobile Search & Menu Icons */}
          <div className="flex items-center md:hidden mr-2">
            <button
              onClick={toggleMobileSearch}
              className="w-10 h-10 flex items-center justify-center text-white hover:bg-zinc-800 rounded-full transition-colors mr-1"
            >
              <Search className="text-xl" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-white hover:bg-zinc-800 rounded-full transition-colors">
              <MoreVert className="text-xl" />
            </button>
          </div>

          {/* Profile Button */}
          <button className="w-8 h-8 rounded-full overflow-hidden hover:ring-2 hover:ring-zinc-400 transition-all">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;