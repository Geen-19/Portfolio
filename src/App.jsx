import React from 'react'
import styles from './style';
import {Navbar, Footer, Skills,Card, Content, Header, Feedback} from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className = {`${styles.boxWidth}`} >
          <Navbar/>
        </div>
      </div>

      <div className= {`bg-primary ${styles.flexStart}`}>
        <div className= { `${styles.boxWidth}`}>
        <Content/>
        </div>
      </div>

      <div className= {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className= { `${styles.boxWidth}`}>
          <Card/>
        </div>
      </div>

      <div className= {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className= { `${styles.boxWidth}`}>
          <Feedback/> 
        </div>
      </div>

      <div className= {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className= { `${styles.boxWidth}`}>
         <Footer/>
        </div>
      </div>
    </div>
  );

export default App