import React from 'react'

function ContactUs() {
  return (
    <div name='contact' className='w-full h-screen '>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg 
        mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-[Poppins]'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form 
                action="https://getform.io/f/ce6db368-1117-4099-b59c-8beb7e81d69b" 
                method='POST' className='flex flex-col w-full md:w-1/2 '>
                    <input type="text"
                     name='name'
                      placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
                    <input type="text"
                     name='email'
                      placeholder='Enter your email'
                    className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
                   <textarea name="message" 
                   placeholder='Your Message here'
                    rows="10 "
                    className='p-2 bg-transparent border-2 rounded-md
                    focus:outline-none'></textarea>

                    <button className='bg-indigo-950 px-6 py-3
                    my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-indigo-100'>Let's talk</button>
               
                </form>

                

            </div>
        </div>
        <footer className='justify-center items-center flex bg-indigo-950 text-indigo-100'>
      <p>&copy; 2023 Mahrunisa Portfolio. All rights reserved.</p>
      {/* Add additional footer content, links, or other elements here */}
    </footer>
      
    </div>
  )
}

export default ContactUs
