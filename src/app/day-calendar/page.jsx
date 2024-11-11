import React from 'react';
import "@/styles/dayPageStyle.css";
import "@/styles/pagenationStyle.css";
import { GiAries } from "react-icons/gi";


import { BsFillClockFill } from "react-icons/bs";
function page() {
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-12">
            <h1 className="calender-title">Today’s Tamil Daily Calendar 2024</h1>
          </div>
        </div>
        <div className="row main-section">
          <div className="mb-5 col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="date-container">
              <h1 className="text-center">11-06-2002</h1>
              <h6 className="text-center">
                <span>திங்கள்</span><span>ஐப்பசி 25</span>
              </h6>
            </div>
          </div>
          <div className="mb-5 col-12 col-lg-6 p-4 left-con">
            <div className="time-container mb-3 d-flex justify-content-between align-items-center gap-2">
              <div className="good-time">
                <h5>நல்லநேரம்</h5>
                <p><b>காலை</b> <span>6.15- 7:15</span></p>
                <p><b>மாலை</b> <span>6.15- 7:15</span></p>
              </div>
              <div className="">
                <BsFillClockFill className="clock-icon" />
              </div>
              <div className="good-time">
                <h5>சூலம்</h5>
                <p><b>திசை</b> <span>மேற்கு</span></p>
                <p><b>பரிகாரம்</b> <span>வெல்லம்</span></p>
              </div>
            </div>
            <div className="row gap-2">
              <div className="col-4 col-md-4 calender-time">
                <h5>ராகுகாலம்</h5>
                <div className="calender-time-desc">
                  <div><b>காலை</b></div>
                  <time><span>6.15- 7:15</span></time>
                </div>
              </div>
              <div className="col calender-time">
                <h5>குளிகை</h5>
                <div className="calender-time-desc">
                  <div><b>காலை</b></div>
                  <time><span>6.15- 7:15</span></time>
                </div>
              </div>
              <div className="col calender-time">
                <h5>எமகண்டம்</h5>
                <div className="calender-time-desc">
                  <div><b>காலை</b></div>
                  <time><span>6.15- 7:15</span></time>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="sec-2 d-flex gap-2 justify-content-start align-items-center gap-2">
              <div className="star-cards">
                <h5>நட்சத்திரம்</h5>
                <p className="p-1 p-md-3">சுவாதி மறுநாள் அதிகாலை 4:18 மணி வரை</p>
              </div>
              <div className="star-cards">
                <h5>நட்சத்திரம்</h5>
                <p className="p-1 p-md-3">சுவாதி மறுநாள் அதிகாலை 4:18 மணி வரை</p>
              </div>
              <div className="vudhaya-section">
                <h5>இன்றைய உதய ஓரை</h5>
                <div className="horai-grid m-1 m-md-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <p className="">6.00 - 7.00</p>
                  </div>
                  <div className="horai-child d-flex justify-content-center align-items-center flex-column gap-0 text-center my-auto">
                    <span>பகல்</span>
                    <span>சந்திரன்</span>
                  </div>
                  <div className="horai-child d-flex justify-content-center align-items-center flex-column gap-0 text-center my-auto">
                    <span>இரவு</span>
                    <span>சுக்கிரன்</span>
                  </div>
                </div>
              </div>
              <div className="star-cards">
                <h5>நட்சத்திரம்</h5>
                <p className="p-1 p-md-3">சுவாதி மறுநாள் அதிகாலை 4:18 மணி வரை</p>
              </div>
              <div className="star-cards">
                <h5>நட்சத்திரம்</h5>
                <p className="p-1 p-md-3">சுவாதி மறுநாள் அதிகாலை 4:18 மணி வரை</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pagenation style start */}
      <div className="container pagenation-section p-4 my-5">
        <div className="row">
          <div className="col-12">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                  type="button" role="tab" aria-controls="nav-home" aria-selected="true">இன்றைய ராசிபலன்</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                  type="button" role="tab" aria-controls="nav-profile" aria-selected="false">வார ராசிபலன்</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                  type="button" role="tab" aria-controls="nav-contact" aria-selected="false">மாத ராசிபலன்</button>
              </div>
            </nav>
            <div className="">
              <div id='hexagon'>
                <GiAries className='Aries' />
                {/* <img src="" alt="" /> */}
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              {/* today data */}
              <div className="tab-pane py-3 fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                <h1 className='pagenation-title-1 mb-2'>11-November-2024</h1>
                <p className='pagenation-title-2 mb-2'><strong>மேஷம்:</strong></p>
                <p className='pagenation-desc mb-2'>உற்சாகமான நாளாக இருக்கும். எதிர்பார்க்கும் காரியம் சாதகமாக முடியும். மனதில் உற்சாகம் பெருக்கெடுக்கும். நண்பர்கள் வீட்டு விருந்து விசேஷங்களில் கலந்துகொள்ளும் வாய்ப்பு ஏற்படும். இளைய சகோதரர்களால் அனுகூலம் உண்டாகும். முக்கியப் பிரமுகர்களின் சந்திப்பு மகிழ்ச்சி தருவதாக இருக்கும். அலுவலகத்தில் எதிர்பார்த்த சலுகை கிடைப்பதற்கு வாய்ப்பு இருக்கிறது. வியாபாரத்தில் விற்பனையும் லாபமும் எதிர்பார்த்தபடியே இருக்கும்.</p>
                <p className='pagenation-desc mb-2'>அசுவினி நட்சத்திரத்தில் பிறந்தவர்களுக்கு வாழ்க்கைத்துணைவழி உறவினர்கள் வருகை ஆதாயம் தருவதாக இருக்கும்.
                  பரணி நட்சத்திரத்தில் பிறந்தவர்களுக்கு வீண்செலவுகளால் மனச் சஞ்சலம் ஏற்படும்.</p>
                <p className='pagenation-desc mb-2'>கிருத்திகை நட்சத்திரத்தில் பிறந்தவர்களுக்கு அரசாங்கக் காரியங்கள் அனுகூலமாக முடியும்.</p>
              </div>

              {/* week data */}
              <div className="tab-pane py-3 fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                <h1 className='pagenation-title-1 mb-2'>இந்த வார ராசிபலன் நவம்பர் 11 முதல் 17 வரை மேஷம் முதல் மீனம் வரை 12 ராசிகளுக்கான ராசிபலன் அதிர்ஷ்டக் குறிப்புகள் மற்றும் எளிய பரிகாரங்களுடன் கணித்துத் தந்திருக்கிறார் 'ஜோதிட மாமணி'கிருஷ்ணதுளசி.</h1>
                <h2 className='pagenation-title-2 mb-2'>மேஷராசி அன்பர்களே!</h2>
                <p className='pagenation-desc mb-2'>கிருத்திகை நட்சத்திரத்தில் பிறந்தவர்களுக்கு அரசாங்கக் காரியங்கள் அனுகூலமாக முடியும்.</p>
                <h1 className='pagenation-title-2 mb-2'>அதிர்ஷ்டம் தரும் நாள்கள்: 13,16</h1>
                <h1 className='pagenation-title-2 mb-2'>அதிர்ஷ்டம் தரும் எண்கள்: 4, 7</h1>
                <h1 className='pagenation-title-2 mb-2'>வழிபடவேண்டிய தெய்வம்: துர்கை</h1>
                <h1 className='pagenation-title-2 mb-2'>பரிகாரம்:  தினமும் காலையில் வீட்டு பூஜையறையில் தீபம் ஏற்றி கீழ்க்காணும் பாடலை 27 முறை பாராயணம் செய்யவும்.</h1>
                <h1 className='pagenation-title-2 mb-2'>நாயகி நான்முகி நாராயணி கை நளின பஞ்ச</h1>
                <h1 className='pagenation-title-2 mb-2'>சாயகி சாம்பவி சங்கரி சாமளை சாதி நச்சு</h1>
                <h1 className='pagenation-title-2 mb-2'>வாயகி மாலினி வாராகி சூலினி மாதங்கி என்று</h1>
                <h1 className='pagenation-title-2 mb-2'>ஆயகியாதி உடையாள் சரணம் அரண் நமக்கே</h1>

              </div>

              {/* month data */}
              <div className="tab-pane py-3 fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                <h1 className='pagenation-title-1 mb-2'>மேஷம் முதல் மீனம்</h1>
                <h2 className='pagenation-title-2 mb-2'>மேஷ ராசி அன்பர்களே!</h2>
                <h1 className='pagenation-desc mb-2'>புதிய முயற்சிகள் அனைத்தும் மிக எளிதாக வெற்றி அடையும். எதிர்பார்த்த பணவரவு கிடைப்பதுடன், எதிர்பாராத அதிர்ஷ்ட வாய்ப்புகளும் ஏற்படக்கூடும். குடும்பத்துக்குத் தேவையான பொருள்களை வாங்கி மகிழ்வீர்கள். கணவன் - மனைவிக்கிடையே அந்நியோன்யம் அதிகரிக்கும். சிலருக்குக் குழந்தை பாக்கியம் கிடைப்பதற்கான வாய்ப்பு உள்ளது. பிரிந்திருந்த கணவன் - மனைவி ஒன்று சேருவார்கள்.</h1>
                <h1 className='pagenation-desc mb-2'>புதிய முயற்சிகள் அனைத்தும் மிக எளிதாக வெற்றி அடையும். எதிர்பார்த்த பணவரவு கிடைப்பதுடன், எதிர்பாராத அதிர்ஷ்ட வாய்ப்புகளும் ஏற்படக்கூடும். குடும்பத்துக்குத் தேவையான பொருள்களை வாங்கி மகிழ்வீர்கள். கணவன் - மனைவிக்கிடையே அந்நியோன்யம் அதிகரிக்கும். சிலருக்குக் குழந்தை பாக்கியம் கிடைப்பதற்கான வாய்ப்பு உள்ளது. பிரிந்திருந்த கணவன் - மனைவி ஒன்று சேருவார்கள்.</h1>
                <h1 className='pagenation-desc mb-2'>புதிய முயற்சிகள் அனைத்தும் மிக எளிதாக வெற்றி அடையும். எதிர்பார்த்த பணவரவு கிடைப்பதுடன், எதிர்பாராத அதிர்ஷ்ட வாய்ப்புகளும் ஏற்படக்கூடும். குடும்பத்துக்குத் தேவையான பொருள்களை வாங்கி மகிழ்வீர்கள். கணவன் - மனைவிக்கிடையே அந்நியோன்யம் அதிகரிக்கும். சிலருக்குக் குழந்தை பாக்கியம் கிடைப்பதற்கான வாய்ப்பு உள்ளது. பிரிந்திருந்த கணவன் - மனைவி ஒன்று சேருவார்கள்.</h1>
                <h1 className='pagenation-desc mb-2'>புதிய முயற்சிகள் அனைத்தும் மிக எளிதாக வெற்றி அடையும். எதிர்பார்த்த பணவரவு கிடைப்பதுடன், எதிர்பாராத அதிர்ஷ்ட வாய்ப்புகளும் ஏற்படக்கூடும். குடும்பத்துக்குத் தேவையான பொருள்களை வாங்கி மகிழ்வீர்கள். கணவன் - மனைவிக்கிடையே அந்நியோன்யம் அதிகரிக்கும். சிலருக்குக் குழந்தை பாக்கியம் கிடைப்பதற்கான வாய்ப்பு உள்ளது. பிரிந்திருந்த கணவன் - மனைவி ஒன்று சேருவார்கள்.</h1>
                <h2 className='pagenation-title-2 mb-2'>அதிர்ஷ்ட நாள்கள்: அக்டோபர்: 18, 21, 25, 27, 30; நவம்பர் 6, 9, 13</h2>
                <h2 className='pagenation-title-2 mb-2'>சந்திராஷ்டம நாள்கள்: நவ 2 மாலை முதல் 3, 4, 5 காலை வரை</h2>
                <p className='pagenation-desc mb-2'>பாராயணத்துக்கு உரிய மந்திரம்: திருஞானசம்பந்தரின் கோளறு பதிகத்தைத் தினமும் பாராயணம் செய்வதன் மூலம் சிவபெருமான் அருளால் சிரமங்கள் குறையும்.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pagenation style end */}
    </>
  )
}

export default page