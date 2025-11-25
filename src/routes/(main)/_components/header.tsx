import { useThemeStore } from '@/_store/theme'
import { MainTabs, type MainTab } from '../_components/_tabs'

import { Menu, Sun } from 'lucide-react'
import cn from '@/_utils/cn'

export default function MainHeader({
  activeTab,
  setActiveTab,
}: {
  activeTab: MainTab
  setActiveTab: (tab: MainTab) => void
}) {
  const { toggleMode } = useThemeStore()

  return (
    <header className='bg-bg fixed top-0 right-0 left-0 z-50 w-full border-b border-gray-300'>
      <div className='container mx-auto flex h-[56px] items-center justify-between px-4'>
        {/* Left header */}
        <div className='from-gradient-from to-gradient-to cursor-default bg-linear-to-r bg-clip-text font-bold text-transparent'>
          LieuNyan
        </div>

        {/* Center header */}
        <div className='flex items-center gap-3'>
          {MainTabs.map((tab) => (
            <div key={tab.href} className='cursor-pointer' onClick={() => setActiveTab(tab)}>
              <span
                className={cn(
                  'relative text-sm font-medium transition-all duration-200',
                  'hover:text-accent hover:scale-110',
                  activeTab.href === tab.href ? 'text-accent' : 'text-text',
                )}
              >
                {tab.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right header */}
        <div className='flex items-center gap-4'>
          <button onClick={toggleMode}>
            <Sun className={'text-text hover:text-accent cursor-pointer hover:scale-110'} />
          </button>
          <button
            onClick={() => {
              console.log('Open Menu')
            }}
          >
            <Menu className={'text-text hover:text-accent cursor-pointer hover:scale-110'} />
          </button>
        </div>
      </div>
    </header>
  )
}
