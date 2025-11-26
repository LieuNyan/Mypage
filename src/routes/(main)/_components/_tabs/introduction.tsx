import { MailIcon, SchoolIcon, Star, UserIcon } from 'lucide-react'
import TabLayout from './layout'

const Tags = [
  {
    content: '5년차 웹 풀스택 개발자',
    icon: <UserIcon className='h-4 w-4' />,
  },
  {
    content: '서울시립대학교 수학과 학사',
    icon: <SchoolIcon className='h-4 w-4' />,
  },
  {
    content: 'lieu3376@gmail.com',
    icon: <MailIcon className='h-4 w-4' />,
  },
] as const

const TagCard = ({ tag }: { tag: (typeof Tags)[number] }) => {
  return (
    <div className='bg-text/5 flex flex-1 items-center gap-3 rounded-2xl px-4 py-3'>
      <div className='bg-accent/5 text-accent flex h-9 w-9 flex-none items-center justify-center rounded-xl'>
        {tag.icon}
      </div>
      <p className='text-accent text-sm'>{tag.content}</p>
    </div>
  )
}

export default function TabIntroduction() {
  return (
    <TabLayout>
      {/* 소개 */}
      <div className='mx-auto flex max-w-3xl flex-col items-center justify-center px-4'>
        {/* 제목 */}
        <div className='text-accent mb-3 text-4xl font-bold'>소개</div>

        {/* 그라데이션 밑줄 */}
        <div className='from-gradient-from to-gradient-to mb-6 h-1 w-20 rounded-full bg-linear-to-r' />

        {/* 텍스트 박스 */}
        <div className='border-accent/20 rounded-xl border p-6 shadow-lg'>
          {/* 제목 */}
          <div className='text-accent mb-3 text-2xl font-semibold'>
            웹 영역을 모두 아우를 수 있는 웹 서비스 개발자
          </div>

          {/* 내용 */}
          <div className='text-muted-foreground text-accent/80 leading-relaxed break-keep'>
            저는 웹 및 웹앱 서비스를 만드는{' '}
            <span className='text-accent font-semibold'>웹 서비스 중심 풀스택 개발자</span>입니다.
            <br />
            최근 프로젝트에서 PC·모바일 웹부터 Android 및 iOS WebView까지 아우르는 서비스를 리드
            개발했으며, 다양한 환경에서 발생하는 웹 이슈를 해결하며 폭넓은 웹 기술 역량을
            쌓아왔습니다.
            <br />
            Node.js 기반 기술 스택을 중심으로, 프로젝트 상황에 맞는 기술을 적절히 조합하여
            활용합니다.
            <br />
            프론트엔드와 백엔드의 유기적인 통합을 지향하며, 서비스의 기초부터 인프라까지 처음부터
            직접 구축해온 경험이 많습니다.
            <br />
            혼자서도, 함께여도, 끈기 있게 문제의 근본적인 해결책을 찾아내는 개발자입니다.
          </div>
        </div>

        {/* 태그 박스 */}
        <div className='mt-5 flex w-full flex-col flex-wrap justify-center gap-2'>
          {Tags.map((tag, index) => (
            <TagCard key={index} tag={tag} />
          ))}
        </div>
      </div>
    </TabLayout>
  )
}
