'use client'
import React, { useState } from "react";
import axios from "@/config/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "@/style/AstroConsultForm.css"
import { useRouter } from 'next/navigation';

// import './courseRegister.css'
// import animationData from "../../public/planet.json";
// import Lottie from "react-lottie";

// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice",
//     },
// };

const AstroConsultForm = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        message: "",
        type: "consultAstro",
        gender: "",
        dob: "",
        tob: "",
        state: "",
        city: "",
        address: "",
    });

    const contentData = {
        // imgSrc: "/images/icon/icon_60.svg",
        title: "கோரப்பட்ட விவரங்களுடன் படிவத்தைப் பூர்த்தி செய்யவும்.",
        title2: "நீங்கள் எதைத் தேட விரும்புகிறீர்கள் என்பதை எங்கள் ஜோதிடரால் அறிய முடியும்.",
        subtitle: "அடுத்த 24 மணி நேரத்தில் நாங்கள் உங்களுக்கு பதிலளிப்போம்!",
        // urgent: "Reach out",
        // phone: "+919487812715",
    };

    const option_gender = [
        { value: "male", display: "Male" },
        { value: "female", display: "Female" },
        { value: "other", display: "Other" },
    ];

    const [errors, setErrors] = useState({
        fullName: "",
        mobile: "",
        message: "",
        type: "consultAstro",
        gender: "",
        dob: "",
        tob: "",
        state: "",
        city: "",
        address: "",
    })

    const validateInput = (name, value) => {
        if (!value) {
            return 'required';
        } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'enter a valid email address';
        }
        else if (name === 'fullName' && !/^[A-Za-z.,\s]+$/.test(value)) {
            return 'only enter alphabet characters';
        }
        // else if (name === 'lastName' && !/^[A-Za-z.,\s]+$/.test(value)) {
        //     return 'only enter alphabet characters';
        // }
        // else if (name === 'degreeName' && !/^[A-Za-z.,\s]+$/.test(value)) {
        //     return 'only enter alphabet characters';
        // }
        else {
            return '';
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const error = validateInput(name, value);
        setErrors({
            ...errors,
            [name]: error,
        });

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleMobileChange = (e) => {
        const { value } = e.target;
        const mobileRegex = /^[6-9]\d{9}$/;

        if (/^\d*$/.test(value) && value.length <= 10) {
            setFormData({
                ...formData,
                mobile: value,
            });
        }
        if (mobileRegex.test(value)) {
            setErrors({
                ...errors,
                mobile: '',
            });
        } else if (value.length === 10) {
            setErrors({
                ...errors,
                mobile: 'Invalid mobile number format',
            });
        } else if (!value) {
            setErrors({
                ...errors,
                mobile: 'required',
            });
        }
        else {
            setErrors({
                ...errors,
                mobile: 'only enter numeric values',
            });
        }
    }

    const validateChanges = (name, value) => {
        if (!value) {
            return '*required';
        }
        else {
            return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const error = validateChanges(name, value);
        setErrors({
            ...errors,
            [name]: error,
        });
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateDate = (date) => {
        if (!date && !date.length < 0) {
            return '*required';
        }
        const currentDate = new Date();
        const inputDate = new Date(date);

        if (isNaN(inputDate.getTime())) {
            return 'Invalid date format';
        } else if (inputDate >= currentDate) {
            return 'Date cannot be in the future';
        }
        return '';

        // const inputDate = new Date(date);
        // const year = inputDate.getFullYear();
        // if (isNaN(inputDate.getTime())) {
        //     return 'Invalid date format';
        // } else if (year < 1960 || year > 2022) {
        //     return 'Date must be between 1960 and 2022';
        // }
    };

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        const error = validateDate(value);
        setErrors({
            ...errors,
            [name]: error,
        });
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleBlur = (event) => {
        const { value, name } = event.target;
        if (value) {
            const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
            setFormData(prevValues => ({
                ...prevValues,
                [name]: capitalizedValue
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            let response = await axios.post("/contact", formData);
            toast.success(response.data.message);
            setFormData({
                fullName: "",
                mobile: "",
                message: "",
                type: "consultAstro",
                gender: "",
                dob: "",
                tob: "",
                state: "",
                city: "",
                address: "",
            })
            setTimeout(() => {
                router.push('/'); // Navigate to dashboard
            }, 2000);
        }
        catch (error) {
            toast.error('There was an error sending the message');
        }
    }

    return (
        <div className="fancy-feature-twentyTwo position-relative my-4 py-4">
            <div className="fancy-short-banner-eight">
                <div className="container">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col-lg-5 d-flex flex-column justify-content-center h-100 px-4 illustration-bg" data-aos="fade-right">
                            {/* <div className="order-1 order-lg-0  justify-content-center ">
                                <img
                                    src="../../images/icon/enroll-form-illustration.png"
                                    alt="student detail Image"
                                    className="img-illustration"
                                />
                            </div> */}
                            {/* <img
                                src="/images/planet.svg"
                                alt="student detail Image"
                                className="img-illustration"
                            /> */}

                            <div className="d-flex flex-column w-100 justify-content-center align-items-center">
                                {/* <Lottie
                                    animationData={animationData}
                                    className="d-flex justify-content-center align-items-center"
                                    loop={true}
                                /> */}
                                {/* <Lottie options={defaultOptions} height={400} width={400} />; */}

                            </div>

                            <div className="title-style-one mt-35 mb-md-30 mb-20 order-0 order-lg-1 ">
                                <h2 className="fs-4 fw-semibold tx-dark bamini_tamil_19">
                                    {contentData.title}
                                </h2>
                                <h2 className="fs-4 fw-semibold tx-dark bamini_tamil_19">
                                    {contentData.title2}
                                </h2>
                            </div>

                            <p className="tx-dark mb-55 fs-6 lg-mb-30 order-lg-2 subText d-none d-lg-block">
                                {contentData.subtitle}
                            </p>

                            {/* <div className=" gap-3 align-items-start d-none d-lg-flex order-lg-3">
                                <img
                                    src={contentData.imgSrc}
                                    alt="img"
                                    className="lazy-img img-reach"
                                />
                                <div className="call-btn">
                                    <div className="fw-500 fs-18 ur-text mb-5">
                                        {contentData.urgent}
                                        <a
                                            href={"tel:" + contentData.phone}
                                            className="px-2 fs-6 tran3s text-secondary reachOut">
                                            {contentData.phone}
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="col-xl-6 col-lg-6 ms-auto " data-aos="fade-left">
                            <div className="form-bg-wrapper position-relative rounded bg-white p-4 md-mt-10 shadow-sm">
                                <div className="form-style-two pb-3">
                                    <form onSubmit={handleSubmit}>
                                        <div className="messages" />
                                        <div className="controls">

                                            <div className="row my-1 row-cols-1 row-cols-sm-2">
                                                <div className="col my-1">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            id="fullName"
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleInputChange}
                                                            onBlur={handleBlur}
                                                            data-error="Name is required."
                                                            maxLength="25"
                                                            required
                                                        />
                                                        <label htmlFor="fullName">Name</label>
                                                    </div>
                                                    <div>
                                                        {errors.fullName && <p style={{ fontSize: '12px', color: 'red' }}>{errors.fullName}</p>}
                                                    </div>
                                                </div>

                                                {/* <div className="col my-1">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            id="nameInput2"
                                                            name="lastName"
                                                            value={formData.lastName}
                                                            onChange={handleInputChange}
                                                            onBlur={handleBlur}
                                                            data-error="Lastname is required."
                                                            maxLength="25"
                                                            required
                                                        />
                                                        <label htmlFor="nameInput2">Last Name</label>
                                                    </div>
                                                    <div>
                                                        {errors.lastName && <p style={{ fontSize: '12px', color: 'red' }}>{errors.lastName}</p>}
                                                    </div>
                                                </div> */}

                                                {/* <div className="col my-1">
                                                    <div className="input-group">
                                                        <input
                                                            type="email"
                                                            id="mailInput"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            autoComplete="email"
                                                            placeholder=" "
                                                            maxLength="32"
                                                            required
                                                        />
                                                        <label htmlFor="mailInput">E-mail Address</label>
                                                    </div>
                                                    <div>
                                                        {errors.email && <p style={{ fontSize: '12px', color: 'red' }}>{errors.email}</p>}
                                                    </div>
                                                </div> */}

                                                <div className="col my-1">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            name='mobile'
                                                            id="mobileInput"
                                                            value={formData.mobile}
                                                            onChange={handleMobileChange}
                                                            maxLength="10"
                                                            autoComplete="off"
                                                            required
                                                        />
                                                        <label htmlFor="mobileInput">Mobile Number</label>
                                                    </div>
                                                    <div>
                                                        {errors.mobile && <p style={{ fontSize: '12px', color: 'red' }}>{errors.mobile}</p>}
                                                    </div>
                                                </div>

                                                <div className="col my-1">
                                                    <div className="input-group">
                                                        <input
                                                            type="date"
                                                            id="dateInput"
                                                            name="dob"
                                                            value={formData.dob}
                                                            onChange={handleDateChange}
                                                            autoComplete="off"
                                                            required
                                                        />
                                                        <label htmlFor="dateInput">Date of Birth</label>
                                                    </div>
                                                    <div>
                                                        {errors.dob && <p style={{ fontSize: '12px', color: 'red' }}> {errors.dob}</p>}
                                                    </div>
                                                </div>

                                                <div className="col my-1">
                                                    <div className="input-group">
                                                        <input
                                                            type="time"
                                                            id="timeInput"
                                                            name="tob"
                                                            value={formData.tob}
                                                            onChange={handleChange}
                                                            autoComplete="off"
                                                            required
                                                        />
                                                        <label htmlFor="timeInput">Time of Birth</label>
                                                    </div>
                                                    <div>
                                                        {errors.tob && <p style={{ fontSize: '12px', color: 'red' }}> {errors.tob}</p>}
                                                    </div>
                                                </div>

                                                <div className="col my-1">
                                                    <div className="input-group">
                                                        <select
                                                            name="gender"
                                                            id="genderSelect"
                                                            value={formData.gender}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="" disabled> </option>
                                                            {option_gender.map((option, idx) => (
                                                                <option key={idx} value={option.value}>
                                                                    {option.display}
                                                                </option>))}
                                                        </select>
                                                        <label htmlFor="genderSelect">Gender</label>
                                                    </div>
                                                    <div>
                                                        {errors.gender && <p style={{ fontSize: '12px', color: 'red' }}> {errors.gender}</p>}
                                                    </div>
                                                </div>

                                                {/* 
                                                <div className="col my-1">
                                                    <div className="input-group">
                                                        <select
                                                            name="marital"
                                                            id="maritalSelect"
                                                            value={formData.marital}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="" disabled> </option>
                                                            {option_degree.map((option, idx) => (
                                                                <option key={idx} value={option.value}>
                                                                    {option.display}
                                                                </option>))}
                                                        </select>
                                                        <label htmlFor="maritalSelect">Marital status</label>
                                                    </div>
                                                    <div>
                                                        {errors.marital && <p style={{ fontSize: '12px', color: 'red' }}> {errors.marital}</p>}
                                                    </div>
                                                </div> */}

                                            </div>

                                            <div className="col my-2">
                                                <div className="text-group">
                                                    <textarea
                                                        id="addressInput"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        onBlur={handleBlur}
                                                        // autoComplete="address"
                                                        maxLength="100"
                                                        required
                                                    />
                                                    <label htmlFor="addressInput">Residential Address</label>
                                                </div>
                                                <div>
                                                    {errors.address && <p style={{ fontSize: '12px', color: 'red' }}>{errors.address}</p>}
                                                </div>
                                            </div>

                                            <div className="row my-1 row-cols-1 row-cols-sm-2">
                                                <div className="col">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            id="stateInput"
                                                            name="state"
                                                            value={formData.state}
                                                            onChange={handleInputChange}
                                                            onBlur={handleBlur}
                                                            placeholder=" "
                                                            data-error="State is required."
                                                            maxLength="50"
                                                            required
                                                        />
                                                        <label htmlFor="stateInput">State</label>
                                                    </div>
                                                    <div>
                                                        {errors.state && <p style={{ fontSize: '12px', color: 'red' }}>{errors.state}</p>}
                                                    </div>

                                                </div>

                                                <div className="col">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            id="cityInput"
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={handleInputChange}
                                                            onBlur={handleBlur}
                                                            placeholder=" "
                                                            maxLength="15"
                                                            data-error="City is required."
                                                            required
                                                        />
                                                        <label htmlFor="cityInput">City</label>
                                                    </div>
                                                    <div>
                                                        {errors.city && <p style={{ fontSize: '12px', color: 'red' }}>{errors.city}</p>}
                                                    </div>
                                                </div>

                                            </div>



                                            <div className="col my-3">
                                                <div className="text-group">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        maxLength="180"
                                                        required
                                                    />
                                                    <label htmlFor="message">Message</label>
                                                </div>
                                                <div>
                                                    {errors.message && <p style={{ fontSize: '12px', color: 'red' }}>{errors.message}</p>}
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center align-items-center ">
                                                <button
                                                    type="submit"
                                                    className="btn-send px-4 rounded mx-auto fw-bold fs-6 tran3s text-uppercase">
                                                    SEND MESSAGE
                                                </button>
                                            </div>
                                        </div>

                                        {/* <div className="fs-6 text-center mt-25">
                                            <span className="opacity-75">Been here before? </span>
                                            <a href="#" className="tx-dark fw-medium">
                                                Check your query
                                            </a>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="d-lg-none mt-4 px-4">
                            <p className="tx-dark mb-55 lg-mb-30 order-lg-2 subText">
                                {contentData.subtitle}
                            </p>

                            <div className="d-flex gap-3 align-items-start order-4 order-md-4 ">
                                <img
                                    src={contentData.imgSrc}
                                    alt="img"
                                    className="lazy-img img-reach"
                                />
                                <div className="call-btn">
                                    <div className="fw-500 fs-18 ur-text mb-5">
                                        {contentData.urgent}
                                        <a
                                            href={"tel:" + contentData.phone}
                                            className="px-2 fs-6 tran3s  reachOut"
                                        >
                                            {contentData.phone}
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="bottom-right" // Position toast at the bottom right
                    autoClose={5000} // Duration to show toast
                    hideProgressBar={false} // Show progress bar
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </div >
        </div >
    )
}

export default AstroConsultForm