import React from 'react'

export const Cat = ({ name, id, price, imageUrl, onDetailClick, onBasketClick }) => (
  <div className='bg-gray-800 w-64 shadow-lg rounded p-4'>
    <img src={imageUrl} className='block h-48 w-full rounded object-contain' alt={name} />
    <div className='flex items-baseline justify-between'>
      <h3 className='text-white py-2 text-xl'>{name}</h3>
      <p className='text-gray-400 text-sm'>£{price}</p>
    </div>
    <div className='flex justify-between mt-4'>
      <button className='bg-white hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 rounded' onClick={onDetailClick} >Detail</button>
      <button className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' onClick={onBasketClick}>Add to basket</button>
    </div>
  </div>
)
