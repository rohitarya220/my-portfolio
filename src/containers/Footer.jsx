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

    {/* <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-12 p-4">
      <p className="text-texlight text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, error rerum officiis illo laboriosam similique officia, quia placeat, dolorem accusamus. Veniam sapiente cumque excepturi voluptatum assumenda dolorum sequi corrupti.</p>
      <p className="text-texlight text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in nam ipsa, voluptate facere quisquam, cum, quidem labore dolorem modi molestiae tempore dicta veritatis rem cumque accusamus expedita perferendis quasi!</p>
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <p className="text-texlight text-center"> rohitarya7478@gmail.com</p>
        <p className="text-texlight text-center"> 8918004993</p>
        <a href="#">
          <p className=" text-primary text-center"> Hire me</p>
        </a>

      </div>
    </div> */}
  </div>
  )
}

export default Footer