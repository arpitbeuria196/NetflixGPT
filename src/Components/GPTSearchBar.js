import React from 'react';
import { useSelector } from 'react-redux';
import languageConstants from '../Utils/languageConstants';

const GPTSearchBar = () => {
    const langSelector = useSelector((store)=>store.config.lang);
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
      <form className='w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg flex p-4'>
        <input
          type='text'
          className='flex-grow p-4 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400'
          placeholder={languageConstants[langSelector]?.gptPlaceHolder}
        />
        <button className='bg-red-600 text-white px-8 py-4 rounded-r-lg hover:bg-red-700 transition duration-300'>
          {languageConstants[langSelector].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
