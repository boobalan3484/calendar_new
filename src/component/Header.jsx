import React from 'react'
import '@/style/Header.css'
import { FaCalendarWeek } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
const Header = () => {
    return (
        <header className='header p-0'>
            <div className='container header-wrapper px-2 px-lg-3 py-1'>
                <div className="logo">
                    <img src="/images/Makkal_Naalkaati_Logo.png" alt="" />
                    {/* <h3 className='fw-bold'> Logo.</h3> */}
                </div>
                <div className="brand d-none d-lg-block" style={{width:'300px'}}>
                    <img src="/images/Makkal_Naalkaati_Logo1.png" alt="" />
                </div>
                <div className="share d-flex calandar-icons">
                    <a href="/" className="day-icon d-flex align-items-center flex-column gap-md-2 flex-md-row " title='Day'>
                        {/* <i className="icon-day"></i> */}
                        <FaCalendarDay className='fs-3' />
                        <span className=' fw-bold'>இன்று</span>
                    </a>
                    <a href="/weekly-calendar" className="week-icon d-flex align-items-center flex-column gap-md-2 flex-md-row" title='Weekly'>
                        {/* <i className="icon-weekly"></i> */}
                        <FaCalendarWeek className='fs-3' />
                        <span className='  fw-bold'>வாரம்</span>
                    </a>
                    <a href="/monthly-calendar" className="month-icon d-flex align-items-center flex-column gap-md-2 flex-md-row" title='Monthly'>
                        {/* <i className="icon-monthly"></i> */}
                        <FaCalendarDays className='fs-3' />

                        <span className=' fw-bold'>மாதம்</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header