import React from 'react'
import OverviewCard from './OverviewCard'

const overviewInfo = [
    { platform: 'facebook', title: 'Page Views', number: 87, percent: 3, isIncrease: true },
    { platform: 'facebook', title: 'Likes', number: 52, percent: 2, isIncrease: false },
    { platform: 'instagram', title: 'Likes', number: 5462, percent: 2257, isIncrease: true },
    { platform: 'instagram', title: 'Profile Views', number: '52k', percent: 1375, isIncrease: true },
    { platform: 'twitter', title: 'Retweets', number: 117, percent: 303, isIncrease: true },
    { platform: 'twitter', title: 'Likes', number: 507, percent: 553, isIncrease: true },
    { platform: 'youtube', title: 'Likes', number: 107, percent: 19, isIncrease: false },
    { platform: 'youtube', title: 'Total Views', number: 1407, percent: 12, isIncrease: false },
  ];

const OverviewSection = () => {
  return (
    <>
    <h3 className='text-[#63687D] dark:text-white text-[24px] font-bold'>Overview - Today</h3>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[30px] my-[50px]'>
        {overviewInfo.map((item, index) => (
            <OverviewCard key={index} title={item.title} platform={item.platform} number={item.number} isIncrease={item.isIncrease} percent={item.percent}/>
        ))}
        
    </div>
    </>
    
    
  )
}

export default OverviewSection