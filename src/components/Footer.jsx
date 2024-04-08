import React from 'react'

const Footer = () => {

    const currentDate = new Date();
    const formattedDate = currentDate.getFullYear();

    return (
        <div className='bg-[#0a192f]'>
            <div className="px-8 py-4 flex flex-col-2 border-t-2 border-pink-600 justify-between footer-screen">
                <p className='text-pink-600'>&copy; Web23 {formattedDate}</p>
                <p className='text-pink-600'>Website by Nas Choudhury</p>
            </div>
        </div>
    )
}

export default Footer