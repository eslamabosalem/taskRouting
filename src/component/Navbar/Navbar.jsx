import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
<>
  

<nav className='bg-nav py-5  fixed  top-0 right-0 left-0  z-30'>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="Home" className="flex items-center space-x-3 rtl:space-x-reverse">
 
 <span className="self-center text-3xl  whitespace-nowrap dark:text-white text-white font-bold ">START FRAMEWORK

</span>

</a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex sm:text-black sm:px-2 lg:text-white flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      <li>
        <NavLink to="ABOUT">ABOUT</NavLink>
        </li>
        <li>
      
        <NavLink to="Portfolid">Portfolid</NavLink>
        </li>
       
      
        <li>
        <NavLink to="Contact">Contact</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>



  
  
  </>






  )
}
