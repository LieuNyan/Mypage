import { DatabaseIcon } from 'lucide-react'
import {
  BackendIcon,
  NodejsIcon,
  OrmIcon,
  FrontendIcon,
  ReactIcon,
  FrontendToolIcon,
  AppIcon,
  AndroidIcon,
  IosIcon,
  InfraIcon,
  AwsIcon,
  CiCdIcon,
  ServiceIcon,
  SentryIcon,
  GitIcon,
  NotionIcon,
} from './_icons'
import TabLayout from './layout'
import cn from '@/_utils/cn'

const Skills_Categoryized = [
  {
    category: 'Backend',
    icon: <BackendIcon />,
    description: `주로 NestJS로 안정적이고 확장 가능한 백엔드 서비스를 구축합니다.
여러 종류의 데이터베이스를 효율적으로 다루며 서비스 특성에 맞는 구조를 설계합니다.
ORM 기반의 코드 레벨 데이터 모델 관리를 선호합니다.`,
    skills: [
      {
        name: 'Node.js',
        includes: 'NestJS, Express',
        progress: 90,
        icon: <NodejsIcon />,
      },
      {
        name: 'Database',
        includes: 'MariaDB, Redis',
        progress: 90,
        icon: <DatabaseIcon />,
      },
      {
        name: 'ORM',
        includes: 'Prisma',
        progress: 90,
        icon: <OrmIcon />,
      },
    ],
  },

  {
    category: 'Frontend',
    icon: <FrontendIcon />,
    description: `리액트 기반의 웹 애플리케이션을 개발하며, 모바일 환경에 최적화된 구현 경험이 풍부합니다.
다양한 디바이스에서도 일관된 사용자 경험을 제공할 수 있는 웹 프론트엔드 구성이 가능합니다.`,
    skills: [
      {
        name: 'React.js',
        includes: 'ReactJS, NextJS',
        progress: 80,
        icon: <ReactIcon />,
      },
      {
        name: '프론트엔드 도구',
        includes: 'Zustand, TailwindCSS',
        progress: 80,
        icon: <FrontendToolIcon />,
      },
    ],
  },

  {
    category: 'App',
    icon: <AppIcon />,
    description: `Android와 iOS 기반의 WebView 앱을 개발할 수 있으며, 필요한 네이티브 기능도 직접 구현할 수 있습니다.
리액트 프론트엔드와 네이티브 단을 연동하여 앱이 매끄럽게 동작하도록 구성할 수 있습니다.`,
    skills: [
      {
        name: 'Android',
        includes: 'Android Studio, Kotlin',
        progress: 75,
        icon: <AndroidIcon />,
      },
      {
        name: 'iOS',
        includes: 'Xcode, Swift',
        progress: 75,
        icon: <IosIcon />,
      },
    ],
  },

  {
    category: 'Infra',
    icon: <InfraIcon />,
    description: `다양한 AWS 인프라 서비스를 활용해 클라우드 환경에서 웹 서비스를 안정적으로 구축할 수 있습니다.
서비스 요구사항에 따라 AWS 기능들을 합리적으로 조합해 확장 가능하고 탄탄한 인프라 환경을 구축할 수 있습니다.`,
    skills: [
      {
        name: 'AWS',
        includes: 'ECS, EC2, S3',
        progress: 85,
        icon: <AwsIcon />,
      },
      {
        name: 'CI/CD',
        includes: 'Jenkins, Codepipeline',
        progress: 75,
        icon: <CiCdIcon />,
      },
    ],
  },

  {
    category: 'Service',
    icon: <ServiceIcon />,
    description: `외부 개발 도구와 서비스를 능숙하게 활용해 개발 생산성을 높이고 프로젝트를 효율적으로 운영할 수 있습니다.`,
    skills: [
      {
        name: '에러 트래킹',
        includes: 'Sentry',
        progress: 80,
        icon: <SentryIcon />,
      },
      {
        name: '버전 관리',
        includes: 'Git',
        progress: 90,
        icon: <GitIcon />,
      },
      {
        name: '협업 도구',
        includes: 'Notion, Slack',
        progress: 85,
        icon: <NotionIcon />,
      },
    ],
  },
] as const

function SkillCard({ skill }: { skill: (typeof Skills_Categoryized)[number]['skills'][number] }) {
  return (
    <div
      className={cn(
        'bg-card border-border bg-text/10 flex flex-col gap-3 rounded-2xl border p-4 transition-all duration-200 md:p-5',
        'hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]',
      )}
    >
      {/* 상단: 아이콘 + 이름 + 퍼센트 */}
      <div className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-2'>
          <div className='bg-accent/10 text-accent flex h-6 w-6 items-center justify-center rounded-xl p-1'>
            {skill.icon}
          </div>
          <div className='text-accent text-sm font-semibold md:text-base'>{skill.name}</div>
        </div>

        <span className='text-accent text-xs font-semibold md:text-sm'>{skill.progress}%</span>
      </div>

      {/* 중간: 프로그레스 바 */}
      <div className='mt-1 flex flex-col gap-1.5'>
        <div className='bg-muted/60 h-2 w-full overflow-hidden rounded-full'>
          <div
            className='from-gradient-from to-gradient-to h-full rounded-full bg-linear-to-r'
            style={{ width: `${skill.progress}%` }}
          />
        </div>

        {/* 하단: includes 텍스트 */}
        <p className='text-accent text-xs md:text-sm'>{skill.includes}</p>
      </div>
    </div>
  )
}

export default function TabSkill() {
  return (
    <TabLayout>
      {/* 소개 */}
      <div className='mx-auto flex max-w-3xl flex-col items-center justify-center px-4'>
        {/* 제목 */}
        <div className='text-accent mb-3 text-4xl font-bold'>기술</div>

        {/* 그라데이션 밑줄 */}
        <div className='from-gradient-from to-gradient-to mb-6 h-1 w-20 rounded-full bg-linear-to-r' />
      </div>

      {/* 기술 박스 */}
      <div className='border-border w-full rounded-xl border p-6 shadow-lg'>
        <section className='space-y-10'>
          {Skills_Categoryized.map((category) => (
            <div key={category.category} className='space-y-4'>
              {/* 카테고리 설명 */}
              <div className='flex flex-col gap-2'>
                {/* 카테고리 헤더 (Backend, Frontend 등) */}
                <div className='flex items-center gap-2'>
                  <div className='bg-text/10 text-accent flex h-8 w-8 items-center justify-center rounded-xl p-2'>
                    {category.icon}
                  </div>
                  <h2 className='text-accent text-lg font-semibold md:text-xl'>
                    {category.category}
                  </h2>
                </div>

                {/* 카테고리 설명 */}
                {category.description && (
                  <p className='text-accent text-xs whitespace-pre-wrap md:text-sm'>
                    {category.description}
                  </p>
                )}
              </div>

              {/* 스킬 카드 리스트 */}
              <div className='space-y-3'>
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </TabLayout>
  )
}
