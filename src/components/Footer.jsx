import React from 'react'
import styles from '../style'

import { socialMedia } from '../constants'

const Footer = () => (
    <section className= {`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <p className= {`${styles.paragraph}  sm:flex hidden font-poppins font-semibold xs:text-[20px] text-[20px] text-white `} >Contact Me On:</p>
      <div className= {`${styles.flexStart} md:flex-row  mb-10 w-full`}>
        
      <div className=" sm:flex hidden flex-row  mt-6 pb-5 ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[30px] h-[40px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      <p className= {`${styles.paragraph} sm:hidden mt-6  `}>Contact Me On:</p>
      <div className= {`${styles.flexStart} `}>
 
      <div className=" sm:hidden flex flex-row  pl-1 pt-7 ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-3" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      </div>
      </div>
      <div>
        <p className= {` font-poppins font-normal text-dimWhite text-[18px] `}>
          2022 &copy; Geen Donald Joel. All Rights Reserved.
        </p>
      </div>
    </section>


    
  )
export default Footer