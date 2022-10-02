import React from 'react'
import styles, {layout} from '../style';
import { Java  } from "../assets";
import { Android } from "../assets";
import { react } from "../assets";

const cards = () => (
  <section className = {layout.section}>
    <div className = {layout.sectionInfo}>
      <h2 className = "font-poppins font-semibold xs:text-[40px] text-[30px] text-white">
        My Skills
      </h2>

    </div>
    <div className = {`${styles.flexStart} ${styles.paddingY} `}>
    <div className = {`${layout.sectionImg} sm:flex hidden  flex-row content-contain justify-between items-center w-full`}>
      <p className = {`${styles.paragraph} pr-2`}>Data Structures in Java, Level - Intermediate</p>
      <img src= {Java} alt="card" className = "w-[10%] "/>
      <p className = {`${styles.paragraph}  `}>Experience in buiding Android Applications in Android Studio</p>
      <img src={Android} alt="Android" className = "w-[10%] " />
      <p className = {`${styles.paragraph} pl-6`}>This Portfolio is built on React and Tailwind CSS</p>
      <img src= { react } alt="React" className = "w-[10%]" />
    </div>

    <div className = {`${layout.sectionImg} sm:hidden flex  flex-col content-contain`}>
      <p className = {`${styles.paragraph} pr-14 pb-10`}>Data Structures in Java <br /> Level - <span className = "text-gradient">Intermediate</span> </p>
      <img src= {Java} alt="card" className = "w-[20%] pb-10 "/>
      <p className = {`${styles.paragraph} pb-5`}>Experience in buiding Android <br /> Applications in Android Studio <br />Level - <span className = "text-gradient">Intermediate</span></p>
      <img src={Android} alt="Android" className = "w-[20%] pb-10 " />
      <p className = {`${styles.paragraph} pb-5`}>This Portfolio is built on React and <br /> Tailwind CSS <br /> Level - <span className = "text-gradient">Beginner</span></p>
      <img src= { react } alt="React" className = "w-[20%] pb-10" />
    </div>
    </div>
    
  </section>
)
   

  


export default cards