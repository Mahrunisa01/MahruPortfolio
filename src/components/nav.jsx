import React, { useState } from 'react'
import Button from './button'
import {Link} from 'react-scroll'

function Nav() {
    const Links =[
        {id:"1",link:"home"},
        {id:"2",link:"about"},
        {id:"3",link:"portfolio"},
        {id:"4",link:"experience"},
        {id:"5",link:"contact"},
    ]
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md h-20 w-full fixed bg-indigo-950 '>
       <div className='flex items-center justify-between bg-white py-4 md:px-10  '>
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
          text-gray-800 '>
            <span className='text-3xl text-indigo-600 mr-1 pt-2 text-indigo-950 '>
            <ion-icon name="person"></ion-icon>

            </span >
            Mahrunisa
          </div>


          <div onClick={()=>setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden '>
          <ion-icon name={open ? 'close': "menu"}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto x-[-1]
          left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 font-[Poppins] 
          ease-in ${open ? 'top-20':'top-[-490px]'}`}>
          {/* <ul className='hidden md:flex  '> */}
            
          {
            Links.map(({link, id})=>(
                // <li key={link.name} className='md:ml-8 text-xl
                // md:my-0 my-7'>
                // //     {/* <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a> */}
                // // <Link to={link.name} smooth duration={500}>{link}</Link>
                
                // // </li>

                <li  key={id} className='px-4 cursor-pointer capitalize font-medium
                hover:scale-105 duration-200 text-gray-800 text-2xl  text-indigo-950'>
                    
                    <Link
                    onClick={() => setOpen(!open)}
                     to={link} smooth duration={500}>{link}</Link>
                    
                
                </li>

            )

            )
          }
          {/* <Button>
            Get Started
          </Button> */}
            
          </ul>
       </div>
</div>
  )
}

export default Nav
