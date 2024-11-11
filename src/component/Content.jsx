'use client'
import React from 'react'
import CalendarSection from './CalendarSection'
import '@/style/CalendarSection.css'
import WeeklyCalendar from './WeeklyCalendar'
import Reusable from './Reusable'

const Content = () => {
    return (
        <main className=' my-4'>
            <div className='container'>
                {Reusable({ two: <WeeklyCalendar />, three: <CalendarSection /> })}
            </div>
        </main>
    )
}

export default Content