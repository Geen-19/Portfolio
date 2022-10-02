import React from 'react'
import styles from '../style'
const Content = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 pb-12 pt-12` }>
        <div className=' sm:flex hidden flex-row justify-between items-center w-full'>
          <h1 className= "flex-1  font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] mr-5">Geen {" "} 
          <span className='text-gradient'> Donald </span> {" "}
          Joel
          </h1>
          <p className= {`${styles.paragraph}   font-poppins text-[25px]  mt-5 pl-10 mr-5   `}>I am a 
          Sophomore in Electronics and Computer Engineering at <span className='text-gradient'> VIT Chennai</span></p>
          <p className= {`${styles.paragraph} font-poppins text-[25px]   mt-5  `}>
            Aspiring Android Developer, Front End Developer, <span className='text-gradient'>Cloud Architect</span></p>

            {/* <div className='absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient'/>*/}
            {/* // <div className='absolute z-[1] w-[40%] h-[40%] rounded-full bottom-40 white__gradient ' />  */}
            <div className='absolute z-[0] w-[30%] h-[70%] right-10 bottom-60 blue__gradient' />
        </div>
        <div className='sm:hidden flex flex-col'>
        <h1 className= "flex-1  font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ml-5">Geen {" "} 
          <span className='text-gradient'> Donald </span> {" "}
          Joel
          </h1>
          <p className= {`${styles.paragraph}   font-poppins text-[20px]  mt-5 ml-5  `}>I am a 
          Sophomore in Electronics and Computer Engineering at <span className='text-gradient'> VIT Chennai</span></p>
          <p className= {`${styles.paragraph} font-poppins text-[20px]   mt-5 ml-5 `}>
            Aspiring Android Developer, Front End Developer, <span className='text-gradient'>Cloud Architect</span></p>
            <div className='absolute z-[0] w-[30%] h-[70%] right-10 bottom-60 blue__gradient' />
        </div>
        <div>
        </div>
      </div>
    </section>
  )


export default Content