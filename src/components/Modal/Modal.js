import React from 'react'

import './Modal.css'

export const Modal = ({ onCloseClick, children }) => (
  <>
    <div className='modal-wrapper' onClick={onCloseClick}></div>
    <div className='modal-content p-8 rounded'>
      <CloseIcon onCloseClick={onCloseClick} />

      {children}
    </div>
  </>
)
const CloseIcon = ({ onCloseClick }) => (
  <svg
    onClick={onCloseClick}
    xmlns='http://www.w3.org/2000/svg'
    className='h-8 w-8 b-2 rounded-full p-2 self-end border shadow'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
)
