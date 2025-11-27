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
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2
      let closestIndex = 0
      let minDistance = Infinity

      tabRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const elCenter = rect.top + rect.height / 2
        const distance = Math.abs(elCenter - viewportCenter)

        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      const targetTab = MainTabs[closestIndex]
      if (targetTab && targetTab.href !== activeTab.href) {
        setActiveTab(targetTab)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab.href, setActiveTab])

  return (
    <div className='container mx-auto mt-[56px] flex flex-auto flex-col space-y-5 px-4'>
      {MainTabs.map((tab, index) => (
        <section
          id={tab.id}
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
