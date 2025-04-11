import React from 'react'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import instagram from '../assets/images/icon-instagram.svg'
import youtube from '../assets/images/icon-youtube.svg'
import up from '../assets/images/icon-up.svg'
import down from '../assets/images/icon-down.svg'

const platformIcon = {
    facebook,
    twitter,
    instagram,
    youtube
};

const OverviewCard = ({ title, platform, isIncrease, number, percent, }) => {
    const icon = platformIcon[platform];
  
  return (
    <div className='bg-[#F1F3FA] dark:bg-[#252B42] rounded-[5px] px-[25px] py-[30px] hover:bg-[#E1E4F0] cursor-pointer dark:hover:bg-[#333A55]'>
        <div className='flex justify-between items-center'>
            <p className='text-[14px] text-[#63687D] dark:text-[#8C98C6] font-bold'>{title}</p>
            <img src={icon} alt={platform} />
        </div>
        <div className='flex justify-between mt-[30px]'>
            <span className='text-[#1D1F29] dark:text-white text-[32px] font-bold'>{number}</span>
            <div className='flex items-center gap-[4px]'>
                <img src={isIncrease ? up : down}  /> 
                <span className={`font-bold text-[12px] ${isIncrease ? 'text-[#1EB589]' : 'text-[#DC414C]'}`}>{percent}%</span>
            </div>
        </div>
    </div>
  )
}

export default OverviewCard