import { MailIcon, Zap, Handshake } from 'lucide-react'
import TabLayout from './layout'

export default function TabContact() {
  return (
    <TabLayout>
      <div className='mx-auto flex max-w-3xl flex-col gap-8 px-4 py-10'>
        {/* 헤더 */}
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-accent mb-2 text-4xl font-bold'>문의</h1>
          <div className='from-gradient-from to-gradient-to mb-6 h-1 w-20 rounded-full bg-linear-to-r' />
        </div>

        <h2 className='text-accent text-2xl font-semibold'>
          이메일 혹은 문의를 작성해 주시면 답변드리겠습니다.
        </h2>

        {/* 상단 정보 카드들 */}
        <div className='flex flex-col gap-4'>
          {/* 메일 카드 */}
          <div className='bg-background/20 border-border flex items-center gap-4 rounded-2xl border px-5 py-4'>
            <div className='bg-background-secondary/50 text-accent flex h-11 w-11 flex-none items-center justify-center rounded-xl'>
              <MailIcon className='h-5 w-5' />
            </div>
            <div className='flex flex-col'>
              <span className='text-accent text-xs'>이메일</span>
              <span className='text-text text-sm font-medium'>lieu3376@gmail.com</span>
            </div>
          </div>

          {/* 하단 두 개 카드 */}
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='bg-background/20 border-border flex items-center gap-3 rounded-2xl border px-5 py-4'>
              <div className='flex items-center gap-3'>
                <div className='bg-background-secondary/50 text-accent flex h-10 w-10 flex-none items-center justify-center rounded-xl'>
                  <Zap className='h-5 w-5' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-accent text-sm font-semibold'>빠른 응답</span>
                  <span className='text-text text-xs'>가능한 한 24시간 이내에 답변드립니다.</span>
                </div>
              </div>
            </div>

            <div className='bg-background/20 border-border flex items-center gap-3 rounded-2xl border px-5 py-4'>
              <div className='flex items-center gap-3'>
                <div className='bg-background-secondary/50 text-accent flex h-10 w-10 flex-none items-center justify-center rounded-xl'>
                  <Handshake className='h-5 w-5' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-accent text-sm font-semibold'>협업 환영</span>
                  <span className='text-text text-xs'>
                    웹 서비스·웹앱 중심의 다양한 프로젝트를 기다리고 있습니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 문의 폼 */}
        <div className='bg-background/20 border-border rounded-2xl border px-5 py-6'>
          <form
            className='flex flex-col gap-4'
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            {/* 이름 */}
            <div className='flex flex-col gap-1'>
              <label className='text-text text-sm font-medium'>이름</label>
              <input
                type='text'
                placeholder='성함을 입력해주세요'
                className='border-border bg-background-secondary/5 text-accent placeholder:text-text/70 focus:ring-colorful rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2'
              />
            </div>

            {/* 이메일 */}
            <div className='flex flex-col gap-1'>
              <label className='text-text text-sm font-medium'>이메일</label>
              <input
                type='email'
                placeholder='이메일 주소를 입력해주세요'
                className='border-border bg-background-secondary/5 text-accent placeholder:text-text/70 focus:ring-colorful rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2'
              />
            </div>

            {/* 제목 */}
            <div className='flex flex-col gap-1'>
              <label className='text-text text-sm font-medium'>제목</label>
              <input
                type='text'
                placeholder='문의 제목을 입력해주세요'
                className='border-border bg-background-secondary/5 text-accent placeholder:text-text/70 focus:ring-colorful rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2'
              />
            </div>

            {/* 메시지 */}
            <div className='flex flex-col gap-1'>
              <label className='text-text text-sm font-medium'>메시지</label>
              <textarea
                rows={6}
                placeholder='문의하실 내용을 자세히 적어주세요...'
                className='border-border bg-background-secondary/5 text-accent placeholder:text-text/70 focus:ring-colorful resize-none rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2'
              />
            </div>

            {/* 버튼 */}
            <button
              type='submit'
              className='from-gradient-from to-gradient-to mt-2 h-12 w-full cursor-pointer rounded-xl bg-linear-to-r text-sm font-semibold text-white shadow-lg shadow-black/40 transition-transform hover:scale-[1.01] active:scale-[0.99]'
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
    </TabLayout>
  )
}
