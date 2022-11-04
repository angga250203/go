import {useRef}from 'react'
import { useRouter } from 'next/dist/client/router'
import { BsXLg } from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import Headeroption from './headeroption';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className='sticky top-0 bg-white'>
   <div className='flex w-full p-6 items-center'>
      
             <h1  onClick={() => router.push("/")}
                 className='cursor-pointer  text-2xl lg:text-3xl font-semibold text-blue-600'>Go<span className='text-green-500'>blo<span className='font-serif '>g</span></span></h1>
    
             <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                    <input ref={searchInputRef } type='text' className='flex-grow w-full focus:outline-none' />
                     <BsXLg className='sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                    onClick={() => ( searchInputRef.current.value = "")}/>
                    <BsSearch className='mr-3 text-blue-500 hidden sm:inline-flex border-l-2 pl-3  w-9 border-gray-300  '/>
                   <button hidden type='submit' onClick={search}>search</button>
             </form>
        
   </div>
   <Headeroption/>
   </header>

  )
}

export default Header