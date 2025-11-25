import TabHome from './home'

export const MainTabs: { name: string; href: string; component: React.ReactNode }[] = [
  {
    name: '홈',
    href: '/',
    component: <TabHome />,
  },
  {
    name: '소개',
    href: '/about',
    component: <div>About</div>,
  },
] as const

export type MainTab = (typeof MainTabs)[number]
