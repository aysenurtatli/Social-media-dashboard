import React from 'react'
import up from '../assets/images/icon-up.svg'
import down from '../assets/images/icon-down.svg'



const SocialCard = ({icon, iconAlt, followerNum, username, changeToday, isIncrease }) => {
    const followerText = iconAlt === 'youtube' ? 'subscribers' : 'followers';
    const borderColor = iconAlt === 'facebook' ? 'border-[#178FF5]' :
                        iconAlt === 'twitter' ? 'border-[#1DA1F2]' :
                        iconAlt === 'instagram' ? 'border-[#EE877E]' :
                        'border-[#C4032B]'

  return (
    <div className={` bg-[#F1F3FA] dark:bg-[#252B42] border-t-4 ${borderColor} rounded-[5px] py-[24px] hover:bg-[#E1E4F0] cursor-pointer dark:hover:bg-[#333A55]`}>
        <div className='flex items-center flex-col'>
        <div className='flex items-center gap-[8px]'>
            <img src={icon} alt={iconAlt} className='w-[20px] h-[20px]' />
            <span className='text-[12px] font-bold text-[#63687D] dark:text-[#8C98C6]'>{username}</span>
        </div>
        <div className='flex flex-col items-center mb-[30px]'>
            <span className='block text-[#1D1F29] dark:text-white font-bold text-[56px]'>{followerNum}</span>
            <span className='uppercase tracking-[5px] text-[12px] text-[#63687D] dark:text-[#8C98C6]'>{followerText}</span>
        </div>
        <div className='flex items-center gap-[4px]'>
            <img src={isIncrease ? up : down}  />
            <span className={`font-bold text-[12px] ${isIncrease ? 'text-[#1EB589]' : 'text-[#DC414C]'}`}>{changeToday} Today</span>
        </div>
        </div>
    </div> 
  )
}

export default SocialCard