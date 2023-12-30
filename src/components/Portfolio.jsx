import React from 'react'
import FirebaseAuthentication from '../assets/Portfolio/FirebaseAuthentication.PNG'
import NewYearCard from '../assets/Portfolio/NewYearCard.PNG'
import form from '../assets/Portfolio/form.jpg'
import Dashboard from '../assets/Portfolio/Dashboard.PNG'


function Portfolio() {

    const portfolios =[
        {
            id:1,
            src:Dashboard,
            
        },
        {
            id:2,
            src:FirebaseAuthentication,
            
        },
        {
            id:3,
            src:NewYearCard,
            
        },
        {
            id:4,
            src:form,
            
        },
    ]
  return (
    <div name="portfolio"
     >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-[Poppins]
            '>Portfolio</p>
            <p className='py-6'>Check out some work right here.</p>
        </div>



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0'>
             {
            portfolios.map(({id,src,name}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" 
                className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                   <button  className='w-1/2 px-6 py-3 m-4 text-1xl duration-200 
                   hover:scale-105 cursor-pointer'>Demo</button>
                </div>

            </div>

            ))
        }
          


        </div>
        </div>
    </div>
  )
}

export default Portfolio
