import React, { useEffect, useState } from 'react'

const Header = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
          setTheme('dark')
          document.documentElement.classList.add('dark')
        } else {
          setTheme('light')
          document.documentElement.classList.remove('dark')
        }
      }, [])

      useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
      }, [theme])

    const themeToggle = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }

  return (
    <header className=' block md:flex items-center justify-between'>
        <div className='font-bold'>
            <h1 className='text-[#1D1F29] dark:text-white text-[28px]'>Social Media Dashboard</h1>
            <span className='text-[#63687D] dark:text-[#8C98C6] text-[14px]'>Total Followers: 23,004</span>
        </div>
        <div className='h-[1px] bg-[#848BAB] dark:bg-[#333A55] my-[27px] block md:hidden'></div>
        <div className='flex items-center justify-between md:justify-center gap-[13px]'>
           <span className='text-[#848BAB] dark:text-white font-bold'>Dark Mode</span>
            <label >
                <input type="checkbox" onChange={themeToggle} checked={theme === 'dark'} className='sr-only peer' />
                <div className="check-bg relative w-[48px] h-[24px] bg-[#AEB3CB] dark:bg-gradient-to-r from-[#388FE7] to-[#40DB82] rounded-full transition-all cursor-pointer">
                <span className="check-span block bg-white dark:bg-[#252B42] w-[18px] h-[18px] rounded-full transition-all absolute left-[calc(100%-22px)] top-[3px] dark:left-[4px]"></span>
                </div>
            </label>
        </div>
    </header>
  )
}

export default Header