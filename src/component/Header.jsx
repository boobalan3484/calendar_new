'use client'
import React from 'react'
import '@/style/Header.css'
import { FaCalendarWeek } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className='header p-0'>
            <div className='container header-wrapper px-2 px-lg-3 py-1'>
                <div className="logo">
                    <Link href='/'>
                        <img src="/images/Makkal_Naalkaati_Logo.png" alt="" />
                    </Link>
                </div>
                <div className="brand d-none d-lg-block" style={{ width: '300px' }}>
                    <img src="/images/Makkal_Naalkaati_Logo1.png" alt="" />
                </div>
                <div className="share d-flex calandar-icons">
                    <Link href="/" className={`day-icon d-flex align-items-center flex-column gap-md-2 flex-md-row ${pathname === "/" ? "active" : ""}`} title='Day'>
                        <FaCalendarDay className='fs-3' />
                        <span className=' fw-bold'>இன்று</span>
                    </Link>
                    <Link href="/weekly-calendar" className={`week-icon d-flex align-items-center flex-column gap-md-2 flex-md-row ${pathname === "/weekly-calendar/" ? "active" : ""}`} title='Weekly'>
                        <FaCalendarWeek className='fs-3' />
                        <span className='  fw-bold'>வாரம்</span>
                    </Link>
                    <Link href="/monthly-calendar" className={`month-icon d-flex align-items-center flex-column gap-md-2 flex-md-row ${pathname === "/monthly-calendar/" ? "active" : ""}`} title='Monthly'>
                        <FaCalendarDays className='fs-3' />
                        <span className=' fw-bold'>மாதம்</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header