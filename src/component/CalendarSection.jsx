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

    const specialDayImages = {
        "அமாவாசை": "/images/1.png",
        "பௌர்ணமி": "/images/2.png",
        "ஏகாதசி": "/images/3.png",
        "சஷ்டி": "/images/4.png",
        "பிரதோஷம்": "/images/5.png",
        "சதுர்த்தி": "/images/6.png",
    };

    const monthData = {
        1: "ஜனவரி",
        2: "பிப்ரவரி",
        3: "மார்ச்",
        4: "ஏப்ரல்",
        5: "மே",
        6: "ஜூன்",
        7: "ஜூலை",
        8: "ஆகஸ்ட்",
        9: "செப்டம்பர்",
        10: "அக்டோபர்",
        11: "நவம்பர்",
        12: "டிசம்பர்",
    };

    const handlePrevMonth = () => {
        if (currentMonthIndex > 0) {
            setCurrentMonthIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonthIndex < calendarData.cal.length - 1) {
            setCurrentMonthIndex((prevIndex) => prevIndex + 1);
        }
    };


    // Handle click on month
    // const handleMonthClick = (month) => {
    //     setCurrentMonthIndex((month) => month + 1);
    // };


    return (
        <div className='calendar-section my-4'>
            <div className="calendar-wrapper">
                <div>
                    <div className="row align-items-center calendar-header pb-4">
                        <div className="col left">
                            <div onClick={handlePrevMonth}>
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
                        </div>
                        <div className="col right">
                            <div onClick={handleNextMonth}>
                                <img src="/icon/droparrow_right.png" alt="right arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="month-list">
                        <div className="month-popup" >
                            {Object.keys(monthData).map(month => (
                                <div className="months" key={month}>
                                    <a
                                        data-id={month}
                                        className="month_common month_1"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default anchor behavior
                                            handleMonthClick(month); // Update selected month on click
                                        }}>
                                        {monthData[month]}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="calendar-container">
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px', marginTop: '20px' }} className='calendar'>
                        {weekDays.map((dayName, index) => (
                            <div key={index} style={{
                                fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292',
                                color: '#fff'
                            }} className='week-day'>
                                {dayName}
                            </div>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CalendarSection