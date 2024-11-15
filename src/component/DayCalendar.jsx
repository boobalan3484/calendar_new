'use client'
import React, { useState, useEffect } from 'react';
import "@/style/dayPageStyle.css";
import "@/style/pagenationStyle.css";
import PlayStoreBanner from './PlayStoreBanner';
import DayCard from './DayCard';
import Spinner from '../../public/icon/Spinner';

const DayCalendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [dayData, setDayData] = useState(null);
    const [loading, setLoading] = useState(false);

    const [isThithi, setIsThithi] = useState([])
    // const [isFestival, setIsFestival] = useState('')
    // const [isAuspicious, setIsAuspicious] = useState('')
    // const [isMuhurtham, setIsMuhurtham] = useState(null)

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

    if (!dayData) {
        return <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}> <Spinner /> </div>; // Show loading indicator while data is being fetched
    }

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

                <div className='row justify-content-center gap-4'>
                    {dayData && (
                        <DayCard
                            formatDate={formatDate(currentDate)}
                            dayData={dayData}
                            isThithi={isThithi}
                            // auspiciousDays={auspiciousDays}
                            handlePreviousDay={handlePreviousDay}
                            handleNextDay={handleNextDay}
                        />
                    )}
                    <div className='col-12 col-lg-2 bg-white shadow-sm rounded text-dark'>
                        <PlayStoreBanner />
                    </div>
                </div>


            </div >

            <div>

            </div>
        </>
    )
}

export default DayCalendar