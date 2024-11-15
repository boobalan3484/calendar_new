import React from 'react'
import '@/style/Header.css'
import { FaCalendarWeek } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import Link from 'next/link';
const Header = () => {
    return (
        <header className='header'>
            <div className='container header-wrapper py-1'>
                <div className="logo">
                    <img src="/images/Makkal_Naalkaati_Logo.png" alt="" />
                    {/* <h3 className='fw-bold'> Logo.</h3> */}
                </div>
                <div className="brand d-none d-lg-block" style={{ width: '300px' }}>
                    <img src="/images/Makkal_Naalkaati_Logo1.png" alt="" />
                </div>
                <div className="share calandar-icons">
                    <Link href="/" className="day-icon" title='Day'>
                        {/* <i className="icon-day"></i> */}
                        <FaCalendarDay className='fs-3' />
                        <span className='ps-2 fw-bold'>இன்று</span>
                    </Link>
                    <Link href="/weekly-calendar" className="week-icon" title='Weekly'>
                        {/* <i className="icon-weekly"></i> */}
                        <FaCalendarWeek className='fs-3' />
                        <span className='ps-2 fw-bold'>வாரம்</span>
                    </Link>
                    <Link href="/monthly-calendar" className="month-icon" title='Monthly'>
                        {/* <i className="icon-monthly"></i> */}
                        <FaCalendarDays className='fs-3' />

                        <span className='ps-2 fw-bold'>மாதம்</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header