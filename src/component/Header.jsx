import React from 'react'
import '@/style/Header.css'
import { FaCalendarWeek } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
const Header = () => {
    return (
        <header className='header'>
            <div className='container header-wrapper'>
                <div className="logo">
                    <h3 className='fw-bold'> Logo.</h3>
                </div>
                <div className="share calandar-icons">
                    <a href="/" className="day-icon">
                        {/* <i className="icon-day"></i> */}
                        <FaCalendarDay />
                        <span>இன்று</span>
                    </a>
                    <a href="/weekly-calendar" className="week-icon">
                        {/* <i className="icon-weekly"></i> */}
                        <FaCalendarWeek />
                        <span>வாரம்</span>
                    </a>
                    <a href="/monthly-calendar" className="active month-icon">
                        {/* <i className="icon-monthly"></i> */}
                        <FaCalendarDays />

                        <span>மாதம்</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header