import React from 'react'
import styles , {layout} from '../style';
import { Java , github, project , play} from "../assets";
import { Android } from "../assets";
import { react } from "../assets";
const feedback = () => (
  <section className = {layout.section}>
  <div className = {layout.sectionInfo}>
    <h2 className = "font-poppins font-semibold xs:text-[40px] text-[30px] text-white">
      Other Interests
    </h2>

  </div>
  <div className = {`${styles.flexStart} ${styles.paddingY}`}>
  <div className = {`${layout.sectionImg} sm:flex hidden  flex-row content-contain justify-between items-center w-full`}>
    <p className = {`${styles.paragraph} pl-5`}>Interested to do Open Source Contributions </p>
    <img src= {github} alt="card" className='w-[10%] pr-4'/>
    <p className = {`${styles.paragraph} pl-5 `}>Interested to collaborate in Projects </p>
    <img src={project} alt="Android" className = "w-[10%] pr-4" />
    <p className = {`${styles.paragraph} pl-6`}>Love to play cricket</p>
    <img src= { play } alt="React" className = "w-[10%]" />
  </div>

  <div className = {`${layout.sectionImg} sm:hidden flex  flex-col content-contain`}>
    <p className = {`${styles.paragraph} pr-14 pb-10`}>Interested to do Open<br /> Source Contributions</p>
    <img src= {github} alt="card" className = "w-[20%] pb-10 "/>
    <p className = {`${styles.paragraph} pb-5`}>Interested to collaborate in <br /> Projects</p>
    <img src={project} alt="Android" className = "w-[20%] pb-10 " />
    <p className = {`${styles.paragraph} pb-5`}>Love to play cricket and Enjoy</p>
    <img src= { play } alt="React" className = "w-[20%] pb-10" />
  </div>
  </div>
  
</section>
  )

export default feedback