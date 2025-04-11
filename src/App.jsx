import './App.css'
import Header from './components/Header'
import OverviewSection from './components/OverviewSection'
import SocialSection from './components/SocialSection'

function App() {

  return (
    <div className=' bg-white dark:bg-[#1D1F29] py-[42px] px-[25px] min-h-screen relative'>
      <div className='absolute w-full bg-[#F7F9FF] dark:bg-[#20222F] h-[244px] top-0 left-0 rounded-b-[20px]'></div>
      <div className='max-w-[1140px] mx-auto relative'>
        <Header/>
        <SocialSection/>
        <OverviewSection/>
      </div>
    </div>
  )
}

export default App
