'use client'
import React, { Fragment, useState } from 'react'
import '@/style/CalendarSection.css'

import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary

const WeeklyCalendar = () => {

    const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Default to the first week

    // Helper function to create weeks from days in the month
    const createWeeks = (daysInMonth) => {
        const weekDays = calendarData.calendarDays;
        const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);
        const weeks = [];
        let week = new Array(startDayIndex).fill(null); // Fill with `null` for initial empty slots

        daysInMonth.forEach((day, index) => {
            week.push(day);
            if (week.length === 7 || index === daysInMonth.length - 1) {
                weeks.push(week);
                week = [];
            }
        });
        return weeks;
    };

    // Get the current month's data and create weeks from it
    const calendar = calendarData.cal[currentMonthIndex];
    const weeks = createWeeks(calendar.days);

    // Function to handle moving to the previous week
    const handlePrevWeek = () => {
        if (currentWeekIndex > 0) {
            setCurrentWeekIndex(currentWeekIndex - 1);
        } else if (currentMonthIndex > 0) {
            // Move to the last week of the previous month
            setCurrentMonthIndex(currentMonthIndex - 1);
            setCurrentWeekIndex(createWeeks(calendarData.cal[currentMonthIndex - 1].days).length - 1);
        }
    };

    // Function to handle moving to the next week
    const handleNextWeek = () => {
        if (currentWeekIndex < weeks.length - 1) {
            setCurrentWeekIndex(currentWeekIndex + 1);
        } else if (currentMonthIndex < calendarData.cal.length - 1) {
            // Move to the first week of the next month
            setCurrentMonthIndex(currentMonthIndex + 1);
            setCurrentWeekIndex(0);
        }
    };

    // Determine if buttons should be disabled
    const isPrevDisabled = currentMonthIndex === 0 && currentWeekIndex === 0;
    const isNextDisabled = currentMonthIndex === calendarData.cal.length - 1 &&
        currentWeekIndex === weeks.length - 1;

    const specialDayImages = {
        "அமாவாசை": "/images/1.png",
        "பௌர்ணமி": "/images/2.png",
        "ஏகாதசி": "/images/3.png",
        "சஷ்டி": "/images/4.png",
        "பிரதோஷம்": "/images/5.png",
        "சதுர்த்தி": "/images/6.png",
    };

    return (
        <div className='calendar-section my-4'>
            <div className="calendar-wrapper">
                <div>
                    <div className="row align-items-center calendar-header pb-4">
                        <div className="col left">
                            <div onClick={handlePrevWeek} disabled={isPrevDisabled}>
                                <img src="/icon/droparrow_left.png" alt="left arrow" />
                            </div>
                        </div>
                        <div className="col middle">
                            <div className="title-month">
                                {calendar.month_name}
                            </div>
                            <div className="title-desc">
                                {calendar.month_name_tamil}
                            </div>
                            <h6 className="fw-semibold">
                                வாரம் {currentWeekIndex + 1}
                            </h6>
                        </div>
                        <div className="col right">
                            <div onClick={handleNextWeek} disabled={isNextDisabled}>
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
                            {calendarData.calendarDays.map((dayName, index) => (
                                <div key={index} style={{
                                    fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292',
                                    color: '#fff'
                                }} className='week-day'>
                                    {dayName}
                                </div>
                            ))}
                            {weeks[currentWeekIndex].map((day, dayIndex) => (
                                <div className="day" valign="bottom"
                                    key={dayIndex}
                                >
                                    {day ? (
                                        <>
                                            <span className="tamil_month top-position">{day.tamilmonth}</span>
                                            <div className="date-grid">
                                                <span className="tamil_date">{day.tamil_date}</span>
                                                {day.special_day && day.special_day.length > 0 && (
                                                    <>
                                                        {day.special_day.map((special, idx) => (
                                                            <span className="special-event-img" key={idx}>
                                                                {specialDayImages[special.name] ? (
                                                                    <img src={specialDayImages[special.name]} alt={special.name} />
                                                                )
                                                                    :
                                                                    (
                                                                        <>
                                                                        </>
                                                                        // <span>{special.name}</span>
                                                                    )
                                                                }
                                                            </span>
                                                        ))}
                                                    </>
                                                )}
                                                <span className="english_date">{day.date}</span>
                                            </div>
                                        </>
                                    ) : null}
                                </div>
                            ))}
                            {/* </div> */}
                            {/* ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeeklyCalendar