import { Building2, CalendarDays, ChevronDown, MapPin, Star } from 'lucide-react'
import TabLayout from './layout'
import { useState } from 'react'

const CareerHistories = [
  {
    title: '카사요',
    period: '2023.11 - 2025.10',
    position: '풀스택 개발자 (대리)',
    description:
      '신차·중고차·리스·렌트 통합 매매 플랫폼의 웹 서비스 및 웹앱 개발을 주도하며 팀을 리드하였습니다.',
    detailDescription: [
      '개발 전반에 대한 리드 및 기술 방향성 주도',
      '웹 서비스 및 웹앱 전체 기능 설계와 개발 수행',
    ],
    achievements: [
      '소규모 개발팀 리드 및 프로젝트 개발 총괄',
      '웹뷰 앱 5종 신규 개발 및 유지보수 수행',
      '관련 웹 서비스 신규 개발 및 개선',
    ],
    techStack: ['ReactJS', 'NestJS', 'MariaDB', 'Prisma ORM', 'Android', 'iOS', 'AWS'],
  },

  {
    title: '아이에이오',
    period: '2023.02 - 2023.10',
    position: '백엔드 개발자 (사원)',
    description: '공인 문서 번역 서비스의 백엔드 시스템을 설계 및 개발하였습니다.',
    detailDescription: ['백엔드 기능 개발 수행'],
    achievements: ['백엔드 핵심 기능 개발 및 성능 개선', '서버 구조 안정화 및 API 고도화'],
    techStack: ['NestJS', 'MariaDB', 'AWS'],
  },

  {
    title: '플리퍼코퍼레이션',
    period: '2021.06 - 2022.07',
    position: '웹 개발자 (사원)',
    description: '앱 빌더 서비스의 기능 구현 및 웹 서비스 연동 개발을 수행하였습니다.',
    detailDescription: ['JavaScript 기반 SDK 기능 개발', '앱 및 웹 서비스 기능 개발 수행'],
    achievements: ['앱 빌더 SDK 신규 기능 구현', '웹 서비스 및 웹앱 연동 개발'],
    techStack: ['JavaScript', 'Android'],
  },
] as const

const CareerHistoryCard = ({
  careerHistory,
}: {
  careerHistory: (typeof CareerHistories)[number]
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='border-border bg-text/10 bg-card rounded-3xl border p-6 shadow-[0_0_30px_rgba(0,0,0,0.15)] transition md:p-8'>
      {/* 상단 날짜 */}
      <div className='text-colorful flex items-center gap-2 text-sm font-semibold'>
        <CalendarDays className='h-4 w-4' />
        <span>{careerHistory.period}</span>
      </div>

      {/* 직책 */}
      <h3 className='text-accent mt-2 text-xl font-bold'>{careerHistory.position}</h3>

      {/* 회사 + 위치 */}
      <div className='text-accent mt-2 flex flex-col items-start gap-2 text-sm sm:flex-row sm:items-center sm:gap-4'>
        <div className='flex items-center gap-1'>
          <Building2 className='h-4 w-4' />
          <span>{careerHistory.title}</span>
        </div>

        <div className='flex items-center gap-1'>
          <MapPin className='h-4 w-4' />
          <span>서울, 대한민국</span>
        </div>
      </div>

      {/* 설명 */}
      <p className='text-accent mt-4 text-sm leading-relaxed whitespace-pre-line'>
        {careerHistory.description}
      </p>

      {/* 주요성과 태그 박스 */}
      <div className='mt-6 flex flex-col gap-3 md:flex-row'>
        {careerHistory.achievements.map((ach, i) => (
          <div key={i} className='bg-text/5 flex flex-1 items-center gap-3 rounded-2xl px-4 py-3'>
            <div className='bg-accent/5 text-accent flex h-9 w-9 flex-none items-center justify-center rounded-xl'>
              <Star className='text-colorful h-4 w-4' />
            </div>
            <p className='text-accent text-sm'>{ach}</p>
          </div>
        ))}
      </div>

      {/* 상세보기 */}
      <button
        onClick={() => setOpen(!open)}
        className='text-accent mt-6 flex cursor-pointer items-center gap-1 text-sm font-semibold hover:opacity-80'
      >
        자세히 보기
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* 상세 설명 */}
      {open && (
        <div className='border-border mt-4 ml-1 space-y-2 border-l pl-4'>
          {careerHistory.detailDescription.map((d, i) => (
            <p key={i} className='text-accent text-sm'>
              • {d}
            </p>
          ))}

          <div className='mt-4'>
            <p className='text-accent mb-2 font-medium'>사용 기술</p>
            <div className='flex flex-wrap gap-2'>
              {careerHistory.techStack.map((t, i) => (
                <span key={i} className='bg-accent/5 text-accent rounded-full px-3 py-1 text-xs'>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function TabExperience() {
  return (
    <TabLayout>
      {/* 소개 */}
      <div className='mx-auto flex max-w-3xl flex-col items-center justify-center px-4'>
        {/* 제목 */}
        <div className='text-accent mb-3 text-4xl font-bold'>경험</div>

        {/* 그라데이션 밑줄 */}
        <div className='from-gradient-from to-gradient-to mb-6 h-1 w-20 rounded-full bg-linear-to-r' />

        {/* 부가 설명 */}
        <div className='text-text mb-5'>
          다양한 신규 개발 경험을 바탕으로, 안정적이고 확장 가능한 시스템을 구축합니다.
        </div>

        {/* 경력 박스 */}
        <div className='space-y-10'>
          {CareerHistories.map((careerHistory) => (
            <CareerHistoryCard key={careerHistory.title} careerHistory={careerHistory} />
          ))}
        </div>
      </div>
    </TabLayout>
  )
}
