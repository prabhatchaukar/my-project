import React from 'react'

const CardOne = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <a href="#" className="block p-6 max-w-sm bg-white border  border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold dark:text-white text-gray-900 tracking-tight">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal tracking-tight text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </a>
    </div>
  )
}

export default CardOne
