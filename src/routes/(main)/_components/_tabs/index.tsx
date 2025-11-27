import TabContact from './contact'
import TabExperience from './experience'
import TabHome from './home'
import TabIntroduction from './introduction'
import TabSkill from './skill'

export const MainTabs: { id: string; name: string; href: string; component: React.ReactNode }[] = [
  {
    id: 'home',
    name: '홈',
    href: '/',
    component: <TabHome />,
  },
  {
    id: 'introduction',
    name: '소개',
    href: '/introduction',
    component: <TabIntroduction />,
  },
  {
    id: 'experience',
    name: '경험',
    href: '/experience',
    component: <TabExperience />,
  },
  {
    id: 'skill',
    name: '기술',
    href: '/skill',
    component: <TabSkill />,
  },
  {
    id: 'contact',
    name: '문의',
    href: '/contact',
    component: <TabContact />,
  },
] as const

export type MainTab = (typeof MainTabs)[number]
