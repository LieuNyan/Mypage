export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto flex min-h-[calc(100dvh-56px)] flex-auto flex-col items-center justify-center py-20'>
      {children}
    </div>
  )
}
