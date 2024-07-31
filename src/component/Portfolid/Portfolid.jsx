




import React from "react";

import imgOne from "../../assets/poert1 (1).png";
import imgTwo from "../../assets/port2 (1).png";
import imgThree from "../../assets/port3 (1).png";
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function Portfolio() {
  const [layer, setLayer] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  function openLayer(imgSrc) {
    setCurrentImage(imgSrc);
    setLayer(true);
  }

  function closeLayer() {
    setLayer(false);
    setCurrentImage('');
  }

  return (
    <div className=" py-20 ">
      <h2 className='text-4xl font-bold text-center py-1 bg-contaxt mt-9'>PORTFOLIO COMPONENT</h2>
    
    <div className=" flex justify-center items-center text-center my-3">
    <div className=" flex justify-center items-center text-center my-3 ">
<div className="sttyle-pro"></div>
      <i className=' color-parfold fa-solid fa-star mx-3'></i>
      <div className="sttyle-pro"></div>

   </div>
   </div>
      <div className="container mx-auto mt-5">
        <div className="w-10/12 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div onClick={() => openLayer(imgOne)} className="group/one transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgOne} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/one:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgTwo)} className="group/two transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgTwo} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/two:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgThree)} className="group/three transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgThree} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/three:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgOne)} className="group/four transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgOne} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/four:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgTwo)} className="group/five transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgTwo} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/five:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
          <div onClick={() => openLayer(imgThree)} className="group/six transition-all duration-700 relative rounded-lg overflow-hidden">
            <img src={imgThree} alt="" className="block" />
            <div className="layer bg-teal-400 opacity-0 group-hover/six:opacity-60 z-20 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <HiOutlinePlus className="text-8xl text-white"/>
            </div>
          </div>
        </div>
      </div>
      {layer && (
        <div className="layerWithImg">
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-100 opacity-30">
            {/* Parent div with opacity */}
          </div>
          <div onClick={closeLayer} className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20">
            {/* Image wrapper div */}
            <img src={currentImage} alt="" className="block w-2/5 z-40" />
          </div>
        </div>
      )}
    </div>
  );
}