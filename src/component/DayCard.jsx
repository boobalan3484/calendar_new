import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { LuAlarmClock } from 'react-icons/lu'
import { data } from '@/utils/Data.js'
import Reusable from './Reusable'
import Sticky from './Sticky'
import '@/style/Sticky.css'
import MyHeader from './Sticky'

const DayCard = ({ formatDate, dayData, isThithi, handlePreviousDay, handleNextDay }) => {

    const { auspiciousDays } = data

    return (
        <div className={` ${Reusable({ one: 'col col-lg-10', two: 'col-12', three: 'col-12 mx-0' })} row main-section p-3`}>
            <div className="mb-0 mb-lg-3 col-12 ps-0 pe-0 pe-lg-3 col-lg-5 d-flex flex-column justify-content-between align-items-center position-relative">
                {/* Date Container section */}
                {/* <MyHeader /> */}
                <div className="date-container date-day-section mb-0 mb-lg-3 w-100">
                    <div className='date-day-wrapper text-center rounded-top w-100 py-1 text-dark d-flex flex-column justify-content-center align-items-center gap-1'>
                        <h1 className="text-center fs-1 text-dark">{formatDate}</h1>
                        <h5 className='fw-semibold'>{dayData.homedates.tamilWeekDay}</h5>
                    </div>

                    <div className='date-day-tamil-wrapper text-white d-flex align-items-center justify-content-between px-3 rounded-bottom'>
                        <h5 className='fw-bold'> {dayData.homedates.tamilYear} </h5>
                        <h5 className='bg-white text-danger fs-5 p-1 px-2 m-1 rounded fw-bold'> {dayData.homedates.tamilDate}</h5>
                        <h5 className='fw-bold'> {dayData.homedates.tamilMonth} </h5>
                    </div>

                    {/* <h6 className="text-center">
                        <span>{dayData.homedates.tamilYear}</span> - <span>{dayData.homedates.tamilMonth}</span><span>{dayData.homedates.tamilDate}</span>
                    </h6> */}
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
                        <div className="col d-flex justify-content-center">
                            <div className='d-flex flex-row-reverse'>
                                {isThithi.map((imageName, index) => (
                                    <img
                                        key={index}
                                        src={auspiciousDays[imageName]}
                                        alt={imageName}
                                        className='img-fluid '
                                        style={{ width: '30px', height: '30px', margin: '5px' }} // Adjust styles as needed
                                    />))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Arrows */}
                <div className={`${Reusable({ one: 'd-flex', two: 'd-flex', three: 'd-none' })} day_calendar arrows`}>
                    <div className="left-arrow">
                        <a onClick={handlePreviousDay}>
                            <span className='rounded-circle text-white '>
                                <FaAngleLeft />
                            </span>
                        </a>
                    </div>
                    <div className="right-arrow">
                        <a onClick={handleNextDay}>
                            <span className='p-2 rounded-circle text-white'>
                                <FaAngleRight />
                            </span>
                        </a>
                    </div>
                </div>
                {/* Chandraanstam Section */}
                <div className="star-cards w-100 d-none d-lg-flex flex-column">
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
            <div className="mb-3 col-12 col-lg-7 left-con p-2 shadow-sm d-flex flex-column justify-content-evenly">
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
            <div className='border order-3 order-lg-1 rounded mt-1 mb-3 px-0'>
                <p className='d-flex d-md-none justify-content-center fw-bold today_rasi_palan bg-secondary text-white py-2 rounded-top mb-2'>இன்றைய ராசிபலன்</p>
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
            <div className="col-12 order-1 order-lg-2 px-0">
                <div className="sec-2 d-flex justify-content-start align-items-center h-100">
                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                        <h5 className='rounded-0'>நட்சத்திரம்</h5>
                        <p className="px-2 text-dark">{dayData.dailyInfo.StarDetails}</p>
                    </div>
                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                        <h5 className='rounded-0'>கரணம்</h5>
                        <p className="px-2 text-dark">{dayData.dailyInfo.KaranamDetails}</p>
                    </div>
                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                        <h5 className='rounded-0'>நாமயோகம்</h5>
                        <p className="px-2 text-dark">{dayData.dailyInfo.Namyogam}</p>
                    </div>
                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                        <h5 className='rounded-0'>அமிர்தயோகம்</h5>
                        <p className="px-2 text-dark">{dayData.dailyInfo.Amirthathiyogam}</p>
                    </div>
                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                        <h5 className='rounded-0'>ஜீவன்</h5>
                        <p className="px-2 text-dark">{dayData.dailyInfo.Jeevan}</p>
                    </div>
                    <div className="star-cards star-card-flex gap-2 star-cards-bg border rounded-0">
                        <h5 className='rounded-0'>நேத்திரம்</h5>
                        <p className="px-2 text-dark">{dayData.dailyInfo.Nethiram}</p>
                    </div>
                </div>


            </div>

            <div className="star-cards w-100 d-flex d-lg-none order-2 flex-column px-0 my-2">
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
    )
}

export default DayCard