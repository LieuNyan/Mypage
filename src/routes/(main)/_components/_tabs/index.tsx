import TabHome from './home'
import TabIntroduction from './introduction'

export const MainTabs: { name: string; href: string; component: React.ReactNode }[] = [
  {
    name: '홈',
    href: '/',
    component: <TabHome />,
  },
  {
    name: '소개',
    href: '/introduction',
    component: <TabIntroduction />,
  },
] as const

export type MainTab = (typeof MainTabs)[number]
