import React from 'react';
import '@/style/CalendarSection.css'
import DayCalendar from "@/component/DayCalendar";
import Header from "@/component/Header";
import Footer from '@/component/Footer';

export const metadata = {
  title: "Makkal Calendar | Tamil Daily Calendar",
  // description: "Creote | Business Landing Page",
};

export default function Home() {
  return (
    <div>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-3 `}>
        <div className='container-xl'>
          <DayCalendar />
        </div>
      </main>
      <Footer />
    </div>
  );
};
