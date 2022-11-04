import React from 'react'
import { GoGlobe } from "react-icons/go";

function Footer() {
  return (
    <footer className='grid w-full bg-gray-100 text-gray-500'>
        <div className='px-8 py-3'>
             <p>indonesia</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense'>
            <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 grid-flow'>
               <GoGlobe className='text-green-400'/> Angga bimantoro since 2003
            </div>
            <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
                <p>about</p>
                <p>Home</p>
                <p>Contact</p>
            </div>
            <div className='flex justify-center space-x-8 md:ml-auto'>
                <p>Privacy</p>
                <p>Term</p>
                <p>Setting</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer