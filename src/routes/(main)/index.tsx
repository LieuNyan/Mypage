import { createFileRoute } from '@tanstack/react-router'
import MainHeader from './_components/header'
import MainBody from './_components/body'
import { MainTabs, type MainTab } from './_components/_tabs'
import { useEffect, useState } from 'react'
import cn from '@/_utils/cn'
import { useThemeStore } from '@/_store/theme'
import GithubLink from '@/routes/(main)/_components/_items/github-link'

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
      html.classList.add('bg-bg')
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
        'bg-bg',
      )}
    >
      <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainBody activeTab={activeTab} setActiveTab={setActiveTab} />

      <GithubLink />
    </div>
  )
}
