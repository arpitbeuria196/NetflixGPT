import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-12 pt-[20%] absolute text-white bg-gradient-to-r from-black">
      {/* Title */}
      <h1 className="text-6xl font-extrabold drop-shadow-lg mb-4">{title}</h1>

      {/* Overview */}
      <p className="py-6 text-sm w-3/4 lg:w-1/3 leading-relaxed">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex">
        {/* Play Button */}
        <button className="bg-white bg-opacity-100 text-black py-2 px-6 rounded-md text-lg font-semibold flex items-center hover:bg-opacity-40 transition duration-200">
        <FaPlay /> Play
        </button>

        <div className='px-2'>
           {/* More Info Button */}
        <button className=" bg-gray-600 bg-opacity-40 text-white py-2 px-6 rounded-md text-lg font-semibold flex items-center hover:bg-gray-300 transition duration-200">
        <IoIosInformationCircleOutline /> More Info
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default VideoTitle;
