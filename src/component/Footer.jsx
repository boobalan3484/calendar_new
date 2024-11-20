'use client'
import React, { useState } from 'react'
import '@/style/Footer.css'

import { MdMail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

import Link from 'next/link';
import { usePathname } from "next/navigation";

const reach_out = [
    {
        platform: 'mail',
        icon: <MdMail className='contact-icon' />,
        value: 'mpeoplesofficial@gmail.com',
        link: 'mailto:mpeoplesofficial@gmail.com'
    },
    {
        platform: 'mobile1',
        icon: <FaMobileScreen className='contact-icon' />,
        value: '+91 9487812715',
        link: 'https://wa.me/+919487812715'
    },
]
const social = [
    {
        platform: 'LinkedIn',
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/company/104539927/admin/dashboard/',
        color: '#0a66c2',
    },
    {
        platform: 'Instagram',
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/mpeoples_official/',
        color: 'linear-gradient(45deg, #FF7A00, #FF0169, #D300C5)', // Using a gradient
    },
    {
        platform: 'X Corp.',
        icon: <FaXTwitter />,
        link: 'https://x.com/Mpeoples_',
        color: '#000',
    },
    {
        platform: 'YouTube',
        icon: <FaYoutube />,
        link: 'https://www.youtube.com/channel/UCWp_wGb83WWdY12ShZeNk2w',
        color: '#FF0000',
    },
    {
        platform: 'Facebook',
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/profile.php?id=61561349522345',
        color: '#0866ff',
    },
];


const Footer = () => {

    const pathname = usePathname();

    return (
        <footer className=' bottom-0 position-relative text-light footer-container py-4' style={{ fontFamily: 'arial' }}>
            <div className="mx-5">
                <div className='d-flex flex-column flex-lg-row align-items-center my-3'>
                    <div className="border_line_about col-12  col-lg-8 col-xl-8 pe-4 py-2 text-center h-100 d-flex flex-column flex-lg-row align-items-center gap-4 pb-sm-4 pb-md-4 pb-lg-2 align-items-lg-center justify-content-center h-100">
                        <div className="logo col-2">
                            <Link href='/'>
                                <img src="/images/Makkal_Naalkaati_Logo.png" alt="" />
                            </Link>
                        </div>
                        <p className='col fw-normal text-start text-dark' style={{ letterSpacing: '.8px', fontSize: '14px' }}>
                            மக்கள் நாட்காட்டி என்பது இன்றைய மக்களின் அன்றாட சிந்தனையை அறிவூட்டும் ஒரு பயன்பாடாகும். இதில் 12 ராசிகள் 27 நட்சத்திரங்கள் மற்றும் கிரகங்களின் கோணங்களை அறியலாம். பழங்காலக் கோயில்கள் அவற்றின் புராண அம்சங்களுடன் ஆன்மீகத் தகவல்களையும் வழங்குகின்றன.
                        </p>
                    </div>
                    <div className="border_line_contact px-4 pt-2 pt-lg-0 col col-sm-6 col-lg-4 col-xl-4 d-flex d-md-flex justify-content-between mt-3 mt-lg-0">
                        <div className='w-100 d-flex flex-column'>
                            <p className='fw-bold p-0 py-2 m-0 text-dark'>
                                Contact us
                            </p>
                            <ul className='list-unstyled reachout-list d-flex flex-column gap-3 mb-0 my-2'>
                                {reach_out.map((item, idx) => (
                                    <li className='d-flex gap-2 align-items-center' key={idx}>
                                        {item.icon}
                                        <a className='' style={{ fontSize: '14px' }} href={item.link} target="_blank" rel="noopener noreferrer ">
                                            {item.value}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className='d-flex gap-2 my-3'>
                                <FaLocationDot className='mt-1 contact-icon' />
                                <p className='p-0 m-0 text-secondary' style={{ fontSize: '14px' }}>
                                    1/248, Raja Ganapathy Complex,
                                    <br />
                                    2nd Floor, Opposite BSNL Office,
                                    <br />
                                    Meyyaanur Main Road,
                                    Salem - 636004.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-sm-6 col-xl-12 w-100 d-flex flex flex-column flex-sm-row  justify-content-between align-items-start align-items-md-center px-4  border-2 border-top'>
                    <div className='order-2  d-flex flex-column flex-sm-row gap-0 gap-sm-4 gap-lg-4 gap-xl-4 align-items-start align-items-sm-center justify-content-start'>
                        <p className='fw-bold p-0 py-2 m-0 text-dark '>
                            Follow us
                        </p>
                        <ul className='d-flex list-unstyled gap-2 social-list my-2 justify-content-center'>
                            {social.map((item, idx) => (
                                <li key={idx} className="social-icon-item" style={{ '--social-color': item.color }}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon-link"
                                        title={item.platform}
                                    >
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='order-1 d-flex flex-column flex-lg-row  gap-0 gap-lg-4 terms_privacy '>
                        <Link href='/about-us' className={`text-wrap fw-bold p-0 py-2 m-0 ${pathname === "/about-us/" ? "active" : ""}`} >
                            About us
                            <span className='ps-1'>
                                <GoArrowUpRight />
                            </span>
                        </Link>
                        <Link href='/privacy-policy' className={`text-wrap fw-bold p-0 py-2 m-0 ${pathname === "/privacy-policy/" ? "active" : ""}`} >
                            Privacy policy
                            <span className='ps-1'>
                                <GoArrowUpRight />
                            </span>
                        </Link>
                        <Link href='/terms-conditions' className={`text-wrap fw-bold p-0 py-2 m-0 ${pathname === "/terms-conditions/" ? "active" : ""}`}>
                            Terms and condition
                            <span className='ps-1'>
                                <GoArrowUpRight />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer