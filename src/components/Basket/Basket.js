import React from 'react'

export const Basket = ({ visible, items, removeFromBasket }) => (
  <div
    className={`fixed inset-0 bg-white w-56 p-3 pt-28 transition-transform overflow-auto ${
      visible ? 'translate-x-0' : '-translate-x-full'
    }`}>
    <h2 className='text-gray-600 text-xl font-bold align-center mb-10'>
      Your Basket
    </h2>

    {items.length < 1 && <p className='mt-6 text-gray-400'>Basket is empty!</p>}

    {items.map((item) => (
      <div key={item.id} className='grid grid-cols-2 my-6'>
        <div className='flex items-center'>
          <img
            className='inline object-cover w-6 h-6 rounded-full mr-2'
            src={item.imageUrl}
            alt={item.name}
          />
          <p className='text-lg text-gray-800 font-medium'>{item.name}</p>
        </div>
        <p className='text-right text-gray-700 self-center'>£{item.price}</p>
        <BinIcon onClick={() => removeFromBasket(item)} />
      </div>
    ))}

    {items.length ? (
      <div className='grid grid-cols-2 my-3'>
        <h3 className='text-gray-900 font-bold'>Total</h3>
        <h3 className='text-right text-gray-900 font-bold'>
          £
          {items
            .reduce((prev, curr) => prev + parseFloat(curr.price), 0.0)
            .toFixed(2)}
        </h3>
      </div>
    ) : null}
  </div>
)

const BinIcon = ({ onClick }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 col-start-2 text-red-600 border border-red-300 rounded justify-self-end mt-2'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    onClick={onClick}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
    />
  </svg>
)
