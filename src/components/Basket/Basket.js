import React, { Fragment } from 'react'

export const Basket = ({
  visible,
  items,
  removeFromBasket,
  onCheckoutClick
}) => (
  <div
    className={`fixed inset-0 bg-white w-72 pl-5 pt-28 transition-transform overflow-auto ${visible ? 'translate-x-0' : '-translate-x-full'
    }`}>
    <h2 className='text-gray-600 text-xl font-bold align-center mb-10'>
      Your Basket
    </h2>

    {items.length < 1 && <p className='mt-6 text-gray-400'>Basket is empty!</p>}

    <div className='grid grid-cols-2 my-6 overflow-auto pr-5' style={{maxHeight: '33rem'}}>
      {items.map((item) => (
        <Fragment key={item.id}>
          <div className='flex items-center mb-1'>
            <img
              className='inline object-cover w-6 h-6 rounded-full mr-2'
              src={item.imageUrl}
              alt={item.name}
            />
            <p className='text-lg text-gray-800 font-medium'>{item.name}</p>
          </div>
          <p className='text-right text-gray-700 self-center'>£{item.price}</p>
          <button
            onClick={() => removeFromBasket(item)}
            className='col-start-2 text-right mt-1 text-blue-400 hover:text-blue-600 font-medium mb-3'>
            Remove
          </button>
        </Fragment>
      ))}
    </div>

    {items.length ? (
      <>
        <div className='grid grid-cols-2 my-3 pr-5'>
          <h3 className='text-gray-900 font-bold'>Total</h3>
          <h3 className='text-right text-gray-900 font-bold'>
            £
            {items
              .reduce((prev, curr) => prev + parseFloat(curr.price), 0.0)
              .toFixed(2)}
          </h3>
        </div>
        <div className='mr-5'>
          <button
            onClick={onCheckoutClick}
            className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full mt-4'>
            Checkout
          </button>
        </div>
      </>
    ) : null}
  </div>
)
