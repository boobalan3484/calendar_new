import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import DayCard from './DayCard';
import '@/style/Modal.css'
const DayModal = ({ showModal, selectedDate,humanFormatDate, handleClose }) => {

    const [dayData, setDayData] = useState(null);
    const [loading, setLoading] = useState(false);

    const [isThithi, setIsThithi] = useState([])

    useEffect(() => {
        async function fetchSingleData(date) {
            setLoading(true);
            try {
                // const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
                const response = await fetch(`/data/days/${selectedDate}-Home.json`);
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
        fetchSingleData(selectedDate);
    }, [selectedDate]);

    const transformImages = (items) => {
        const imagesArray = items.split(',')
            .map(imageName => imageName.trim())
            .filter(imageName => imageName !== '');
        return imagesArray
    }

    return (
        <Modal show={showModal} onHide={handleClose} className='day_modal' centered>
            <Modal.Header closeButton>
                <Modal.Title className='fs-5 fw-bold'>இன்றைய நாள்</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DayCard
                    formatDate={humanFormatDate}
                    dayData={dayData}
                    isThithi={isThithi}
                />
            </Modal.Body>
        </Modal>
    )
}

export default DayModal