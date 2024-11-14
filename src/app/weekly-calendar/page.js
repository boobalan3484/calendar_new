import Header from '@/component/Header';
import WeeklyCalendar from '@/component/WeeklyCalendar';
// import Main from '@/layout/Main';
import React from 'react'
import '@/style/CalendarSection.css'

export const metadata = {
  title: "Makkal Calendar | Tamil Weekly Calendar",
  // description: "Creote | Business Landing Page",
};

const page = () => {
  return (
    <div>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-2`}>
        <div className='container-xl'>
          <WeeklyCalendar />
        </div>
      </main>
    </div>
  )
}

export default page