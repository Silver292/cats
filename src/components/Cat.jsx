import React from 'react'
import './Components.css'

export const Cat = ({ name, id, price, imageUrl, breed }) => (
  <div className='bg-gray-800 w-60 shadow-lg rounded p-2'>
    <img src={imageUrl} className='block h-48 w-full rounded' alt={name} />
    <div class='p-2'>
      <h3 class=' text-white py-1 text-base justify-center'>{name}</h3>
      <p class='text-gray-400 text-sm'>£{price}</p>
    </div>
    <div className='flex justify-between'>
      <button className='bg-white rounded p-2'>Detail</button>
      <button className='bg-blue-400 rounded p-2'>Add to basket</button>
    </div>
  </div>
)
