import React from 'react'
import gogo from "../../assets/avataaars.svg"
export default function Home() {
  return (
   <>
   
   
  <div className="bg-body  py-40 ">

  <div className=" container m-auto text-white">
    <div className="flex justify-center items-center text-center">
    <img src={gogo} alt="" className='w-52' />
    </div>
        <div className="About-size m-auto">
          <h2 className='text-4xl font-bold text-center py-5'>ABOUT COMPONENT</h2>
          <div className=" flex justify-center items-center text-center my-3">
          <div className="size-thank "></div>
          <i className=' text-white fa-solid fa-star mx-3'></i>
          <div className="size-thank"></div>
          </div>
          </div>
    

   </div>
   <h4 className='text-center text-white '>Graphic Artist - Web Designer - Illustrator</h4>
   </div>
   </>
  )
}
