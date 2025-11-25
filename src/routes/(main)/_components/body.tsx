import { MainTabs, type MainTab } from './_tabs'
import { useEffect, useRef } from 'react'

export default function MainBody({
  activeTab,
  setActiveTab,
}: {
  activeTab: MainTab
  setActiveTab: (tab: MainTab) => void
}) {
  const tabRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const index = MainTabs.findIndex((t) => t.href === activeTab.href)
    const el = tabRefs.current[index]

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [activeTab])

  return (
    <div className='container mx-auto mt-[56px] flex flex-auto flex-col space-y-5 overflow-y-auto px-4'>
      {MainTabs.map((tab, index) => (
        <section
          key={tab.href}
          ref={(el) => {
            tabRefs.current[index] = el
          }}
        >
          {tab.component}
        </section>
      ))}
    </div>
  )
}
