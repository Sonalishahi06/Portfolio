import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
         <Image src={assets.sonali} alt='' className={`w-36 mx-auto mb-2 ${isDarkMode ? 'filter brightness-0 invert' : ''}`}/>

         <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className={`w-6 ${isDarkMode ? 'filter brightness-0 invert' : ''}`}/>
            sonalikumarishahi07@gmail.com
         </div>
        </div>

        <div className='text-center sm:flex items-center justify-center border-t
         border-gray-400 mx-[10%] mt-12 py-6'>
           
            <ul className='flex items-center justify-between w-full sm:w-2/3 mx-auto '>

                <li><a target='_blank' href="https://github.com/Sonalishahi06" className="flex items-center gap-2">
                <Image src={assets.github_logo} alt='' className={`w-6 ${isDarkMode ? 'filter brightness-0 invert' : ''}`} />Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/sonali-shahi-2a582a2a8/" className="flex items-center gap-2">
                <Image src={assets.linkedin_logo} alt='' className={`w-6 ${isDarkMode ? 'filter brightness-0 invert' : ''}`}/>linkedin</a></li>
                <li><a target='_blank' href=" https://www.instagram.com/sonali_shahi_00/" className="flex items-center gap-2">
                <Image src={assets.insta_logo} alt='' className={`w-6 ${isDarkMode ? 'filter brightness-0 invert' : ''}`}/>Instagram</a></li>
               
            </ul>
        </div>
    </div>
  )
}

export default Footer