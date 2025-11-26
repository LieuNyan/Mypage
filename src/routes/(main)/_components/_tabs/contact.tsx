import { MailIcon, Zap, Handshake } from 'lucide-react'
import TabLayout from './layout'
import ContactForm from '../_items/_form/contact'

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
          <div className='border-border flex items-center gap-4 rounded-2xl border px-5 py-4'>
            <div className='bg-background/30 text-accent flex h-11 w-11 flex-none items-center justify-center rounded-xl'>
              <MailIcon className='h-5 w-5' />
            </div>
            <div className='flex flex-col'>
              <span className='text-accent text-xs'>이메일</span>
              <span className='text-text text-sm font-medium'>lieu3376@gmail.com</span>
            </div>
          </div>

          {/* 하단 두 개 카드 */}
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='border-border flex items-center gap-3 rounded-2xl border px-5 py-4'>
              <div className='flex items-center gap-3'>
                <div className='bg-background/30 text-accent flex h-10 w-10 flex-none items-center justify-center rounded-xl'>
                  <Zap className='h-5 w-5' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-accent text-sm font-semibold'>빠른 응답</span>
                  <span className='text-text text-xs'>가능한 한 24시간 이내에 답변드립니다.</span>
                </div>
              </div>
            </div>

            <div className='border-border flex items-center gap-3 rounded-2xl border px-5 py-4'>
              <div className='flex items-center gap-3'>
                <div className='bg-background/30 text-accent flex h-10 w-10 flex-none items-center justify-center rounded-xl'>
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
        <ContactForm />
      </div>
    </TabLayout>
  )
}
