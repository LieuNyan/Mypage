import TabExperience from './experience'
import TabHome from './home'
import TabIntroduction from './introduction'
import TabSkill from './skill'

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
  {
    name: '경험',
    href: '/experience',
    component: <TabExperience />,
  },
  {
    name: '기술',
    href: '/skill',
    component: <TabSkill />,
  },
] as const

export type MainTab = (typeof MainTabs)[number]
