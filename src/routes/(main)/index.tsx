import { createFileRoute } from '@tanstack/react-router'
import MainHeader from './_components/header'
import MainBody from './_components/body'

export const Route = createFileRoute('/(main)/')({
  component: App,
})

function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <MainHeader />
      <MainBody />
    </div>
  )
}
