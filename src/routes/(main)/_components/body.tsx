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

  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isScrolling.current) return

    const index = MainTabs.findIndex((t) => t.href === activeTab.href)
    const el = tabRefs.current[index]

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [activeTab])

  useEffect(() => {
    const handleScroll = () => {
      isScrolling.current = true

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false
      }, 150)

      // 섹션 판별
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
