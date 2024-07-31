import React from 'react'
import { LiaFacebook } from "react-icons/lia";

export default function Footer() {
  return (
  <>
  <div className=" bg-nav py-28 text-center   ">
  <div className="container m-auto  mt-5">
        <div className="  m-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    
<div className="">
  <h3 className='text-white text-2xl font-bold my-3 '>LOCATION</h3>
  <p className='text-white'>2215 John Daniel Drive</p>
  <p className='text-white'>Clark, MO 65243</p>
</div>
<div className="  " >
  <h3 className=' text-white text-2xl font-bold my-3 '>AROUND THE WEB</h3>
  <div className="icon   text-center">
  <i className="fa-brands fa-facebook mx-1 mb-2"></i>
  <i className="fa-brands fa-twitter  mx-1 mb-2"></i>
  <i className="fa-brands fa-linkedin  mx-1 mb-2"></i>
  <i className='fa-solid fa-globe  mx-1 mb-2'></i>

  </div>
  
</div>
<div className=" "  >
  <h3 className=" text-white text-2xl font-bold  my-3">ABOUT FREELANCER</h3>
  <p className="text-white">Freelance is a free to use, licensed Bootstrap theme created by Route</p>

</div>
</div>
</div>
</div>
  <div className="text-sm text-white  bg-slate-800 text-center py-7">Copyright © Your Website 2021</div>


  </>
  )
}
