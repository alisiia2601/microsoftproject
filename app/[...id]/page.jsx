'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { Jobs } from '@/data/jobsArray';
import JobDetails from '@/app/components/jobDetails/JobDetails';
import Header from '/app/components/header/Header.jsx'
/* import Footer from '../components/footer/Footer'; */

export default function DetailsPage() {

  let id = usePathname();
 
  // kan göras på andra sätt, men ville testa detta
  id = id.replace('/', '')
  
  console.log(id)

  return (
    <>
          <Header />
      {Jobs.map((job) => {
        if (id == job.id) {
          /* const { id, title, subtitle, desc, img } = job; */
          return (
            <div key={job.id}>
              <JobDetails
                {...job}
              />
            </div>
          );
        }
      })}
       {/* <Footer /> */}
    </>
  );
}
