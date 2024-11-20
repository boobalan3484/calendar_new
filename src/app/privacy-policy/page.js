import React from 'react'
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import PrivacyPolicy from '@/component/PrivacyPolicy';
import '@/style/CalendarSection.css'

export const metadata = {
    title: "Makkal Calendar | Privacy policy",
    // description: "Creote | Business Landing Page",
};

const page = () => {
    return (
        <div>
            <Header />
            <main className={`d-flex h-100 justify-content-center align-items-center my-2`}>
                <div className='container-xl'>
                    <PrivacyPolicy />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default page