import CalendarSection from '@/component/CalendarSection';
import Header from '@/component/Header';
// import Main from '@/layout/Main';
import React from 'react'

export const metadata = {
  title: "Makkal Calendar | Tamil Monthly Calendar",
  // description: "Creote | Business Landing Page",
};

const page = () => {
  return (
    <div>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-2`}>
        <div className='container-xl'>
          <CalendarSection />
        </div>
      </main>
    </div>
  )
}

export default page