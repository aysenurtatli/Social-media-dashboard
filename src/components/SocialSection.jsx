import React from 'react'
import SocialCard from './SocialCard'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import instagram from '../assets/images/icon-instagram.svg'
import youtube from '../assets/images/icon-youtube.svg'

const SocialSection = () => {
      
    const socialInfo = [
        {icon: facebook, alt: 'facebook', follower: '1987', username: '@nathanf', changeToday: 12, isIncrease: true},
        {icon: twitter, alt: 'twitter', follower: '1044', username: '@nathanf',changeToday: 99, isIncrease: true},
        {icon: instagram, alt: 'instagram', follower: '11k', username: '@realnathanf',changeToday: 1099, isIncrease: true},
        {icon: youtube, alt: 'youtube', follower: '8239', username: 'Nathan F.', changeToday: 144, isIncrease: false},
    ]
    
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[30px] my-[50px] '>
        {socialInfo.map(({icon, alt, follower, username, changeToday, isIncrease}) => (
            <SocialCard icon={icon} iconAlt={alt} followerNum={follower} username={username} changeToday={changeToday} isIncrease={isIncrease}/>
        ))}
    </div>
  )
}

export default SocialSection