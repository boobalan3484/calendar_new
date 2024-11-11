'use client'
import React, { Fragment, useState } from 'react'
import '@/style/CalendarSection.css'

import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary

const CalendarSection = () => {

    const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month

    const handleMonthChange = (index) => {
        setCurrentMonthIndex(index);
    };

    const calendar = calendarData.cal[currentMonthIndex]; // Get the current month's data
    const daysInMonth = calendar.days;

    // Determine the starting day of the month (e.g., "Fri" is the 5th index in a week starting from Sunday)
    const weekDays = calendarData.calendarDays;
    const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);

    // Fill the first week with empty slots up to the starting day
    const weeks = [];
    let week = new Array(startDayIndex).fill(null); // Fill with `null` up to `startDayIndex`

    // Create an array of weeks (each week being an array of days)
    daysInMonth.forEach((day, index) => {
        week.push(day);
        if (week.length === 7 || index === daysInMonth.length - 1) {
            weeks.push(week);
            week = [];
        }
    });

    return (
        <div className='calendar-section my-4'>
            <div className="calendar-wrapper">


                <select onChange={(e) => handleMonthChange(e.target.value)} value={currentMonthIndex}>
                    {calendarData.cal.map((month, index) => (
                        <option key={index} value={index}>{month.month_name}</option>
                    ))}
                </select>

                <div>
                    <div className="row calendar-header py-4">
                        <div className="col left">
                            <div>
                                <img src="/icon/droparrow_left.png" alt="left arrow" />
                            </div>
                        </div>
                        <div className="col middle">

                            <div className="title-month">
                                {/* நவம்பர் - 2024 */}
                                ({calendar.month_name})
                            </div>
                            <div className="title-desc">
                                {/* <span>குரோதி</span><span>ஐப்பசி-கார்த்திகை</span> */}
                                {calendar.month_name_tamil}
                            </div>
                        </div>
                        <div className="col right">
                            <div>
                                <img src="/icon/droparrow_right.png" alt="right arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="month-list">
                        <div className="month-popup">
                            <div className="months">
                                <a href="" data-id="1" className="month_common month_1 ">ஜனவரி</a>
                            </div>
                            <div className="months">
                                <a href="" data-id="2" className="month_common month_1 ">ஜனவரி</a>
                            </div>
                            <div className="months">
                                <a href="" data-id="3" className="month_common month_1 ">ஜனவரி</a>
                            </div>
                            <div className="months">
                                <a href="" data-id="4" className="month_common month_1 ">ஜனவரி</a>
                            </div>
                            <div className="months">
                                <a href="" data-id="5" className="month_common month_1 ">ஜனவரி</a>
                            </div>
                            <div className="months">
                                <a href="" data-id="6" className="month_common month_1 active">ஜனவரி</a>
                            </div>
                        </div>

                    </div>

                    <div className="calendar-container">
                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px', marginTop: '20px' }} className='calendar'>
                            {weekDays.map((dayName, index) => (
                                <div key={index} style={{ fontWeight: 'bold', textAlign: 'center' }} className='"week-day'>{dayName}</div>
                            ))}
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} style={{ display: 'contents' }}>
                                    {week.map((day, dayIndex) => (
                                        <div className="day" valign="bottom"
                                            key={dayIndex}
                                        >
                                            {day ? (
                                                <>
                                                    <span className="tamil_month top-position">{day.tamilmonth}</span>
                                                    <div className="date-grid">
                                                        <span className="tamil_date">{day.tamil_date}</span>
                                                        <span className="special-event-img">
                                                            <img src="/images/1.png" alt="" />
                                                        </span>
                                                        <span className="english_date">{day.date}</span>
                                                    </div>

                                                </>
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {/* </tbody> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CalendarSection