import React from 'react';
import '@/style/CalendarSection.css'
import DayCalendar from "@/component/DayCalendar";
import Header from "@/component/Header";

export const metadata = {
  title: "Makkal Calendar | Tamil Daily Calendar",
  // description: "Creote | Business Landing Page",
};

export default function Home() {
  return (
    <div>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-4 `}>
        <div className='container-xl'>
          <DayCalendar />
        </div>
      </main>
    </div>
  );
};
