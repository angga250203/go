import React from 'react';
import { AiOutlineMore } from "react-icons/ai";
import { BsImage, BsSearch } from "react-icons/bs";
import Headeroptions from './headeroptions';

function Headeroption() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52
    border-b-[1px]'>
        {/* right */}
        <div className='flex space-x-6'>
            <Headeroptions Icon={BsSearch} title="All" selected/>
            <Headeroptions Icon={BsImage} title="Images" />
            <Headeroptions Icon={AiOutlineMore} title="more" />
        </div>



        {/* right */}
    


    </div>
  )
}

export default Headeroption