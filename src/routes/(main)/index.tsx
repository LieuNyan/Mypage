import { createFileRoute } from '@tanstack/react-router'
import MainHeader from './_components/header'
import MainBody from './_components/body'
import Divider from '@/_components/divider'
import { MainTabs, type MainTab } from './_components/_tabs'
import { useEffect, useState } from 'react'
import cn from '@/_utils/cn'
import { useThemeStore } from '@/_store/theme'

export const Route = createFileRoute('/(main)/')({
  component: App,
})

function App() {
  /** set theme to html element */
  const { mode } = useThemeStore()
  useEffect(() => {
    const html = document.documentElement
    if (mode === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [mode])

  const [activeTab, setActiveTab] = useState<MainTab>(MainTabs[0])

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col',
        'transition-colors duration-300 ease-out',
        'bg-(--color-bg)',
      )}
    >
      <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <Divider />
      <MainBody />
    </div>
  )
}
