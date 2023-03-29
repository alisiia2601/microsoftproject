"use client"
import React, { useRef, useEffect, useState, useMemo } from 'react'
import Image from "next/image"
import dynamic from "next/dynamic"
import Link from "next/link"
import { RiArrowRightLine } from 'react-icons/ri'
// components 
import SwipeButtons from "./SwipeButtons"
// styles
import styles from './Swiper.module.css'
import styled from './Confetti.module.css'

const COLORS = ['#2ecc71', '#3498db', '#e67e22', '#e67e22', '#e74c3c'];

if (typeof window !== "undefined") {
    const TOP_OFFSET = window.innerHeight;
  }

const LEFT_OFFSET = 150;

const randomNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

const randomColor = () => COLORS[randomNumber(0,COLORS.length)];

const Particle = ({children, size}) => {
  const ref = useRef();
  const child = React.Children.only(children);
    const top = randomNumber(-200, -size[1]);

    
  
  useEffect(() => {
    ref.current.style.setProperty('--x', `${randomNumber(-LEFT_OFFSET, LEFT_OFFSET)}px`);
    ref.current.style.setProperty('--y', `${window.innerHeight - top + randomNumber(0, 300)}px`);
    ref.current.style.setProperty('--rotate', `${randomNumber(200, 3000)}deg`);
  }, []);
  
  return React.cloneElement(child, {ref, style: {
    '--color': randomColor(),
    '--size': `${randomNumber(...size)}px`,
    '--rotate': '0deg',
    '--x': '0px',
    '--y': '0px',
    top: top,
    left: randomNumber(0, window.innerWidth),
  }});
};

const CircularParticle = () => (
  <Particle size={[5, 10]}>
    <div className={`${styled.particle} ${styled.circular}`}/>
  </Particle>
);

const RectangularParticle = () => (
  <Particle size={[5, 10]}>
    <div className={`${styles.particle} ${styled.rectangular}`}/>
  </Particle>
);

const SquiggleParticle = () => (
  <Particle size={[15, 45]}>
    <svg className={`${styled.particle} ${styled.squiggle}`}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 30 200">
      <path d="M15 0 Q 30 25 15 50 Q 0 75 15 100 Q 30 125 15 150 Q 0 175 15 200"/>
    </svg>
  </Particle>
);

const Particles = (({count: num}) => {
  
  const particles = [];
  const types = [SquiggleParticle, RectangularParticle, CircularParticle];

  while(num--) {
    const Particle = types[randomNumber(0, 3)];
    particles.push(
      <Particle key={num}/>
    );
  }
  
  return (
    <div className={styled.particles}>
      {particles}
    </div>
  );
});

let id = 1;




const Swiper = ({ data }) => {
  const [jobData, setJobData] = useState(data)
  const [particles, setParticles] = useState([]);


console.log('Jobdata update: ' + jobData.map(job => console.log(job)))

  const removeJob = (id) => {
      const newJobs = jobData.filter(job => job.id !== id);
      setJobData(newJobs);
  }

  const handleOnSwipe = () => {
    const _id = id;
    id++;
    
    setParticles(particles => [...particles, _id]);
    setTimeout(() => {
      // Cleanup
      setParticles(particles => particles.filter(id => id !== _id));
    }, 5000);
  }

    const TinderCard = dynamic(() => import('react-tinder-card'), {
        ssr: false
    });
    
    const saveJob = ( employer, role, desc, quali, img, id) => {
                    
        let myjobs = JSON.parse(localStorage.getItem('myjobs') || "[]")
        console.log(myjobs)
        let newJob;
    
          if (id) {
            newJob = {
                employer, role, desc, quali, img, id
            }
          } else {
            return
          }
    
        myjobs.push(newJob)                
        window.localStorage.setItem('myjobs', JSON.stringify(myjobs))
    }


      const onCardLeftScreen = (myIdentifier) => {
        console.log('id: ' + myIdentifier + ' left the screen')
    }
    
    const swiped = (dir,  employer, role, desc, quali, img, id) => {
        console.log('id is : ' + id, ' direction is : ' + dir)
        if (dir == 'up') {
            console.log('direction is up')
          saveJob(employer, role, desc, quali, img, id)
          handleOnSwipe()
          removeJob(id)
      } 
      if(dir == 'down') {
          removeJob(id)
          console.log('swiped down')
      }
      if(dir == 'left') {
          removeJob(id)
          console.log('swiped left')
      }
      if(dir == 'right') {
          removeJob(id)
          console.log('swiped right')
      }
      
  }
  

    return (
        <>            
        <div className={styles.cardContainer}>
                {
                jobData.map(({  employer, role, desc, quali, img, id }) => (
                  <div key={id}>
                     {particles.map(id => (
        <Particles key={id} count={Math.floor(innerWidth / 10)}/>
      ))}   
                    <TinderCard                            
                    className={styles.swiper}
                    onSwipe={(dir) => swiped(dir,  employer, role, desc, quali, img, id)}
                    onCardLeftScreen={() => onCardLeftScreen(id)}            
                    >
                      <div className={styles.arrowIcon}>
                      <Link href={'/Swipe/' + id}>
                        <RiArrowRightLine />
                      </Link>
              </div> 
                    <div className={styles.swiperImage} >
                        <Image
                            className={styles.img}
                            src={img}
                            alt={role}
                            priority
                            fill
                            />
                      </div>
                      <div className={styles.overlay}></div>
                        <div className={styles.info}>
                                <h2 className={styles.employer}>{employer}</h2>
                                <h4 className={styles.role}>{role}</h4>
                            
                        </div>            
                    </TinderCard>
                </div>                        
                ))
          } 
              <SwipeButtons />
        </div>
        </>
    )
}

export default Swiper
