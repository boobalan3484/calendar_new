import React from 'react'
import LineSVG from '../../public/icon/LineSVG'

const PageTitle = ({ title }) => {
    return (
        <div className='text-center pb-4'>
            <div className='position-relative'>
                <h1 className='fw-bold'>
                    {title}
                </h1>
                <div className='position-absolute start-0 end-0' style={{ bottom: '-40%' }}>
                    <LineSVG />
                </div>
            </div>
        </div>
    )
}

export default PageTitle