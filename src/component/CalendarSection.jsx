'use client'
import React, { useEffect, useState } from 'react';
import '@/style/CalendarSection.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import PlayStoreBanner from './PlayStoreBanner';
import { data } from '@/utils/Data';
import DayModal from './DayModal';
import Spinner from '../../public/icon/Spinner';
// import InfinitySVG from '../../public/icon/Infinity';

const CalendarSection = () => {
    const { specialDayImages, month_list } = data
    const [calendarData, setCalendarData] = useState(null);
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState('2024-11-01');
    const [humanFormatDate, setHumanFormatDate] = useState('');

    const [viradhamData, setViradhamData] = useState([]);

    const fetchMonthData = (monthIndex) => {
        if (monthIndex !== -1 && calendarData) {
            const selectedMonth = calendarData.cal[monthIndex].month; // Get month number (e.g., "11")
            const selectedMonthName = calendarData.cal[monthIndex].month_name; // Get full month name
            const selectedYear = selectedMonthName.split(' ')[1]; // Extract year (e.g., "2024")
            // Construct the file name based on the month and year
            const fileName = `/data/month_special_days/month-data-${month_list[parseInt(selectedMonth)]}-${selectedYear}.json`;
            fetch(fileName)
                .then((response) => response.json())
                .then((monthData) => {
                    setViradhamData(monthData.viradhamDays)
                })
                .catch((error) => {
                    console.error('Error fetching the specific month data:', error);
                });
        }
    };

    useEffect(() => {
        // First fetch the `month2025.json` file
        fetch('/data/month2025.json')
            .then((response) => response.json())
            .then((data) => {
                // Set calendarData state
                setCalendarData(data);
                // Get today's date details
                const today = new Date();
                const currentMonth = today.getMonth() + 1; // Get current month (1-indexed)
                const currentMonthIndex = data.cal.findIndex(
                    month => parseInt(month.month) === currentMonth
                );
                // Update the currentMonthIndex state
                if (currentMonthIndex !== -1) {
                    setCurrentMonthIndex(currentMonthIndex);
                }
            })
            .catch((error) => {
                console.error('Error fetching the calendar data:', error);
            });
    }, []); // Only run once on component mount

    useEffect(() => {
        // Only fetch month data when calendarData is loaded and currentMonthIndex is available
        if (calendarData && currentMonthIndex !== null) {
            fetchMonthData(currentMonthIndex);
        }
    }, [calendarData, currentMonthIndex]); // Trigger fetch when both states change

    if (!calendarData) {
        return <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <Spinner />
            {/* <InfinitySVG /> */}
        </div>; // Show loading indicator while data is being fetched
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
    const currentYear = today.getFullYear();

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

    const handleDateClick = (formattedDate, humanFormattedDate) => {
        setSelectedDate(formattedDate);
        setHumanFormatDate(humanFormattedDate);
        // Store the formatted date in state
        setShowModal(true); // Open the modal
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className='d-flex flex-column flex-lg-row gap-2 justify-content-between'>
            <div className='col-12 col-lg-10 calendar-section pt-2 pb-xl-3 px-xl-3 mx-0'>
                <div className=" p-2 p-md-3 pb-xl-3 px-xl-3">
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
                    </div>
                    <div className="calendar-container mt-2">
                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px' }} className='calendar'>
                            {weekDays.map((day, index) => (
                                <div key={index}
                                    style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292', color: '#fff' }}
                                    className={`week-day d-none d-md-flex justify-content-center align-items-center ${day === 'ஞாயிறு' ? 'sunday' : ''}`}>
                                    {day}
                                </div>
                            ))}
                            {weekDays.map((day, index) => (
                                <div key={index}
                                    style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292', color: '#fff' }}
                                    className={`week-day d-flex d-md-none justify-content-center align-items-center ${day === 'ஞாயிறு' ? 'sunday' : ''}`}>
                                    {day.slice(0, 2) + '.'}
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

                                            onClick={() => {
                                                const year = calendar.month_name.split(' ')[1]; // Extract year from month_name
                                                const formattedDate = `${year}-${calendar.month.padStart(2, '0')}-${day.date.padStart(2, '0')}`; // Format as YYYY-MM-DD
                                                const humanFormattedDate = `${day.date.padStart(2, '0')}-${calendar.month.padStart(2, '0')}-${year}`; // Format as YYYY-MM-DD
                                                handleDateClick(formattedDate, humanFormattedDate); // Pass formatted date
                                            }}
                                        >
                                            {day ? (
                                                <>
                                                    <span className="tamil_month">{day.tamilmonth}</span>
                                                    <span className="tamil_date">{day.tamil_date}</span>
                                                    {day.special_day && day.special_day.length > 0 && (
                                                        <>
                                                            {day.special_day.map((special, idx) => (
                                                                <span className="special-event-img d-none d-lg-flex" key={idx}>
                                                                    {specialDayImages[special.name] && (
                                                                        <img src={specialDayImages[special.name]} alt={special.name} />
                                                                    )}
                                                                </span>
                                                            ))}
                                                        </>
                                                    )}
                                                    <span className={`english_date d-flex justify-content-center w-100 align-items-baseline ${day?.tamilday === 'ஞாயிறு' ? 'sunday' : ''}`}>{day.date}</span>
                                                </>
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='special-days mt-3 border rounded px-3'>
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                            {viradhamData.map((item, idx) => (
                                <div className="col d-flex align-items-center gap-2" key={idx}>
                                    <div className='rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center my-2' style={{width:'30px', height:'30px'}}>
                                        <p className='text-dark fw-bold' style={{fontSize:'12px'}} >{item.day_no}</p>
                                    </div>
                                    <div className='my-2'>
                                        <p style={{fontSize:'12px'}} className='fw-bold text-start'>{item.day_name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <DayModal
                    showModal={showModal}
                    selectedDate={selectedDate}
                    humanFormatDate={humanFormatDate}
                    handleClose={handleClose}
                />
            </div>
            <div className='col-12 col-lg-2 bg-white shadow-sm rounded text-dark'>
                <PlayStoreBanner />
            </div>
        </div>
    );
};

export default CalendarSection;