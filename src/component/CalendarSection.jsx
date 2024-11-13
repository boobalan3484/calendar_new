// 'use client'
// import React, { Fragment, useEffect, useState } from 'react'
// import '@/style/CalendarSection.css'

// import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary
// import MonthList from './MonthList';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

// const CalendarSection = () => {

//     const [calendarData, setCalendarData] = useState(null);
//     const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

//     useEffect(() => {
//         // Fetch data from the JSON file
//         fetch('/data/month2025.json') // Adjust the path as necessary
//             .then((response) => response.json())
//             .then((data) => {
//                 setCalendarData(data); // Store the fetched data in state

//                 // Get today's date
//                 const today = new Date();
//                 const currentMonth = today.getMonth() + 1; // Months are 0-indexed, so add 1
//                 const currentMonthIndex = data.cal.findIndex(
//                     month => parseInt(month.month) === currentMonth
//                 );

//                 if (currentMonthIndex !== -1) {
//                     setCurrentMonthIndex(currentMonthIndex); // Set the current month as active
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching the calendar data:', error);
//             });
//     }, []);

//     if (!calendarData) {
//         return <p>Loading...</p>; // Show loading indicator while data is being fetched
//     }

//     const calendar = calendarData.cal[currentMonthIndex];
//     const daysInMonth = calendar.days;

//     const weekDays = calendarData.calendarDays;
//     const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);


//     const today = new Date();
//     const currentDate = today.getDate();
//     const currentMonth = today.getMonth() + 1;

//     const weeks = [];
//     let week = new Array(startDayIndex).fill(null);

//     daysInMonth.forEach((day, index) => {
//         week.push(day);
//         if (week.length === 7 || index === daysInMonth.length - 1) {
//             weeks.push(week);
//             week = [];
//         }
//     });

//     const specialDayImages = {
//         "அமாவாசை": "/images/1.png",
//         "பௌர்ணமி": "/images/2.png",
//         "ஏகாதசி": "/images/3.png",
//         "சஷ்டி": "/images/4.png",
//         "பிரதோஷம்": "/images/5.png",
//         "சதுர்த்தி": "/images/6.png",
//     };

//     const handlePrevMonth = () => {
//         if (currentMonthIndex > 0) {
//             setCurrentMonthIndex((prevIndex) => prevIndex - 1);
//         }
//     };

//     const handleNextMonth = () => {
//         if (currentMonthIndex < calendarData.cal.length - 1) {
//             setCurrentMonthIndex((prevIndex) => prevIndex + 1);
//         }
//     };

//     const handleMonthChange = (index) => {
//         setCurrentMonthIndex(index);
//     };

//     return (
//         <div className='calendar-section p-3 py-xl-2 px-xl-5'>
//             <div className=" p-1 py-xl-2 px-xl-5">
//                 <div>
//                     <div className="row align-items-center justify-content-center calendar-header pb-2 position-relative">
//                         {/* <div className="col left px-0">
//                             <div onClick={handlePrevMonth}>
//                                 <img src="/icon/droparrow_left.png" alt="left arrow" />
//                             </div>
//                         </div> */}
//                         <div className="col text-center middle">

//                             <div className="title-month p-0 m-0">
//                                 {calendar.month_name}
//                             </div>
//                             <div className="title-desc">
//                                 {calendar.month_name_tamil}
//                             </div>
//                         </div>
//                         {/* <div className="col right px-0">
//                             <div onClick={handleNextMonth}>
//                                 <img src="/icon/droparrow_right.png" alt="right arrow" />
//                             </div>
//                         </div> */}
//                         {/* Arrows */}
//                         <div className="day_calendar arrows w-100">
//                             <div className="left-arrow">
//                                 <a onClick={handlePrevMonth}>
//                                     <span className=' bg-secondary rounded-circle text-white '>
//                                         <FaAngleLeft />
//                                     </span>
//                                 </a>
//                             </div>
//                             <div className="right-arrow">
//                                 <a onClick={handleNextMonth}>
//                                     <span className='p-2 bg-secondary rounded-circle text-white'>
//                                         <FaAngleRight />
//                                     </span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <MonthList
//                         handleMonthChange={handleMonthChange}
//                     /> */}
//                 </div>

//                 <div className="calendar-container mt-2">
//                     <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px' }} className='calendar'>
//                         {weekDays.map((dayName, index) => (
//                             <div key={index} style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292', color: '#fff' }}
//                                 className='week-day d-flex justify-content-center align-items-center'
//                             >
//                                 {dayName}
//                             </div>
//                         ))}
//                         {weeks.map((week, weekIndex) => (
//                             <div key={weekIndex} style={{ display: 'contents' }}
//                             //  className={`week ${week.some(day => day?.date == currentDate) ? 'current-week' : ''}`}
//                             >
//                                 {week.map((day, dayIndex) => (
//                                     <div
//                                         // className="day" 
//                                         valign="bottom"
//                                         key={dayIndex}
//                                         className={`day day-cell ${weekDays[dayIndex] === 'ஞாயிறு' ? 'text-danger' : ''}`}

//                                     // className={`day day-cell ${day && parseInt(day.date) === currentDate && currentMonthIndex === currentMonth - 1 ? 'highlight-today' : ''}`}
//                                     >
//                                         {day ? (
//                                             <>
//                                                 <span className="tamil_month position-relative">{day.tamilmonth}</span>
//                                                 {day.special_day && day.special_day.length > 0 && (
//                                                     <>
//                                                         {day.special_day.map((special, idx) => (
//                                                             <span className="d-block d-lg-none special-event-img position-absolute end-0 top-0" key={idx}>
//                                                                 {specialDayImages[special.name] ? (
//                                                                     <img src={specialDayImages[special.name]} alt={special.name} />
//                                                                 )
//                                                                     :
//                                                                     (
//                                                                         <>
//                                                                         </>
//                                                                     )
//                                                                 }
//                                                             </span>
//                                                         ))}
//                                                     </>
//                                                 )}
//                                                 <div className="date-grid">
//                                                     <span className="tamil_date">{day.tamil_date}</span>
//                                                     {day.special_day && day.special_day.length > 0 && (
//                                                         <>
//                                                             {day.special_day.map((special, idx) => (
//                                                                 <span className="special-event-img d-none d-lg-block position-absolute end-50 top-50" key={idx}>
//                                                                     {specialDayImages[special.name] ? (
//                                                                         <img src={specialDayImages[special.name]} alt={special.name} />
//                                                                     )
//                                                                         :
//                                                                         (
//                                                                             <>
//                                                                             </>
//                                                                             // <span>{special.name}</span>
//                                                                         )
//                                                                     }
//                                                                 </span>
//                                                             ))}
//                                                         </>
//                                                     )}
//                                                     <span className="english_date">{day.date}</span>
//                                                 </div>

//                                             </>
//                                         ) : null}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default CalendarSection

// =============================================================

'use client'
import React, { useEffect, useState } from 'react';
import '@/style/CalendarSection.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const CalendarSection = () => {
    const [calendarData, setCalendarData] = useState(null);
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

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

    const calendar = calendarData.cal[currentMonthIndex];
    const daysInMonth = calendar.days;

    const weekDays = calendarData.calendarDays;
    // Determine the starting day index
    const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);

    // Get today's date details for highlighting
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1;

    // Organize the days into weeks
    const weeks = [];
    let week = new Array(startDayIndex).fill(null);

    daysInMonth.forEach((day, index) => {
        week.push(day);
        if (week.length === 7 || index === daysInMonth.length - 1) {
            weeks.push(week);
            week = [];
        }
    });

    const specialDayImages = {
        "அமாவாசை": "/images/special_days/1.png",
        "பௌர்ணமி": "/images/special_days/2.png",
        "ஏகாதசி": "/images/special_days/3.png",
        "சஷ்டி": "/images/special_days/4.png",
        "பிரதோஷம்": "/images/special_days/5.png",
        "சதுர்த்தி": "/images/special_days/6.png",
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

    return (
        <div className='calendar-section pt-2 pb-xl-3 px-xl-3 mx-5'>
            <div className=" p-3 pb-xl-3 px-xl-3">

                <div>
                    <div className="row align-items-center justify-content-center calendar-header pb-2 position-relative">

                        <div className="col text-center middle">

                            <div className="title-month p-0 m-0">
                                {calendar.month_name}
                            </div>
                            <div className="title-desc">
                                {calendar.month_name_tamil}
                            </div>
                        </div>

                        {/* Arrows */}
                        <div className="day_calendar arrows w-100">
                            <div className="left-arrow">
                                <a onClick={handlePrevMonth}>
                                    <span className=' bg-secondary rounded-circle text-white '>
                                        <FaAngleLeft />
                                    </span>
                                </a>
                            </div>
                            <div className="right-arrow">
                                <a onClick={handleNextMonth}>
                                    <span className='p-2 bg-secondary rounded-circle text-white'>
                                        <FaAngleRight />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <MonthList
                        handleMonthChange={handleMonthChange}
                    /> */}
                </div>
                <div className="calendar-container mt-2">
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px' }} className='calendar'>
                        {weekDays.map((day, index) => (
                            <div key={index}
                                style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292', color: '#fff' }}
                                className={`week-day d-flex justify-content-center align-items-center ${day === 'ஞாயிறு' ? 'sunday' : ''}`}>
                                {day}
                            </div>
                        ))}
                        {weeks.map((week, weekIndex) => (
                            <div key={weekIndex} style={{ display: 'contents' }} className="week">
                                {week.map((day, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className={`day day-cell ${day?.tamil_date &&
                                            parseInt(day.date) === currentDate &&
                                            currentMonth === parseInt(calendar.month)
                                            ? 'highlight-today'
                                            : ''
                                            } ${day?.tamilday === 'ஞாயிறு' ? 'sunday' : ''}`}
                                    >
                                        {day ? (
                                            <>
                                                <span className="tamil_month position-relative">{day.tamilmonth}</span>
                                                {day.special_day && day.special_day.length > 0 && (
                                                    <>
                                                        {day.special_day.map((special, idx) => (
                                                            <span className="d-none d-md-flex d-lg-none special-event-img position-absolute end-0 top-0" key={idx}>
                                                                {specialDayImages[special.name] && (
                                                                    <img src={specialDayImages[special.name]} alt={special.name} />)
                                                                }
                                                            </span>
                                                        ))}
                                                    </>
                                                )}
                                                <div className="date-grid">
                                                    <span className="tamil_date">{day.tamil_date}</span>
                                                    {day.special_day && day.special_day.length > 0 && (
                                                        <>
                                                            {day.special_day.map((special, idx) => (
                                                                <span className="special-event-img d-none d-lg-flex position-relative" key={idx}>
                                                                    {specialDayImages[special.name] && (
                                                                        <img src={specialDayImages[special.name]} alt={special.name} />
                                                                    )}
                                                                </span>
                                                            ))}
                                                        </>
                                                    )}
                                                    <span className={`english_date ${day?.tamilday === 'ஞாயிறு' ? 'sunday' : ''}`}>{day.date}</span>
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
        </div>
    );
};

export default CalendarSection;
