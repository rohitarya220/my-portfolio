import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const SkillCard = ({skill, percentage, color, move}) => {
  return(
      <div 
       className={ ` border border-[rgba(255,255,255,0.3)] rounded-md px-6  py-3 cursor-pointer group w-72 flex items-center justify-between`}
       style={{ 
        boxShadow: " inset 0 0 10px rgba(255,255,255,0.3)",
        marginLeft: move? -50 : 20 ,
       }}
      >
        {/* name section */}
        <div className="flex-1 flex-col items-start justify-start flex gap-2">
          <p className="text-base ">{skill} </p>
          <div className=" w-40  h-1 rounded-md overflow-hidden bg-[rgba(255,255,255,0.2)] relative">
            <motion.div 
              initial= {{ width: 0}}
              animate= {{ width: percentage}}
              transition= {{ duration: 1.5}}
              className="h-full absolute top-0 left-0"
              style={{background: color}}
            >

            </motion.div>
          </div>
        </div>


        {/* percentage */}

        <div 
         className="w-16  h-12 rounded-md relative overflow-hidden flex items-center justify-center"
         style={{border: `1px solid ${color}`}}
        >
          <motion.div 
             initial= {{ height: 0}}
             animate= {{ height: percentage}}
             transition= {{ duration: 1.5}}
             style={{background: color}}
             className="w-full absolute bottom-0 left-0 flex items-center justify-center"
          >
           
          </motion.div>
        </div>
      </div>
  )
};

export default SkillCard;
