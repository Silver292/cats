import React from 'react'

import './Modal.css'

export const Modal = ({ cat, onCloseClick }) => (
  <>
    <div className='modal-wrapper' onClick={onCloseClick}>
    </div>
    <div className='modal-content p-4 rounded'>
      <svg onClick={onCloseClick} xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 b-2 rounded-full p-2 self-end border shadow' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
      </svg>
      <img className='h-1/3 self-center rounded mb-8' src={cat.imageUrl} alt={cat.name} />
      <Item label={'Name'} value={cat.name} />
      <Item label={'Location'} value={cat.location} />
      <Item label={'Price'} value={`£${cat.price}`} />
      <Item label={'Description'} value={cat.description} />
      <Item label={'Breed'} value={cat.breed} />
    </div>
  </>
)


const Item = ({ label, value }) => (
  <div className='bg-white mx-32 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
    <dt className='text-sm font-medium text-gray-500'>{label}</dt>
    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{value}</dd>
  </div>
)