import React from 'react'
import { VscRefresh } from 'react-icons/vsc'
import { BsBookmark } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { Jobs } from '@/data/jobsArray'
import styles from './SwipeButtons.module.css'

const SwipeButtons = ({ setJobData }) => {


    const Refresh = () => {
      console.log('to refresh jobs / cards');
      setJobData(Jobs)
      };
    
      const doSomething = () => {
        console.log('function to remove job from array goes here');
      };
    
      function handleSave() {
        console.log('Function for saving job would go here, save on to db or localstorage, cookie etc');
       
    }
    
  return (
    <div className={styles.iconsWrapper}>
    <div className={styles.iconWrapper}>
      <VscRefresh onClick={() => Refresh()} />
    </div>
    <div className={styles.iconWrapper}>
      <BsBookmark onClick={() => handleSave()} />
    </div>
    <div className={styles.iconWrapper}>
      <VscClose onClick={() => doSomething()} />
    </div>
  </div>
  )
}

export default SwipeButtons