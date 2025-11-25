export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto flex min-h-dvh flex-auto flex-col items-center justify-center'>
      {children}
    </div>
  )
}
