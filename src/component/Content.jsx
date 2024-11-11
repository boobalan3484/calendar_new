import React from 'react'
import CalendarSection from './CalendarSection'
import '@/style/CalendarSection.css'
import WeeklyCalendar from './WeeklyCalendar'

const Content = () => {
    return (
        <main className=' my-4'>
            <div className='container'>
                <CalendarSection />
                {/* <WeeklyCalendar /> */}
            </div>
        </main>
    )
}

export default Content