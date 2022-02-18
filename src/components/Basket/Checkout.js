import React from 'react'
import { Fragment } from 'react'

import { Modal } from '../Modal'

export const Checkout = ({ basket, onCloseClick, onRemoveClick }) => {
  const total = basket
    .reduce((prev, curr) => prev + parseFloat(curr.price), 0.0)
    .toFixed(2)

  return (
    <Modal onCloseClick={onCloseClick}>
      <h1 className='font-bold text-xl tracking-wide uppercase text-slate-800 px-3'>
        Checkout
      </h1>

      <div className='flex'>
        <div className='w-1/2 rounded-l px-3'>
          <button className='bg-black hover:bg-gray-900 text-white font-thin py-2 px-4 rounded w-full mt-4 flex justify-center py-3'>
            <ApplePayIcon />
          </button>
          <div className='flex items-center justify-center my-5'>
            <hr className='flex-1 text-slate-500' />
            <p className='mx-3 text-slate-500'>or</p>
            <hr className='flex-1 text-slate-500' />
          </div>
          <form className='grid grid-cols-1'>
            <FieldSet text='Email address' id='email' type='email' />
            <FieldSet text='Name on card' id='name' />
            <FieldSet
              text='Card number'
              id='card-number'
              type='tel'
              inputmode='numeric'
              pattern='[0-9\s]{13,19}'
            />
            <div className='flex justify-between items-center'>
              <FieldSet
                text='Expiration date'
                id='expiration-date'
                type='date'
              />
              <FieldSet text='CVC' id='cvc' type='number' />
            </div>
            <FieldSet text='Address' id='address' />
            <div className='flex justify-between items-center'>
              <FieldSet text='City' id='city' />
              <FieldSet text='Post Code' id='post-code' />
            </div>
          </form>
          <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4'>
            Pay £{total}
          </button>
        </div>

        <div className='bg-gray-50 p-4 w-1/2 rounded-r'>
          <div className='grid grid-col-2 gap-10 mb-6'>
            {basket.map((item) => (
              <Fragment key={item.id}>
                <img
                  className='w-32 max-h-32'
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className='col-start-2 flex justify-between flex-col'>
                  <div className='flex flex-col'>
                    <h2 className='text-black text-xl font-medium mb-2'>
                      {item.name}
                    </h2>
                    <h3 className='text-black text-xl font-medium'>
                      £{item.price}
                    </h3>
                  </div>
                  <button
                    onClick={() => onRemoveClick(item)}
                    className='self-start text-blue-600 hover:text-blue-400 font-medium text-lg'>
                    Remove
                  </button>
                </div>
              </Fragment>
            ))}
          </div>
          <hr className='m-4' />
          <div className='flex justify-between'>
            <h3 className='font-bold text-xl'>Total</h3>
            <h3 className='font-bold text-xl'>£{total}</h3>
          </div>
        </div>
      </div>
    </Modal>
  )
}

const FieldSet = ({ text, id, type = 'text', ...other }) => (
  <fieldset className='mb-3'>
    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor={id}>
      {text}
    </label>
    <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      id={id}
      type={type}
      {...other}
    />
  </fieldset>
)

const ApplePayIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='white'
    aria-hidden='true'
    role='img'
    width='2.43em'
    height='1em'
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 512 211'>
    <path d='M93.552 27.103c-6 7.1-15.602 12.702-25.203 11.901c-1.2-9.6 3.5-19.802 9.001-26.103C83.35 5.601 93.852.4 102.353 0c1 10.001-2.9 19.802-8.8 27.103Zm8.701 13.802c-13.902-.8-25.803 7.9-32.404 7.9c-6.7 0-16.802-7.5-27.803-7.3c-14.301.2-27.603 8.3-34.904 21.202c-15.002 25.803-3.9 64.008 10.601 85.01c7.101 10.401 15.602 21.802 26.803 21.402c10.602-.4 14.802-6.9 27.604-6.9c12.901 0 16.602 6.9 27.803 6.7c11.601-.2 18.902-10.4 26.003-20.802c8.1-11.801 11.401-23.303 11.601-23.903c-.2-.2-22.402-8.7-22.602-34.304c-.2-21.402 17.502-31.603 18.302-32.203c-10.002-14.802-25.603-16.402-31.004-16.802Zm80.31-29.004V167.82h24.202v-53.306h33.504c30.603 0 52.106-21.002 52.106-51.406c0-30.403-21.103-51.206-51.306-51.206h-58.507Zm24.202 20.403h27.903c21.003 0 33.004 11.201 33.004 30.903c0 19.702-12.001 31.004-33.104 31.004h-27.803V32.304ZM336.58 169.019c15.202 0 29.303-7.7 35.704-19.902h.5v18.702h22.403V90.21c0-22.502-18.002-37.004-45.706-37.004c-25.703 0-44.705 14.702-45.405 34.904h21.803c1.8-9.601 10.7-15.902 22.902-15.902c14.802 0 23.103 6.901 23.103 19.603v8.6l-30.204 1.8c-28.103 1.7-43.304 13.202-43.304 33.205c0 20.202 15.701 33.603 38.204 33.603Zm6.5-18.502c-12.9 0-21.102-6.2-21.102-15.702c0-9.8 7.901-15.501 23.003-16.401l26.903-1.7v8.8c0 14.602-12.401 25.003-28.803 25.003Zm82.01 59.707c23.603 0 34.704-9 44.405-36.304L512 54.706h-24.603l-28.503 92.11h-.5l-28.503-92.11h-25.303l41.004 113.513l-2.2 6.901c-3.7 11.701-9.701 16.202-20.402 16.202c-1.9 0-5.6-.2-7.101-.4v18.702c1.4.4 7.4.6 9.201.6Z' />
  </svg>
)
