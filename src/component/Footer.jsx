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
import Link from 'next/link';
import { Modal } from 'react-bootstrap';
import { GoArrowUpRight } from "react-icons/go";

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

    const [showPrivacyModal, setShowPrivacyModal] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

    const handlePrivacyClick = () => {
        setShowPrivacyModal(true);
    };

    const handlePrivacyClose = () => {
        setShowPrivacyModal(false);
    };

    const handleTermsClick = () => {
        setShowTermsModal(true);
    };

    const handleTermsClose = () => {
        setShowTermsModal(false);
    };


    return (
        <footer className=' bottom-0 position-relative text-light footer-container py-4' style={{ fontFamily: 'arial' }}>
            <div className="mx-5">
                {/* <div className='row row-cols-1 row-cols-md-2 my-3'> */}
                <div className='d-flex flex-column flex-lg-row align-items-center my-3'>
                    <div className="border_line_about col-12  col-lg-8 col-xl-8 pe-4 py-2 text-center h-100 d-flex flex-column flex-lg-row align-items-center gap-4 pb-sm-4 pb-md-4 pb-lg-2 align-items-lg-center justify-content-center h-100">
                        {/* <div className='d-flex flex-column h-100 justify-content-between gap-3 pe-4 '> */}
                        {/* <div className='text-center h-100 d-flex flex-row align-items-center gap-3'> */}
                        {/* <h4 className='fw-bold fs-3'>
                                    மக்கள் நாட்காட்டி
                                </h4> */}
                        <div className="logo col-2">
                            <Link href='/'>
                                <img src="/images/Makkal_Naalkaati_Logo.png" alt="" />
                            </Link>
                        </div>
                        <p className='col fw-normal text-start text-dark' style={{ letterSpacing: '.8px', fontSize: '14px' }}>
                            மக்கள் நாட்காட்டி என்பது இன்றைய மக்களின் அன்றாட சிந்தனையை அறிவூட்டும் ஒரு பயன்பாடாகும். இதில் 12 ராசிகள் 27 நட்சத்திரங்கள் மற்றும் கிரகங்களின் கோணங்களை ஜோதிடத்தில் அறியலாம். பழங்காலக் கோயில்கள் அவற்றின் புராண அம்சங்களுடன் ஆன்மீகத் தகவல்களையும் கொண்டிருக்கின்றன. அன்று முதல் இன்று வரை நற்செயல்களுக்கு வழிகாட்டும் திருக்குறளின் சிறப்புகள். நவீன அறிவியலுக்கு உதவிய ஆன்மிகம் பற்றிய சித்தர்களின் போதனைகள் போன்ற சிறப்புத் தகவல்களையும் வழங்குகிறது.
                            {/* மக்கள் நாட்காட்டியில், ஜோதிடத்தில் உள்ள கிரகங்கள், புராதன கோவில்கள், அறம் கூறும் திருக்குறள்கள் , சித்தர்கள் கூறும் அறிவுரைகள் என பலவற்றைக் காணலாம். */}
                        </p>
                        {/* </div> */}


                        {/* <div className='d-none d-lg-flex text-center d-flex justify-content-between align-items-center border-2 border-top px-2'>
                                <p className='fw-bold p-0 py-2 m-0 ' style={{ color: '#ff7e00' }}>
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
                            </div> */}
                        {/* </div> */}
                    </div>
                    <div className="border_line_contact px-4 pt-2 pt-lg-0 col col-sm-6 col-lg-4 col-xl-4 d-flex d-md-flex justify-content-between mt-3 mt-lg-0">
                        {/* <div className="col d-flex"> */}
                        {/* <div className='d-none d-md-flex border-start h-100'></div> */}
                        {/* <div className='w-100 px-4 d-flex flex-column align-items-center justify-content-between gap-4'> */}
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


                        {/* <div className='d-none d-lg-flex text-center d-flex justify-content-between align-items-center px-2'> */}

                        {/* </div> */}
                    </div>
                    {/* <div className='border_line_follow col-sm-6 col-xl-3 d-flex flex flex-column flex-lg-row flex-xl-column justify-content-between px-4 mt-3 mt-lg-0 pt-2 pt-lg-0'>
                        <div className='order-2 d-flex flex-column flex-lg-row gap-0 gap-lg-4 gap-xl-0 flex-xl-column align-items-start justify-content-around'>
                            <p className='fw-bold p-0 py-2 m-0 ' style={{ color: '#ff7e00' }}>
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
                        <div className='order-1 d-flex flex-column flex-lg-row flex-xl-column gap-0 gap-lg-4 gap-xl-0 terms_privacy'>
                            <a
                                onClick={handlePrivacyClick}
                                target='_blank' className='text-wrap fw-bold p-0 text-secondary py-2 m-0'>
                                Privacy Policy
                                <span className='ps-1'>
                                <GoArrowUpRight />
                                </span>
                            </a>


                            <a
                                onClick={handleTermsClick}
                                target='_blank' className='text-wrap fw-bold p-0 py-2 m-0 text-secondary'>
                                Terms and condition
                                <span className='ps-1'>
                                <GoArrowUpRight />
                                </span>
                            </a>
                        </div>


                        <Modal show={showPrivacyModal} onHide={handlePrivacyClose} className='day_modal'
                            dialogClassName='modal-dialog modal-dialog-scrollable' centered size='xl'>
                            <Modal.Header closeButton>
                                <Modal.Title className='fs-5 fw-bold'>Privacy Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='mb-3'>
                                    <p> By downloading or using the app, these terms will automatically apply to you - you should make sure therefore that you read them carefully before using the app. You're not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You're not allowed to attempt to extract the source code of the app, and you also shouldn't try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to mpeoples Business Solution Private Limited. </p>
                                    <br />
                                    <p> At mpeoples.in, we are committed to safeguarding the privacy of our visitors. This privacy policy outlines the types of personal information collected, how it is used, and the choices you have regarding your data. </p>
                                    <br />
                                    <strong>Information We Collect:</strong>
                                    <br />
                                    <strong>1. Personal Information: </strong>
                                    <br />
                                    <p>
                                        We may collect personal information, such as your name and email address, when you voluntarily provide it for purposes such as newsletter subscriptions or user accounts.
                                    </p>
                                    <br />
                                    <strong>2. Non-Personal Information:</strong>
                                    <br />
                                    <p>
                                        We may also collect non-personal information, such as browser type, IP address, and the pages you visit on our site. This information is collected to improve the functionality and performance of our website.
                                    </p>
                                    <br />
                                    <strong>
                                        How We Use Your Information:
                                    </strong>
                                    <br />
                                    <strong>1. Personalization:</strong>
                                    <br />
                                    <p>
                                        We may use your personal information to personalize your experience on our website, such as providing tailored content and recommendations.
                                    </p>
                                    <br />
                                    <strong>2. Communication:</strong>
                                    <br />
                                    <p>
                                        With your consent, we may use your email address to send you newsletters, updates, and relevant information about our services.
                                    </p>
                                    <br />
                                    <strong> 3. Analytics: </strong>
                                    <br />
                                    <p>
                                        Non-personal information is collected for analytical purposes, helping us understand how visitors interact with our site and improve its performance.
                                    </p>
                                    <br />
                                    <strong> 4. Cookies and Tracking Technologies: </strong>
                                    <br />
                                    <p>
                                        We use cookies and similar tracking technologies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but please note that this may affect the functionality of certain features.
                                    </p>
                                    <br />
                                    <strong> 5. Third-Party Links: </strong>
                                    <br />
                                    <p>
                                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Please review the privacy policies of these sites before providing any personal information.
                                    </p>
                                    <br />
                                    <strong> 6. Your Choices:</strong>
                                    <br />
                                    <p>
                                        You have the right to opt-out of receiving promotional communications from us and can update or delete your personal information by contacting us atp2pswap786@gmail.com.
                                    </p>
                                    <br />
                                    <strong> 7. Third Party Privacy Policies </strong>
                                    <br />
                                    <p>
                                        Mpeoples Business Soluctions Pvt Ltd, Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.
                                    </p>
                                    <br />
                                    <p>
                                        These terms and conditions are effective as of 2024-07-17.
                                    </p>
                                    <br />
                                    <strong>Contact Us</strong>
                                    <br />
                                    <p>
                                        If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at mpeoplesofficial@gmail.com.
                                    </p>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <Modal show={showTermsModal} onHide={handleTermsClose} className='day_modal'
                            dialogClassName='modal-dialog modal-dialog-scrollable' centered size='xl'>
                            <Modal.Header closeButton>
                                <Modal.Title className='fs-5 fw-bold'>Terms and condition</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='mb-3'>
                                    <p> By downloading or using the app, these terms will automatically apply to you - you should make sure therefore that you read them carefully before using the app. You're not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You're not allowed to attempt to extract the source code of the app, and you also shouldn't try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to mpeoples Business Solution Private Limited.</p>
                                    <br />
                                    <p>mpeoples Business Solution Private Limited is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you're paying for. </p>
                                    <br />
                                    <p>
                                        The mpeoples app stores and processes personal data that you have provided to us, in order to provide our Service. It's your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the mpeoples app won’t work properly or at all.
                                    </p>
                                    <br />
                                    <p>
                                        The app does use third party services that declare their own Terms and Conditions.
                                    </p>
                                    <br />
                                    <p>
                                        Link to Terms and Conditions of third party service providers used by the app
                                    </p>
                                    <br />
                                    <p>Google Play Services</p>
                                    <p>
                                        You should be aware that there are certain things that mpeoples Business Solution Private Limited will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but mpeoples Business Solution Private Limited cannot take responsibility for the app not working at full functionality if you don't have access to Wi-Fi, and you don't have any of your data allowance left.
                                    </p>
                                    <br />
                                    <p>
                                        If you're using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you're accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you're using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
                                    </p>
                                    <br />
                                    <p>
                                        Along the same lines, mpeoples Business Solution Private Limited cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged - if it runs out of battery and you can't turn it on to avail the Service, mpeoples Business Solution Private Limited cannot accept responsibility.
                                    </p>
                                    <br />
                                    <p>
                                        With respect to mpeoples Business Solution Private Limiteds responsibility for your use of the app, when you're using the app, it's important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. mpeoples Business Solution Private Limited accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
                                    </p>
                                    <br />
                                    <p>
                                        At some point, we may wish to update the app. The app is currently available on Android - the requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you'll need to download the updates if you want to keep using the app. mpeoples Business Solution Private Limited does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
                                    </p>
                                    <br />
                                    <p> Changes to This Terms and Conditions </p>
                                    <p>
                                        We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
                                    </p>
                                    <br />
                                    <p>
                                        These terms and conditions are effective as of 2024-07-17.
                                    </p>
                                    <br />
                                    <p>Contact Us</p>
                                    <p>
                                        If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at mpeoplesofficial@gmail.com.
                                    </p>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div> */}


                    {/* <div className="col border-top my-4 pt-4 d-flex d-md-none justify-content-evenly">
                        <div className='d-none d-md-flex border-start h-100'></div>
                        <div className='d-flex flex-column align-items-center gap-4 ps-5'>
                            <div className='d-flex flex-column gap-3'>
                                <h3 className='fw-bold p-0 m-0'>
                                    Contact us
                                </h3>
                                <ul className='list-unstyled reachout-list d-flex flex-column gap-3 mb-0'>
                                    {reach_out.map((item, idx) => (
                                        <li className='d-flex gap-2 align-items-center' key={idx}>
                                            {item.icon}
                                            <a className='' href={item.link} target="_blank" rel="noopener noreferrer">
                                                {item.value}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className='d-flex gap-2'>
                                    <FaLocationDot className='mt-1 contact-icon' />
                                    <p className='p-0 m-0'>
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
                    </div> */}
                </div>

                <div className=' col-sm-6 col-xl-12 w-100 d-flex flex flex-column flex-sm-row  justify-content-between align-items-center px-4  border-2 border-top'>
                    <div className='order-2  d-flex flex-column flex-sm-row gap-4 gap-lg-4 gap-xl-4 align-items-center justify-content-start'>
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
                    <div className='order-1 d-flex flex-column flex-lg-row  gap-0 gap-lg-4 terms_privacy'>
                        <Link href='/about-us'  className='text-wrap fw-bold p-0 text-dark py-2 m-0' >
                            About us
                            <span className='ps-1'>
                                <GoArrowUpRight />
                            </span>
                        </Link>
                        <Link href='/privacy-policy'  className='text-wrap fw-bold p-0 text-dark py-2 m-0' >
                            Privacy policy
                            <span className='ps-1'>
                                <GoArrowUpRight />
                            </span>
                        </Link>
                        <Link href='/terms-conditions'  className='text-wrap fw-bold p-0 py-2 m-0 text-dark'>
                            Terms and condition
                            <span className='ps-1'>
                                <GoArrowUpRight />
                            </span>
                        </Link>
                    </div>


                    <Modal show={showPrivacyModal} onHide={handlePrivacyClose} className='day_modal'
                        dialogClassName='modal-dialog modal-dialog-scrollable' centered size='xl'>
                        <Modal.Header closeButton>
                            <Modal.Title className='fs-5 fw-bold'>Privacy Policy</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='mb-3'>
                                <p> By downloading or using the app, these terms will automatically apply to you - you should make sure therefore that you read them carefully before using the app. You're not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You're not allowed to attempt to extract the source code of the app, and you also shouldn't try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to mpeoples Business Solution Private Limited. </p>
                                <br />
                                <p> At mpeoples.in, we are committed to safeguarding the privacy of our visitors. This privacy policy outlines the types of personal information collected, how it is used, and the choices you have regarding your data. </p>
                                <br />
                                <strong>Information We Collect:</strong>
                                <br />
                                <strong>1. Personal Information: </strong>
                                <br />
                                <p>
                                    We may collect personal information, such as your name and email address, when you voluntarily provide it for purposes such as newsletter subscriptions or user accounts.
                                </p>
                                <br />
                                <strong>2. Non-Personal Information:</strong>
                                <br />
                                <p>
                                    We may also collect non-personal information, such as browser type, IP address, and the pages you visit on our site. This information is collected to improve the functionality and performance of our website.
                                </p>
                                <br />
                                <strong>
                                    How We Use Your Information:
                                </strong>
                                <br />
                                <strong>1. Personalization:</strong>
                                <br />
                                <p>
                                    We may use your personal information to personalize your experience on our website, such as providing tailored content and recommendations.
                                </p>
                                <br />
                                <strong>2. Communication:</strong>
                                <br />
                                <p>
                                    With your consent, we may use your email address to send you newsletters, updates, and relevant information about our services.
                                </p>
                                <br />
                                <strong> 3. Analytics: </strong>
                                <br />
                                <p>
                                    Non-personal information is collected for analytical purposes, helping us understand how visitors interact with our site and improve its performance.
                                </p>
                                <br />
                                <strong> 4. Cookies and Tracking Technologies: </strong>
                                <br />
                                <p>
                                    We use cookies and similar tracking technologies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but please note that this may affect the functionality of certain features.
                                </p>
                                <br />
                                <strong> 5. Third-Party Links: </strong>
                                <br />
                                <p>
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Please review the privacy policies of these sites before providing any personal information.
                                </p>
                                <br />
                                <strong> 6. Your Choices:</strong>
                                <br />
                                <p>
                                    You have the right to opt-out of receiving promotional communications from us and can update or delete your personal information by contacting us atp2pswap786@gmail.com.
                                </p>
                                <br />
                                <strong> 7. Third Party Privacy Policies </strong>
                                <br />
                                <p>
                                    Mpeoples Business Soluctions Pvt Ltd, Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.
                                </p>
                                <br />
                                <p>
                                    These terms and conditions are effective as of 2024-07-17.
                                </p>
                                <br />
                                <strong>Contact Us</strong>
                                <br />
                                <p>
                                    If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at mpeoplesofficial@gmail.com.
                                </p>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <Modal show={showTermsModal} onHide={handleTermsClose} className='day_modal'
                        dialogClassName='modal-dialog modal-dialog-scrollable' centered size='xl'>
                        <Modal.Header closeButton>
                            <Modal.Title className='fs-5 fw-bold'>Terms and condition</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='mb-3'>
                                <p> By downloading or using the app, these terms will automatically apply to you - you should make sure therefore that you read them carefully before using the app. You're not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You're not allowed to attempt to extract the source code of the app, and you also shouldn't try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to mpeoples Business Solution Private Limited.</p>
                                <br />
                                <p>mpeoples Business Solution Private Limited is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you're paying for. </p>
                                <br />
                                <p>
                                    The mpeoples app stores and processes personal data that you have provided to us, in order to provide our Service. It's your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the mpeoples app won’t work properly or at all.
                                </p>
                                <br />
                                <p>
                                    The app does use third party services that declare their own Terms and Conditions.
                                </p>
                                <br />
                                <p>
                                    Link to Terms and Conditions of third party service providers used by the app
                                </p>
                                <br />
                                <p>Google Play Services</p>
                                <p>
                                    You should be aware that there are certain things that mpeoples Business Solution Private Limited will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but mpeoples Business Solution Private Limited cannot take responsibility for the app not working at full functionality if you don't have access to Wi-Fi, and you don't have any of your data allowance left.
                                </p>
                                <br />
                                <p>
                                    If you're using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you're accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you're using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
                                </p>
                                <br />
                                <p>
                                    Along the same lines, mpeoples Business Solution Private Limited cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged - if it runs out of battery and you can't turn it on to avail the Service, mpeoples Business Solution Private Limited cannot accept responsibility.
                                </p>
                                <br />
                                <p>
                                    With respect to mpeoples Business Solution Private Limiteds responsibility for your use of the app, when you're using the app, it's important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. mpeoples Business Solution Private Limited accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
                                </p>
                                <br />
                                <p>
                                    At some point, we may wish to update the app. The app is currently available on Android - the requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you'll need to download the updates if you want to keep using the app. mpeoples Business Solution Private Limited does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
                                </p>
                                <br />
                                <p> Changes to This Terms and Conditions </p>
                                <p>
                                    We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
                                </p>
                                <br />
                                <p>
                                    These terms and conditions are effective as of 2024-07-17.
                                </p>
                                <br />
                                <p>Contact Us</p>
                                <p>
                                    If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at mpeoplesofficial@gmail.com.
                                </p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>

                {/* <div className='d-flex d-lg-none w-100 text-center d-flex justify-content-between align-items-center border-2 border-top px-2'>
                    <p className='fw-bold p-0 py-2 m-0' color='#ff7e00'>
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
                </div> */}
            </div>
        </footer>
    )
}

export default Footer