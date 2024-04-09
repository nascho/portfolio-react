import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className='text-4xl font-bold'>
                    <p>Hi, I'm Nas, nice to meet you. Please take a look around.</p>
                </div>
                <div className='text-justify'>
                    <p> 
                        As an enthusiastic and dedicated software developer in both Python / WagtailCMS and JavaScript / NodeJS, I bring a positive attitude, a desire for learning, and a strong sense of discipline to every project. I am seeking opportunities to continuously expand my skill set while embracing diverse perspectives. I am passionate about contributing my expertise to a company that prioritises and advocates for a culture of diversity and inclusivity.
                    </p>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default About