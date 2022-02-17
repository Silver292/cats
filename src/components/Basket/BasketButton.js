import React from 'react'

export const BasketButton = ({ onClick, count }) => (
  <div className='fixed'>
    <button
      className='bg-blue-500 p-4 rounded-full fixed hover:scale-110'
      onClick={onClick}>
      <svg
        className='text-white w-8 h-8'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        role='img'
        preserveAspectRatio='xMidYMid meet'
        viewBox='0 0 576 512'>
        <path
          fill='currentColor'
          d='M171.7 191.1h232.6L322.7 35.07c-6.1-11.76-1.5-26.249 10.2-32.364c11.8-6.115 26.3-1.539 32.4 10.224l93.1 178.17H544c17.7 0 32 15.2 32 32c0 18.6-14.3 32-32 32l-51.9 208.4c-8 28.5-32.7 48.5-62.1 48.5H145.1c-28.5 0-54.1-20-61.22-48.5L32 255.1c-17.67 0-32-13.4-32-32c0-16.8 14.33-32 32-32h85.6l93.1-178.17c6.1-11.763 20.6-16.339 32.4-10.224c11.7 6.115 16.3 20.604 10.2 32.364L171.7 191.1zm19.4 112c0-8-6.3-16-16-16c-7.9 0-16 8-16 16v96c0 9.7 8.1 16 16 16c9.7 0 16-6.3 16-16v-96zm80 0v96c0 9.7 8.1 16 16 16c9.7 0 16.9-6.3 16.9-16v-96c0-8-7.2-16-16.9-16c-7.9 0-16 8-16 16zm144.9 0c0-8-7.2-16-16-16s-16 8-16 16v96c0 9.7 7.2 16 16 16s16-6.3 16-16v-96z'
        />
      </svg>
    </button>
    <span className='inline-flex items-center relative px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>
      {count}
    </span>
  </div>
)
