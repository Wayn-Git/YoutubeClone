import React, { useState } from 'react';
import {
  Home,
  Clapperboard,
  Menu,
  Music,
  Play,
  Gamepad2,
  Scissors,
  Users,
  Bell,
  Search,
  Video,
  History,
  ThumbsUp,
  Bookmark,
  Settings
} from 'lucide-react';

const YoutubeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Scissors, label: 'Shorts' },
    { icon: Users, label: 'Subscriptions' },
    { icon: Bell, label: 'Notifications' },
    { icon: Search, label: 'Search' },
    { icon: Video, label: 'Create' },
    { icon: History, label: 'History' },
    { icon: ThumbsUp, label: 'Liked' },
    { icon: Bookmark, label: 'Watch Later' },
    { icon: Settings, label: 'Settings' }
  ];

  const categoryItems = [
    { icon: Play, label: 'Movies' },
    { icon: Music, label: 'Music' },
    { icon: Play, label: 'Entertainment' },
    { icon: Gamepad2, label: 'Gaming' }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-1.5 left-4 z-50 p-2 hover:cursor-pointer bg-black border border-zinc-700 rounded-full shadow hover:bg-zinc-800 transition-all duration-200 hover:scale-105"
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <Menu className="text-white" size={28} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 h-full bg-black text-white border-r border-zinc-800 transition-all duration-300 z-40 ${
          isMenuOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-2 overflow-y-auto">
          {/* Main Menu Items */}
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full rounded-lg transition-all duration-200 hover:bg-zinc-800 hover:scale-105 hover:shadow-lg ${
                  item.active ? 'bg-zinc-800 shadow-md' : ''
                } ${isMenuOpen ? 'flex items-center space-x-4 px-3 py-2' : 'flex flex-col items-center justify-center px-2 py-2 space-y-1'}`}
              >
                <item.icon
                  size={isMenuOpen ? 24 : 18}
                  className={`transition-colors duration-200 flex-shrink-0 ${item.active ? 'text-red-500' : 'text-zinc-300 hover:text-white'}`}
                />
                {isMenuOpen ? (
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      item.active ? 'text-red-500' : 'text-zinc-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                ) : (
                  <span className="text-xs text-zinc-400 font-light text-center leading-tight">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </div>

          {isMenuOpen && (
            <>
              <div className="my-4 border-t border-zinc-700"></div>
              <div className="space-y-1">
                <h3 className="px-3 py-2 text-sm font-medium text-zinc-400 uppercase tracking-wide">
                  Categories
                </h3>
                {categoryItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-4 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-zinc-800 hover:scale-105 hover:shadow-lg"
                  >
                    <item.icon size={24} className="text-zinc-300 hover:text-white transition-colors duration-200" />
                    <span className="text-sm font-medium text-zinc-200 hover:text-white transition-colors duration-200">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Watermark */}

      </div>
    </>
  );
};

export default YoutubeNav;