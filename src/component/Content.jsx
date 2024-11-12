'use client'
import React from 'react'
import CalendarSection from './CalendarSection'
import '@/style/CalendarSection.css'
import WeeklyCalendar from './WeeklyCalendar'
import Reusable from './Reusable'
import DayCalendar from './DayCalendar'

const Content = () => {
    return (
        <main className=' mt-2 my-2'>
            <div className='container-xl'>
                {Reusable({ one: <DayCalendar />, two: <WeeklyCalendar />, three: <CalendarSection /> })}
            </div>
        </main>
    )
}

export default Content