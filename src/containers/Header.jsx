import React from "react";
import {Menus} from '../utils/helper'
import {MenuItem} from '../components'

const Header = () => {
  return(
    <div className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end lg:items-center pb-8 lg:pb-0 z-50">
      <div className="px-2 py-2 lg:py-8 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-row lg:flex-col items-center justify-center gap-4 md:gap-7 duration-200 backdrop-blur-md">
        {Menus && 
          Menus.map((item, index, ) => (
            <MenuItem key={index} menu={item} index={index} />
          ))
        }
      </div>

    </div>
  )
};

export default Header;
