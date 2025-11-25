import TabLayout from './layout'

export default function TabHome() {
  return (
    <TabLayout>
      <div className='mb-5 flex flex-col items-center justify-center gap-2'>
        <h1 className='text-accent text-4xl font-bold'>LieuNyan</h1>
        <h2 className='from-gradient-from to-gradient-to bg-linear-to-r bg-clip-text text-3xl font-semibold text-transparent'>
          웹 전문 풀스택 개발자
        </h2>
      </div>

      {/* 소개 텍스트 — 기본 텍스트 색 */}
      <p className='text-text w-full max-w-[540px] text-center text-lg leading-relaxed break-keep'>
        5년차 풀스택 개발자로, 웹 애플리케이션부터 모바일 웹뷰 애플리케이션까지,
        <br />
        <span className='text-accent font-semibold'>웹 서비스 전반</span>에 대한 전문성을 보유하고
        있습니다.
        <br />
        프론트엔드, 백엔드, 인프라까지 전 영역을 아우르며, 서비스 전반의 흐름을 이해하고 실질적인
        비즈니스 가치를 만들어 냅니다.
      </p>
    </TabLayout>
  )
}
