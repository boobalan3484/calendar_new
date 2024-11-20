'use client';
import React, { useEffect, useState } from 'react';
import '@/style/CalendarSection.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { data } from '@/utils/Data';
import DayModal from '@/component/DayModal';
import PlayStoreBanner from '@/component/PlayStoreBanner';
import Spinner from '../../public/icon/Spinner';

const WeeklyCalendar = () => {

    const { specialDayImages, weekDays, month_list } = data;
    const [calendarData, setCalendarData] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState('2024-11-01');
    const [humanFormatDate, setHumanFormatDate] = useState('');

    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month

    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1;

    const [viradhamData, setViradhamData] = useState([]);

    const createWeeks = (daysInMonth) => {
        const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);
        const weeks = [];
        let week = new Array(startDayIndex).fill(null);

        daysInMonth.forEach((day, index) => {
            week.push(day);
            if (week.length === 7 || index === daysInMonth.length - 1) {
                weeks.push(week);
                week = [];
            }
        });
        return weeks;
    };

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
        fetch('/data/month2025.json')
            .then((response) => response.json())
            .then((data) => {
                setCalendarData(data);
                const today = new Date();
                const currentMonth = today.getMonth() + 1;
                const currentDate = today.getDate();
                const initialMonthIndex = data.cal.findIndex(
                    month => parseInt(month.month) === currentMonth
                );

                if (initialMonthIndex !== -1) {
                    setCurrentMonthIndex(initialMonthIndex);
                    const weeks = createWeeks(data.cal[initialMonthIndex].days);
                    const initialWeekIndex = weeks.findIndex(week =>
                        week.some(day => day && parseInt(day.date) === currentDate)
                    );
                    if (initialWeekIndex !== -1) {
                        setCurrentWeekIndex(initialWeekIndex);
                    } else {
                        setCurrentWeekIndex(0); // Fallback if the current date is not found
                    }
                }
            })
            .catch((error) => {
                console.error('Error fetching the calendar data:', error);
            });
    }, []);

    useEffect(() => {
        // Only fetch month data when calendarData is loaded and currentMonthIndex is available
        if (calendarData && currentMonthIndex !== null) {
            fetchMonthData(currentMonthIndex);
        }
    }, [calendarData, currentMonthIndex]); // Trigger fetch when both states change

    if (!calendarData) {
        return <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <Spinner />
        </div>; // Show loading indicator while data is being fetched
    }

    const currentMonthData = calendarData.cal[currentMonthIndex];
    const weeks = createWeeks(currentMonthData.days);
    const currentWeek = weeks[currentWeekIndex] || [];

    const currentWeekDays = currentWeek.map(day => day ? day.date : null); // Extract day numbers of the current week
    const filteredViradhamData = viradhamData.filter(item =>
        currentWeekDays.includes(item.day_no.toString()) // Check if day_no matches any of the current week days
    );

    const handleDateClick = (formattedDate, humanFormattedDate) => {
        setSelectedDate(formattedDate);
        setHumanFormatDate(humanFormattedDate);
        setShowModal(true); // Open the modal
    };

    const handleClose = () => {
        setShowModal(false);
    };

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



    return (
        <div className='d-flex flex-column flex-xl-row gap-2 justify-content-between'>
            <div className='col-12 col-xl-9 calendar-section pt-2 pb-xl-3 px-xl-3 mx-0 '>
                <div className="p-2 p-md-3 pb-xl-3 px-xl-3">
                    <div>
                        <div className="row align-items-center justify-content-center calendar-header pb-2 position-relative">
                            <div className="col text-center middle">
                                <div className="title-month p-0 m-0">
                                    {currentMonthData.month_name}
                                </div>
                                <div className="title-desc">
                                    {currentMonthData.month_name_tamil}
                                </div>
                            </div>
                            <div className="day_calendar arrows w-100">
                                <div className="left-arrow">
                                    <a onClick={handlePrevWeek} disabled={isPrevDisabled}>
                                        <span className='rounded-circle text-white'>
                                            <FaAngleLeft />
                                        </span>
                                    </a>
                                </div>
                                <div className="right-arrow">
                                    <a onClick={handleNextWeek} disabled={isNextDisabled}>
                                        <span className='p-2 rounded-circle text-white'>
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
                            {currentWeek.map((day, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className={`day day-cell ${day?.tamil_date && parseInt(day.date) ===
                                        currentDate && currentMonth === parseInt(currentMonthData.month)
                                        ? 'highlight-today' : ''} ${day?.tamilday === 'ஞாயிறு' ? 'sunday' : ''}`}
                                    style={{ height: '100px !important' }}
                                    onClick={() => {
                                        const year = currentMonthData.month_name.split(' ')[1];
                                        const formattedDate = `${year}-${currentMonthData.month.padStart(2, '0')}-${day.date.padStart(2, '0')}`;
                                        const humanFormattedDate = `${day.date.padStart(2, '0')}-${currentMonthData.month.padStart(2, '0')}-${year}`;
                                        handleDateClick(formattedDate, humanFormattedDate);
                                    }}
                                >
                                    {day ? (
                                        <>
                                            {/* <span className="tamil_month position-relative">{day.tamilmonth}</span>
                                            {day.special_day && day.special_day.length > 0 && (
                                                <>
                                                    {day.special_day.map((special, idx) => (
                                                        <span className="d-none d-md-flex d-lg-none special-event-img position-absolute end-0 top-0" key={idx}>
                                                            {specialDayImages[special.name] && (
                                                                <img src={specialDayImages[special.name]} alt={special.name} />
                                                            )}
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
                                            </div> */}
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
                    </div>
                    <div className='special-days mt-3 border rounded px-3'>
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                            {filteredViradhamData.map((item, idx) => (
                                <div className="col d-flex align-items-center gap-2" key={idx}>
                                    <div className='rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center my-2' style={{ width: '30px', height: '30px' }}>
                                        <p className='text-dark fw-bold' style={{ fontSize: '12px' }} >{item.day_no}</p>
                                    </div>
                                    <div className='my-2'>
                                        <p style={{ fontSize: '12px' }} className='fw-bold text-start'>{item.day_name}</p>
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
            <div className='col-12 col-xl-3 bg-white shadow-sm rounded text-dark'>
                <PlayStoreBanner />
            </div>
        </div>
    );
};

export default WeeklyCalendar;