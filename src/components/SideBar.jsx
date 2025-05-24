import React, { useState } from 'react'
import {
  Home,
  Scissors,
  PlaySquare,
  Film,
  Clapperboard,
  Music,
  Gamepad2,
  Settings,
  HelpCircle,
  Menu,
} from 'lucide-react'

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
 
  const mainItems = [
    { icon: Home, label: "Home" },
    { icon: Scissors, label: "Shorts" },
    { icon: PlaySquare, label: "Subscriptions" },
  ]

  const categoryItems = [
    { icon: Film, label: "Movies" },
    { icon: Clapperboard, label: "Entertainment" },
    { icon: Music, label: "Music" },
    { icon: Gamepad2, label: "Gaming" },
  ]

  const bottomItems = [
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help" },
  ]

  return (
    <aside className={`h-screen fixed top-0 left-0 z-50 ${isCollapsed ? 'w-16' : 'w-60'} transition-all duration-200`}>
      <nav className='h-full flex flex-col bg-zinc-900'>
        {/* Header */}
        <div className='px-4 py-2 flex items-center gap-4'>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className='p-2 rounded-full hover:bg-zinc-800 text-white transition-colors'
            aria-label="Toggle sidebar"
          >
            <Menu className='w-5 h-5' />
          </button>
          {!isCollapsed && (
            <div className='flex items-center gap-1'>
              <img
                src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
                alt="YouTube"
                className='w-7 h-5'
              />
              <span className='text-white text-xl font-medium'>YouTube</span>
            </div>
          )}
        </div>

        <div className='flex-1 overflow-y-auto'>
          {/* Main Section */}
          <div className='py-2'>
            {mainItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-6 py-2 rounded-lg hover:bg-zinc-800 text-white transition-colors ${
                  isCollapsed ? 'px-2 mx-2 justify-center' : 'px-3 mx-3'
                }`}
                aria-label={isCollapsed ? item.label : undefined}
              >
                <item.icon className={isCollapsed ? 'w-6 h-6' : 'w-6 h-6'} />
                {!isCollapsed && <span className='text-sm'>{item.label}</span>}
              </a>
            ))}
          </div>

          {!isCollapsed && (
            <div className='border-t border-zinc-700 py-3'>
              <div className='px-6 mb-2'>
                <span className='text-white font-medium text-base'>Explore</span>
              </div>
              {categoryItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className='flex items-center gap-6 px-3 py-2 mx-3 rounded-lg hover:bg-zinc-800 text-white transition-colors'
                >
                  <item.icon className='w-6 h-6' />
                  <span className='text-sm'>{item.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className='border-t border-zinc-700 p-2'>
          {bottomItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-6 py-2 rounded-lg hover:bg-zinc-800 text-white transition-colors ${
                isCollapsed ? 'px-2 mx-2 justify-center' : 'px-3 mx-1'
              }`}
              aria-label={isCollapsed ? item.label : undefined}
            >
              <item.icon className={isCollapsed ? 'w-6 h-6' : 'w-6 h-6'} />
              {!isCollapsed && <span className='text-sm'>{item.label}</span>}
            </a>
          ))}
          
          {!isCollapsed && (
            <div className='px-3 py-4 text-zinc-400 text-xs'>
              <div className='mb-2 space-x-2'>
                <a href="#" className='hover:text-white'>About</a>
                <span>•</span>
                <a href="#" className='hover:text-white'>Press</a>
                <span>•</span>
                <a href="#" className='hover:text-white'>Copyright</a>
              </div>
              <div className='mb-2 space-x-2'>
                <a href="#" className='hover:text-white'>Contact us</a>
                <span>•</span>
                <a href="#" className='hover:text-white'>Creators</a>
              </div>
              <div className='mb-2 space-x-2'>
                <a href="#" className='hover:text-white'>Advertise</a>
                <span>•</span>
                <a href="#" className='hover:text-white'>Developers</a>
              </div>
              <div className='mb-3 space-x-2'>
                <a href="#" className='hover:text-white'>Terms</a>
                <span>•</span>
                <a href="#" className='hover:text-white'>Privacy</a>
                <span>•</span>
                <a href="#" className='hover:text-white'>Policy & Safety</a>
              </div>
              <div className='text-zinc-500'>
                © 2024 Google LLC
              </div>
            </div>
          )}
        </div>
      </nav>
    </aside>
  )
}