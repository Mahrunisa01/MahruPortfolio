import React from 'react'

function About() {
  return (
    <div
    name="about"  className='w-full h-screen mt-20 '
    >
        <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'>
            <div pb-8 >
            <p
            className='text-4xl font-bold inline border-b-4 border-gray-500 font-[Poppins] '
            >About</p>
        </div>
        <p className='text-xl mt-20'>
            My name is Mahrunisa. I've done my bachelor degree in Information Technology from Superior University, LHR. While doing my degree i got interest in Web Development.
            Then i started to develop my skills in Web Development. First I started develop my skills in  HTML & CSS. Then i shifted to React.js & Tailwind CSS. For this I started internship to learn more .

        </p>
        <br />

        <p className='text-xl mt-15'>
            I want to continue my career as Web Development. At first it was really demanding to understand the react but with the time it become really easy and now 
            i can develop whole website using react & tailwind. I love to design websites & love to work with color schemes.
        </p>
      
        </div>
    </div>
  )
}

export default About
