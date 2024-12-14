import React from 'react'
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import '@/style/CalendarSection.css'

import AstroConsultForm from '@/component/AstroConsultForm';

export const metadata = {
    title: "Makkal Calendar | Terms and conditions",
    // description: "Creote | Business Landing Page",
};

const Page = () => {
    return (
        <div>
            <Header />
            <main className={`d-flex h-100 justify-content-center align-items-center my-2`}>
                <div className='container-xl'>
                    <AstroConsultForm />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Page