import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, scale } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
       initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.3}}
         className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
        <motion.h2
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.5}}
         className='text-center text-5xl font-Ovo'>About me</motion.h2>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
         className='flex w-full flex-col lg:flex-row items-stretch
        gap-20 my-20'>
        <motion.div
        initial={{scale:0.9,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:0.6}}
         className='w-64 sm:w-80 lg:w-1/3 rounded-3xl max-w-none flex mx-auto lg:mx-0'>
         <Image src={assets.work} alt='user' className='w-full h-full object-cover rounded-3xl'/> 
        </motion.div>
        
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.8}}
         className='flex-1 lg:w-1/2 flex flex-col justify-center'>
         <p className='mb-10 max-w-2xl font-ovo'>I’m an Electrical and Electronics Engineering graduate with a strong passion for web development and modern technologies. My expertise lies in building responsive, scalable, and user-first applications.
          I’ve worked on projects both independently and in teams, participated in hackathons, and consistently push myself to explore emerging tools and frameworks. Currently, I’m seeking opportunities to grow as a Software Development Engineer (SDE) and contribute to building impactful, real-world digital solutions.</p>

          <motion.ul
          initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8,delay:1}}
           className='grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6
          max-w-2xl'>
           {infoList.map(({icon,iconDark,title,description},
           index)=>( 
            <motion.li
            whileHover={{scale:1.05}}
             className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500
    ${isDarkMode ? "border-white hover:bg-darkHover hover:shadow-white text-white" 
      : "border-gray-400 hover:bg-lightHover hover:shadow-black text-gray-700" }`}
                key={index}>
                <Image src={ isDarkMode ? iconDark:icon} alt={title} className='w-7
                mt-3'/>
                <h3 className={`my-4 font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>{title}</h3>
                <p className={`${isDarkMode ? "text-white/80" : "text-gray-600"} text-sm`}>{description}</p>
            </motion.li>
           ))}
          </motion.ul>

          <motion.h4
          initial={{y:20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:1.3}}
           className={`my-6 font-ovo ${isDarkMode ? "text-white/80" : "text-gray-600"}`}>Tools I use</motion.h4>

          <motion.ul
          initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:1.5}}
           className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool,index)=>(
              <motion.li
              whileHover={{scale:1.1}}
               className='flex items-center justify-center
              w-12 sm:w-14 aspect-square border border-gray-400
              rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
               key={index}>
                <Image src={tool} alt='Tool' className='w-5
                sm:w-7'/>
              </motion.li>
            ))}
          </motion.ul>

    </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default About
