import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

export default function ContactForm() {
  const [result, setResult] = useState<true | false | null>(null)

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      return response.json() as Promise<{ success: boolean; message: string }>
    },
    onSuccess: (data) => {
      setResult(data.success ? true : false)
    },
    onError: () => {
      setResult(false)
    },
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    // ⭐ 환경변수 적용 (Vite)
    formData.append('access_key', import.meta.env.VITE_PUBLIC_KEY_WEB3FORMS)

    mutate(formData, {
      onSuccess: (data) => {
        if (data.success) form.reset()
      },
    })
  }

  return (
    <div className='bg-background/20 border-border rounded-2xl border px-5 py-6'>
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        {/* 이름 */}
        <div className='flex flex-col gap-1'>
          <label className='text-text text-sm font-medium'>이름</label>
          <input
            type='text'
            name='name'
            required
            placeholder='성함을 입력해주세요'
            className='border-border bg-background-secondary/5 text-accent placeholder:text-text/70 focus:ring-colorful rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2'
          />
        </div>

        {/* 이메일 */}
        <div className='flex flex-col gap-1'>
          <label className='text-text text-sm font-medium'>이메일</label>
          <input
            type='email'
            name='email'
            required
            placeholder='이메일 주소를 입력해주세요'
            className='border-border bg-background-secondary/5 text-accent placeholder:text-text/70 focus:ring-colorful rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2'
          />
        </div>

        {/* 제목 */}
        <div className='flex flex-col gap-1'>
          <label className='text-text text-sm font-medium'>제목</label>
          <input
            type='text'
            name='subject'
            required
            placeholder='문의 제목을 입력해주세요'
            className='border-border bg-background-secondary/5 text-accent placeholder:text-text/70 focus:ring-colorful rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2'
          />
        </div>

        {/* 메시지 */}
        <div className='flex flex-col gap-1'>
          <label className='text-text text-sm font-medium'>메시지</label>
          <textarea
            name='message'
            required
            rows={6}
            placeholder='문의하실 내용을 자세히 적어주세요...'
            className='border-border bg-background-secondary/5 text-accent placeholder:text-text/70 focus:ring-colorful resize-none rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2'
          />
        </div>

        {/* 버튼 */}
        <button
          type='submit'
          disabled={isPending}
          className='from-gradient-from to-gradient-to mt-2 h-12 w-full cursor-pointer rounded-xl bg-linear-to-r text-sm font-semibold text-white shadow-lg shadow-black/40 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50'
        >
          {isPending ? '전송 중...' : '문의하기'}
        </button>

        {/* 결과 표시 */}
        {result !== null && (
          <p
            className={`mt-2 text-center text-sm ${
              result === true ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {result === true
              ? '문의가 발송되었습니다! 빠른 시일 내에 답변드릴게요.'
              : '문의 발송 중 오류가 발생했습니다. 다시 시도해주세요.'}
          </p>
        )}
      </form>
    </div>
  )
}
