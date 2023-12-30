import React from 'react'
import myimg from '../assets/mahru6.jpg'

function Homee() {
  return (
    <div name="home" className=' h-screen w-full py-20  '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 h-screen w-full md:flex-row '>

        <div className='flex flex-col justify-center h-full py-10 '>
            <h2 className=' text-4xl sm:text-6xl py-10 font-bold font-[Poppins]'>
                I'm a Website Developer
            </h2>
            <p className='max-w-md px-4 '>
                I have recently done my internship from OneCrew Technologies.
                Currently, I love to work on web application using tecnologies like
                React JS, Tailwind & Firebase.
        
            </p>
            <div>
                <button className='group bg-indigo-950 text-indigo-100 w-fit px-6 py-3 my-2 flex
                items-center rounded-md cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <ion-icon name="arrow-round-forward"className="ml-1" ></ion-icon>
                    </span>
                </button>
            </div>


        </div>
        <div>
            <img src={myimg} alt="my profile" className='rounded-1xl mx-auto  md:w-full ' />
        </div>
      </div>
    </div>
  )
}

export default Homee
