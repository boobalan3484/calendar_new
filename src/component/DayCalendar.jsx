'use client'
import React, { useState, useEffect } from 'react';
import "@/style/dayPageStyle.css";
import "@/style/pagenationStyle.css";
// import { BsFillClockFill } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";

const DayCalendar = () => {

    // const specialDayImages = {
    //     "அமாவாசை": "/images/special_days/1.png",
    //     "பௌர்ணமி": "/images/special_days/2.png",
    //     "ஏகாதசி": "/images/special_days/3.png",
    //     "சஷ்டி": "/images/special_days/4.png",
    //     "பிரதோஷம்": "/images/special_days/5.png",
    //     "சதுர்த்தி": "/images/special_days/6.png",
    // };

    const auspiciousDays = {
        thiruvonam: 'https://www.omtamilcalendar.com/auspicious_icons/thiruvonam.png',
        ekadasi: 'https://www.omtamilcalendar.com/auspicious_icons/pradosam_holo.png',
        pradosam: 'https://www.omtamilcalendar.com/auspicious_icons/ekadasi.png',
        pradosam_holo: 'https://www.omtamilcalendar.com/auspicious_icons/pradosam_holo.png',
        shivaratri: 'https://www.omtamilcalendar.com/auspicious_icons/shivaratri.png',
        chaturthi: 'https://www.omtamilcalendar.com/auspicious_icons/chaturthi.png',
        sankataharachaturti: 'https://www.omtamilcalendar.com/auspicious_icons/sankataharachaturti.png',
        shasti: 'https://www.omtamilcalendar.com/auspicious_icons/shasti.png',
        shasti_holo: 'https://www.omtamilcalendar.com/auspicious_icons/shasti_holo.png',
        karthigai: 'https://www.omtamilcalendar.com/auspicious_icons/karthigai.png',
        valarpirai: 'https://www.omtamilcalendar.com/auspicious_icons/valarpirai.png',
        fullmoon: 'https://www.omtamilcalendar.com/auspicious_icons/fullmoon.png',
        theipirai: 'https://www.omtamilcalendar.com/auspicious_icons/theipirai.png',
        blackmoon: 'https://www.omtamilcalendar.com/auspicious_icons/blackmoon.png',
        bothside_arrow: 'https://www.omtamilcalendar.com/auspicious_icons/bothside_arrow.png',
        uparrow: 'https://www.omtamilcalendar.com/auspicious_icons/uparrow.png',
        downarrow: 'https://www.omtamilcalendar.com/auspicious_icons/downarrow.png',
        // =================================================================================
        // thiruvonam: '/images/thithi_images/thiruvonam.png',
        // ekadasi: '/images/thithi_images/pradosam_holo.png',
        // pradosam: '/images/thithi_images/ekadasi.png',
        // pradosam_holo: '/images/thithi_images/pradosam_holo.png',
        // shivaratri: '/images/thithi_images/shivaratri.png',
        // chaturthi: '/images/thithi_images/chaturthi.png',
        // sankataharachaturti: '/images/thithi_images/sankataharachaturti.png',
        // shasti: '/images/thithi_images/shasti.png',
        // shasti_holo: '/images/thithi_images/shasti_holo.png',
        // karthigai: '/images/thithi_images/karthigai.png',
        // valarpirai: '/images/thithi_images/valarpirai.png',
        // fullmoon: '/images/thithi_images/fullmoon.png',
        // theipirai: '/images/thithi_images/theipirai.png',
        // blackmoon: '/images/thithi_images/blackmoon.png',
        // bothside_arrow: '/images/thithi_images/bothside_arrow.png',
        // uparrow: '/images/thithi_images/uparrow.png',
        // downarrow: '/images/thithi_images/downarrow.png'
    }

    const muhurtham_img = 'https://www.omtamilcalendar.com/auspicious_icons/subamuhurtham.png'

    // data : ['thiruvonam' ,'pradosham', 'pradosham_holo', 'ekadasi', 'shivaratri', 'chaturthi', 'sankataharachaturti', 'shashti', 'shashti_hole', 'karthigai']

    const [currentDate, setCurrentDate] = useState(new Date());
    const [dayData, setDayData] = useState(null);
    const [loading, setLoading] = useState(false);

    // const [isFestival, setIsFestival] = useState('')
    // const [isAuspicious, setIsAuspicious] = useState('')
    // const [isMuhurtham, setIsMuhurtham] = useState(null)
    const [isThithi, setIsThithi] = useState([])

    // const transformItems = (items) => {
    //     const parts = items.split(',');
    //     const filteredParts = parts.filter(part => part.trim() !== '');
    //     return filteredParts.join(' | ');
    // };

    const transformImages = (items) => {
        const imagesArray = items.split(',')
            .map(imageName => imageName.trim())
            .filter(imageName => imageName !== '');
        return imagesArray
    }

    useEffect(() => {
        async function fetchDayData(date) {
            setLoading(true);
            try {
                const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
                const response = await fetch(`/data/days/${formattedDate}-Home.json`);
                if (!response.ok) {
                    throw new Error('File not found');
                }
                const data = await response.json();
                setDayData(data);

                // const festivalData = data.panchangamInfo.festival_info
                // const auspiciousData = data.panchangamInfo.day_auspicious
                // const muhurthamData = data.panchangamInfo.muhurtham
                const thithiData = data.panchangamInfo.thithiimages

                // setIsFestival(transformItems(festivalData))
                // setIsAuspicious(transformItems(auspiciousData))
                // setIsMuhurtham(muhurthamData)
                setIsThithi(transformImages(thithiData))

            } catch (error) {
                console.error('Error fetching day data:', error);
                setDayData(null);
            } finally {
                setLoading(false);
            }
        }

        fetchDayData(currentDate);
    }, [currentDate]);

    const handleNextDay = () => {
        setCurrentDate((prevDate) => {
            const nextDate = new Date(prevDate);
            nextDate.setDate(prevDate.getDate() + 1);
            return nextDate;
        });
    };

    const handlePreviousDay = () => {
        setCurrentDate((prevDate) => {
            const prevDateCopy = new Date(prevDate);
            prevDateCopy.setDate(prevDate.getDate() - 1);
            return prevDateCopy;
        });
    };

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    return (
        <>
            <div className="container-xl position-relative">
                {dayData && (
                    <div className='row justify-content-center gap-4'>
                        <div className="col-lg-10 row main-section p-3">
                            <div className="mb-3 col-12 ps-0 pe-3 col-lg-5 d-flex flex-column justify-content-between align-items-center position-relative">
                                {/* Date Container section */}
                                <div className="date-container ">
                                    <h1 className="text-center fs-1">{formatDate(currentDate)}</h1>
                                    <h6 className="text-center">
                                        <span>{dayData.homedates.tamilWeekDay}</span> <span>{dayData.homedates.tamilYear}</span> - <span>{dayData.homedates.tamilMonth}</span><span>{dayData.homedates.tamilDate}</span>
                                    </h6>
                                    {/* {dayData.dailyInfo.MainDays} */}
                                    {/* <div className='text-center'>
                                        {specialDayImages[dayData?.panchangamInfo?.thithiimages] && (
                                            <img
                                                src={specialDayImages[dayData.dailyInfo.MainDays]}
                                                alt={dayData.dailyInfo.MainDays}
                                                style={{ width: '30px', height: 'auto' }} // Adjust size as needed
                                            />
                                        )}
                                    </div> */}
                                    {/* <p>
                                        {dayData.panchangamInfo.thithiimages}
                                    </p> */}

                                    {/* {isFestival &&
                                        < div className='row py-2 bottom-line'>
                                            <p className='text-center fw-bold'>
                                                {isFestival}
                                            </p>
                                        </div>
                                    } */}
                                    {/* {isAuspicious &&
                                        < div className='row py-2 bottom-line'>
                                            <p className='text-center fw-light'>
                                                {isAuspicious}
                                            </p>
                                        </div>
                                    } */}

                                    <div className="row bottom-line py-2">
                                        {/* <div className='col-sm-6 '>
                                            {isMuhurtham === 'Y' && (
                                                <img src={muhurtham_img} className='img-fluid day-up-arrow' alt="muhurtham icon" />
                                            )}
                                        </div> */}



                                        <div className="col-9">
                                            <div className='d-flex flex-row-reverse'>
                                                {isThithi.map((imageName, index) => (
                                                    <img
                                                        key={index}
                                                        src={auspiciousDays[imageName]}
                                                        alt={imageName}
                                                        className='img-fluid '
                                                        style={{ width: '30px', height: '30px', margin: '5px' }} // Adjust styles as needed
                                                    />
                                                ))
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Arrows */}
                                <div className="day_calendar arrows">
                                    <div className="left-arrow">
                                        <a onClick={handlePreviousDay}>
                                            <span className=' bg-secondary rounded-circle text-white '>
                                                <FaAngleLeft />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="right-arrow">
                                        <a onClick={handleNextDay}>
                                            <span className='p-2 bg-secondary rounded-circle text-white'>
                                                <FaAngleRight />
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                {/* Chandraanstam Section */}
                                <div className="star-cards w-100">
                                    <h5 className='fw-bold'>சந்திராஷ்டமம்</h5>
                                    <div className="calender-time-desc p-2 d-flex flex-column flex-sm-row">
                                        <div className='col'>
                                            <div className='text-center'><b>ராசி</b></div>
                                            <div className='d-flex flex-column  justify-content-center align-items-center'>
                                                <p className='text-center fw-semibold'>{dayData.chandrastamamRasi.rashi_name}</p>
                                                <time className='d-flex gap-2'>
                                                    {dayData.chandrastamamRasi.start_date && <p className='text-start'>{dayData.chandrastamamRasi.start_date}</p>}
                                                    - {dayData.chandrastamamRasi.start_time && <p className='text-start'>{dayData.chandrastamamRasi.start_date}</p>}
                                                </time>
                                                {/* - */}
                                                <time className='d-flex gap-2'>
                                                    {dayData.chandrastamamRasi.end_date && <p className='text-start'>{dayData.chandrastamamRasi.end_date}</p>}
                                                    - {dayData.chandrastamamRasi.end_time && <p className='text-start'>{dayData.chandrastamamRasi.end_time}</p>}
                                                </time>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='col'>
                                            <div className='text-center'><b>நட்சத்திரம்</b></div>
                                            <div className='my-3'>{dayData.chandrastamam.map((detail, idx) => (<p key={idx} className='d-flex flex-wrap'>{detail.details}</p>))}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Nalla Neram section */}
                            <div className="mb-3 col-12 col-lg-7 left-con p-2 shadow-sm">
                                <div className="time-container mb-2 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                                    <div className="good-time col">
                                        <h5 className='bg-success text-white rounded-top py-2'>நல்லநேரம்</h5>
                                        <div className="calender-time-desc py-1 px-3">
                                            {dayData?.panchangamInfo?.nneram_mrg?.length > 0 && (<div className='d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-between'><b>காலை</b><time> <span>{dayData.panchangamInfo.nneram_mrg}</span> </time></div>)}
                                            {dayData?.panchangamInfo?.nneram_eve?.length > 0 && (<div className='d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-between'><b>மாலை</b><time> <span>{dayData.panchangamInfo.nneram_eve}</span></time></div>)}
                                        </div>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <LuAlarmClock className="clock-icon" />
                                    </div>
                                    <div className="good-time col">
                                        <h5 className=' text-white rounded-top py-2'>கௌரி நல்ல நேரம்</h5>
                                        <div className="calender-time-desc py-1 px-3">
                                            <div className='d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-between'><b>காலை</b><time> {dayData?.panchangamInfo?.gneram_mrg?.length > 0 && (<span>{dayData.panchangamInfo.gneram_mrg}</span>)}</time></div>
                                            <div className='d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-between'><b>மாலை</b><time> {dayData?.panchangamInfo?.gneram_eve?.length > 0 && (<span>{dayData.panchangamInfo.gneram_eve}</span>)}</time></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ragu emakandam section */}
                                <div className="row flex-column flex-sm-row px-2">
                                    <div className="col px-0 mx-1 calender-time">
                                        <h5 className='bg-secondary text-white rounded-top py-2'>இராகு</h5>
                                        <div className="calender-time-desc py-2 px-3">
                                            {dayData?.customData?.ragu_m?.length > 0 && <div className='d-flex flex-column flex-md-row flex-lg-column align-items-center justify-content-between'><b>காலை</b><time><span>{dayData.customData.ragu_m}</span></time></div>}
                                            {dayData?.customData?.ragu_e?.length > 0 && <div className='d-flex flex-column flex-md-row flex-lg-column align-items-center justify-content-between'><b>மாலை</b><time><span>{dayData.customData.ragu_e}</span></time></div>}
                                        </div>
                                    </div>

                                    <div className="col px-0 mx-1 calender-time">
                                        <h5 className='bg-secondary text-white rounded-top py-2'>குளிகை</h5>
                                        <div className="calender-time-desc py-2 px-3">
                                            {dayData?.customData?.kuligai_m?.length > 0 && <div className='d-flex flex-column flex-md-row flex-lg-column align-items-center justify-content-between'><b>காலை</b><time><span>{dayData.customData.kuligai_m}</span></time></div>}
                                            {dayData?.customData?.kuligai_e?.length > 0 && <div className='d-flex flex-column flex-md-row flex-lg-column align-items-center justify-content-between'><b>மாலை</b><time><span>{dayData.customData.kuligai_e}</span></time></div>}
                                        </div>
                                    </div>

                                    <div className="col px-0 mx-1 calender-time">
                                        <h5 className='bg-danger text-white rounded-top py-2'>எமகண்டம்</h5>
                                        <div className="calender-time-desc py-2 px-3">
                                            {dayData?.customData?.yama_m?.length > 0 && <div className='d-flex flex-column flex-md-row flex-lg-column align-items-center justify-content-between'><b>காலை</b><time><span>{dayData.customData.yama_m}</span></time> </div>}
                                            {dayData?.customData?.yama_e?.length > 0 && <div className='d-flex flex-column flex-md-row flex-lg-column align-items-center justify-content-between'><b>மாலை</b><time><span>{dayData.customData.yama_e}</span></time> </div>}
                                        </div>
                                    </div>
                                </div>

                                <hr />
                                {/* Sulam Pariharaam section */}
                                <div className="row row-cols-2 row-cols-sm-4 ">
                                    <div className="col calender-time mx-0 rounded-0 border-0 border-end">
                                        <h5>சூரியோதயம்</h5>
                                        <div className="calender-time-desc">
                                            <time><span>{dayData.dailyInfo.Sunrise}</span></time>
                                        </div>
                                    </div>
                                    <div className="col calender-time mx-0 rounded-0 border-0 border-end">
                                        <h5>கரணன்</h5>
                                        <div className="calender-time-desc">
                                            <time><span>{dayData.dailyInfo.Karanan}</span></time>
                                        </div>
                                    </div>
                                    <div className="col calender-time mx-0 rounded-0 border-0 border-end">
                                        <h5>சூலம்</h5>
                                        <div className="calender-time-desc">
                                            <time><span>{dayData.dailyInfo.Sulam}</span></time>
                                        </div>
                                    </div>
                                    <div className="col calender-time mx-0 rounded-0 border-0">
                                        <h5>பரிகாரம்</h5>
                                        <div className="calender-time-desc">
                                            <time><span>{dayData.dailyInfo.Parikaram}</span></time>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Rasi palan section */}
                            <div className='border rounded mt-1 mb-3 py-2'>
                                <div className="row row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-gap-2">
                                    {dayData.rasiDaily.map((item, idx) => (
                                        <div className="col" key={idx}>
                                            <div className='d-flex align-items-center justify-content-center justify-content-md-start gap-2 ms-0 ms-md-4 '>
                                                <div style={{ fontSize: '12px', fontWeight: 'bold' }}> {item.name} </div> - <div style={{ fontSize: '12px' }}> {item.info} </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* star container section */}
                            <div className="col-12 px-0">
                                <div className="sec-2 d-flex justify-content-start align-items-center h-100">
                                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                                        <h5 className='rounded-0'>நட்சத்திரம்</h5>
                                        <p className="px-2">{dayData.dailyInfo.StarDetails}</p>
                                    </div>
                                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                                        <h5 className='rounded-0'>கரணம்</h5>
                                        <p className="px-2">{dayData.dailyInfo.KaranamDetails}</p>
                                    </div>
                                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                                        <h5 className='rounded-0'>நாமயோகம்</h5>
                                        <p className="px-2">{dayData.dailyInfo.Namyogam}</p>
                                    </div>
                                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                                        <h5 className='rounded-0'>அமிர்தயோகம்</h5>
                                        <p className="px-2">{dayData.dailyInfo.Amirthathiyogam}</p>
                                    </div>
                                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                                        <h5 className='rounded-0'>ஜீவன்</h5>
                                        <p className="px-2">{dayData.dailyInfo.Jeevan}</p>
                                    </div>
                                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                                        <h5 className='rounded-0'>நேத்திரம்</h5>
                                        <p className="px-2">{dayData.dailyInfo.Nethiram}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-2 bg-white shadow-sm rounded text-dark'>

                            <div className='h-100 py-4 d-flex flex-column justify-content-center gap-4 align-items-center'>


                                <div className="brand" style={{ width: '170px' }}>
                                    <img src="/images/Makkal_Naalkaati_Logo1.png" alt="" />
                                </div>
                                <div className='text-center'>
                                    <p style={{ fontSize: '14px', letterSpacing: '.6px' }}>
                                        மக்கள் நாட்காட்டியில்  , ஜோதிடத்தில் உள்ள கிரகங்கள், புராதன கோவில்கள், அறம் கூறும் திருக்குறள்கள் , சித்தர்கள் கூறும் அறிவுரைகள் என பலவற்றைக் காணலாம்.
                                    </p>
                                </div>

                                <div className='text-center d-flex flex-column gap-3'>
                                    <p style={{ fontSize: '14px' }}>
                                        ஆயிரக்கணக்கான வாசகர்களை கொண்ட செயலி
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <strong>உடனே பதிவிறக்கம் செய்யவும் </strong>
                                    </p>

                                    <a href="https://play.google.com/store/apps/details?id=com.makkal.calendar" target='_blank' className='play-store-a'>
                                        <img src="/images/Google_Play.png" alt="" style={{ width: '200px' }} className='' />
                                    </a>
                                </div>

                                {/* <div className='btn border-0 play-button mt-2'>
                                    <a href="" className='d-flex align-items-center rounded px-4 py-2'>
                                        <BiLogoPlayStore className='fs-1' />
                                        <span>
                                            Play store
                                        </span>
                                    </a>
                                </div> */}


                            </div>
                        </div>
                    </div>
                )
                }
            </div >

            <div>

            </div>
        </>
    )
}

export default DayCalendar