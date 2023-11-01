import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Socials } from '../utils/helper'
import { HomeSocialLinks } from '../components'

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start mt-32 mb-12 ">
    <p className=" text-3xl tracking-wide text-texlight " > Rohit kumar modi</p>
    <div className="flex w-80 items-center justify-center gap-10 mt-16">
      <AnimatePresence>
        {Socials && 
         Socials.map((item, index) =>(
          <HomeSocialLinks key={index} data={item} index={index} />
         ))

        }
      </AnimatePresence>
    </div>

   
      <div className="w-full flex flex-col items-center justify-center mt-4 gap-2">
        <a target="_blank" href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZvvrqbcvNQjJTSTPQFLrTCZnQGSzjvtJGHnFpGkqMqWScTMTZJDCFBjjkcLnhQxFrWmb' className="text-white cursor-pointer text-center"> rohitmodi220@gmail.com</a>
        <p className="text-white cursor-pointer text-center"> 8918004993</p>
      </div>
      

      <div className='mt-9 md:mt-0 relative md:-bottom-28 text-center text-primary '>Made with ❤️ and code by <span className=' text-white font-bold'>Rohit Modi</span> No magic beans involved!</div>
    
  </div>
  )
}

export default Footer