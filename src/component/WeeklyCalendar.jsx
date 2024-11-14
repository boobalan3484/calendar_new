'use client'
import React, { Fragment, useEffect, useState } from 'react'
import '@/style/CalendarSection.css'
// import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary
import { data } from '@/utils/Data';

import MonthList from './MonthList';

const WeeklyCalendar = () => {

    const { specialDayImages } = data

    const [calendarData, setCalendarData] = useState(null);

    const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Default to the first week

    // Get today's date details for initial selection
    useEffect(() => {
        if (calendarData) {
            const today = new Date();
            const currentMonth = today.getMonth() + 1;
            const initialMonthIndex = calendarData.cal.findIndex(
                month => parseInt(month.month) === currentMonth
            );

            if (initialMonthIndex !== -1) {
                setCurrentMonthIndex(initialMonthIndex);
                const weeks = createWeeks(calendarData.cal[initialMonthIndex].days);
                const initialWeekIndex = weeks.findIndex(week =>
                    week.some(day => day && day.date === today.getDate())
                );
                setCurrentWeekIndex(initialWeekIndex !== -1 ? initialWeekIndex : 0);
            }
        }
    }, [calendarData]);

    useEffect(() => {
        fetch('/data/month2025.json') // Adjust the path as necessary
            .then((response) => response.json())
            .then((data) => {
                setCalendarData(data); // Store the fetched data in state
                // Automatically select the current month when the component loads
                const today = new Date();
                const currentMonth = today.getMonth() + 1; // Months are zero-indexed, add 1
                const currentMonthIndex = data.cal.findIndex(
                    month => parseInt(month.month) === currentMonth
                );
                if (currentMonthIndex !== -1) {
                    setCurrentMonthIndex(currentMonthIndex);
                }
            })
            .catch((error) => {
                console.error('Error fetching the calendar data:', error);
            });
    }, []);

    if (!calendarData) {
        return <p>Loading...</p>; // Show loading indicator while data is being fetched
    }

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
    const currentMonthData = calendarData.cal[currentMonthIndex];
    const weeks = createWeeks(currentMonthData.days);

    // Function to handle moving to the previous week
    const handlePrevWeek = () => {
        if (currentWeekIndex > 0) {
            setCurrentWeekIndex(currentWeekIndex - 1);
        } else if (currentMonthIndex > 0) {
            // Move to the last week of the previous month
            const newMonthIndex = currentMonthIndex - 1;
            const newWeeks = createWeeks(calendarData.cal[newMonthIndex].days);
            setCurrentMonthIndex(newMonthIndex);
            setCurrentWeekIndex(newWeeks.length - 1);
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


    // const [calendarData, setCalendarData] = useState(null);
    // const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

    // useEffect(() => {
    //     fetch('/data/month2025.json') // Adjust the path as necessary
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCalendarData(data); // Store the fetched data in state
    //             // Automatically select the current month when the component loads
    //             const today = new Date();
    //             const currentMonth = today.getMonth() + 1; // Months are zero-indexed, add 1
    //             const currentMonthIndex = data.cal.findIndex(
    //                 month => parseInt(month.month) === currentMonth
    //             );
    //             if (currentMonthIndex !== -1) {
    //                 setCurrentMonthIndex(currentMonthIndex);
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching the calendar data:', error);
    //         });
    // }, []);

    // const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Default to the first week

    // // Helper function to create weeks from days in the month
    // const createWeeks = (daysInMonth) => {
    //     const weekDays = calendarData.calendarDays;
    //     const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);
    //     const weeks = [];
    //     let week = new Array(startDayIndex).fill(null); // Fill with `null` for initial empty slots

    //     daysInMonth.forEach((day, index) => {
    //         week.push(day);
    //         if (week.length === 7 || index === daysInMonth.length - 1) {
    //             weeks.push(week);
    //             week = [];
    //         }
    //     });
    //     return weeks;
    // };

    // // Get the current month's data and create weeks from it
    // const calendar = calendarData.cal[currentMonthIndex];
    // const weeks = createWeeks(calendar.days);

    // // Function to handle moving to the previous week
    // const handlePrevWeek = () => {
    //     if (currentWeekIndex > 0) {
    //         setCurrentWeekIndex(currentWeekIndex - 1);
    //     } else if (currentMonthIndex > 0) {
    //         // Move to the last week of the previous month
    //         setCurrentMonthIndex(currentMonthIndex - 1);
    //         setCurrentWeekIndex(createWeeks(calendarData.cal[currentMonthIndex - 1].days).length - 1);
    //     }
    // };

    // // Function to handle moving to the next week
    // const handleNextWeek = () => {
    //     if (currentWeekIndex < weeks.length - 1) {
    //         setCurrentWeekIndex(currentWeekIndex + 1);
    //     } else if (currentMonthIndex < calendarData.cal.length - 1) {
    //         // Move to the first week of the next month
    //         setCurrentMonthIndex(currentMonthIndex + 1);
    //         setCurrentWeekIndex(0);
    //     }
    // };

    // // Determine if buttons should be disabled
    // const isPrevDisabled = currentMonthIndex === 0 && currentWeekIndex === 0;
    // const isNextDisabled = currentMonthIndex === calendarData.cal.length - 1 &&
    //     currentWeekIndex === weeks.length - 1;


    // const handleMonthChange = (index) => {
    //     setCurrentMonthIndex(index);
    // };

    return (
        <div className='calendar-section my-4 p-3 py-xl-4 px-xl-4'>
            <div className="calendar-wrapper p-1 py-xl-4 px-xl-4">
                <div>
                    <div className="row align-items-center calendar-header pb-4">
                        <div className="col left">
                            <div onClick={handlePrevWeek} disabled={isPrevDisabled}>
                                <img src="/icon/droparrow_left.png" alt="left arrow" />
                            </div>
                        </div>
                        <div className="col middle">
                            <div className="title-month">
                                {currentMonthData.month_name}
                            </div>
                            <div className="title-desc">
                                {currentMonthData.month_name_tamil}
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
                    {/* <MonthList
                        handleMonthChange={handleMonthChange}
                    /> */}
                    <div className="calendar-container">
                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px', marginTop: '20px' }} className='calendar'>
                            {calendarData.calendarDays.map((dayName, index) => (
                                <div key={index} style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292', color: '#fff' }} className='week-day d-flex justify-content-center align-items-center'>
                                    {dayName}
                                </div>
                            ))}
                            {weeks[currentWeekIndex].map((day, dayIndex) => (
                                <div  valign="bottom"
                                    key={dayIndex}
                                    className={`day ${day && day.date === new Date().getDate() ? 'highlight-today' : ''}`}
                                >
                                    {day ? (
                                        <>
                                            <span className="tamil_month position-arelative">{day.tamilmonth}</span>
                                            {day.special_day && day.special_day.length > 0 && (
                                                <>
                                                    {day.special_day.map((special, idx) => (
                                                        <span className="special-event-img position-absolute end-0 top-0" key={idx}>
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

                                            <div className="date-grid">
                                                <span className="tamil_date">{day.tamil_date}</span>
                                                {/* {day.special_day && day.special_day.length > 0 && (
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
                                                )} */}
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