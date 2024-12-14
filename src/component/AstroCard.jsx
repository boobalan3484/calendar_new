import React from 'react'
import "@/style/dayPageStyle.css";

const AstroCard = () => {
    return (
            <div className=' py-4 px-2 d-flex flex-column justify-content-center gap-4 align-items-center'>
                <div className="brand" style={{ width: '170px' }}>
                    <img src="/images/Makkal_Naalkaati_Logo1.png" alt="" />
                </div>
                <div className='text-center'>
                    <p style={{ fontSize: '14px', letterSpacing: '.6px' }}>
                        மக்கள் நாட்காட்டியில்  , ஜோதிடத்தில் உள்ள கிரகங்கள், புராதன கோவில்கள், அறம் கூறும் திருக்குறள்கள் , சித்தர்கள் கூறும் அறிவுரைகள் என பலவற்றைக் காணலாம்.
                    </p>
                </div>
                <div className='text-center d-flex flex-column gap-3'>
                    {/* <p style={{ fontSize: '14px' }}>
                        ஆயிரக்கணக்கான வாசகர்களை கொண்ட செயலி
                    </p> */}
                    <p style={{ fontSize: '14px' }}>
                        <strong>உடனே <br /> மக்கள் நாட்காட்டி <br/> செயலி பதிவிறக்கம் செய்யவும் </strong>
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.makkal.calendar" target='_blank' className='play-store-a'>
                        <img src="/images/Google_Play.png" alt="" style={{ width: '200px' }} className='' />
                    </a>
                </div>
            </div>
    )
}

export default AstroCard