import { Fragment } from 'react/jsx-runtime'
import { MainTabs, type MainTab } from './_tabs'

export default function MainBody({
  activeTab,
  setActiveTab,
}: {
  activeTab: MainTab
  setActiveTab: (tab: MainTab) => void
}) {
  return (
    <div className='container mx-auto mt-[56px] flex flex-auto flex-col space-y-5 overflow-y-auto px-4'>
      {MainTabs.map((tab) => (
        <Fragment key={tab.href}>{tab.component}</Fragment>
      ))}
    </div>
  )
}
