import React from 'react'
import { useEffect, useState } from 'react'

import { getCats } from './api'
import { Cat, Spinner, BasketButton, Modal } from './components'

function App() {
  const [cats, setCats] = useState([])
  const [showBasket, setShowBasket] = useState(false)

  const [selectedCat, setSelectedCat] = useState(null)

  const [basket, setBasket] = useState([])

  useEffect(() => {
    const getData = async () => {
      setCats(await getCats())
    }

    getData()
  }, [])

  const addToBasket = (cat) => {
    if (basket.some((item) => item.id === cat.id)) {
      return
    }
    setBasket((basket) => [...basket, cat])
  }

  const removeFromBasket = (cat) => {
    setBasket(basket.filter((item) => item.id !== cat.id))
  }

  return (
    <>
      {selectedCat && (
        <Modal
          cat={selectedCat}
          onCloseClick={() => {
            setSelectedCat(null)
          }}
        />
      )}

      <div
        className={`fixed inset-0 bg-white w-56 p-3 pt-28 transition-transform ${
          showBasket ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <h2 className='text-gray-600 text-xl font-bold align-center'>
          Your Basket
        </h2>
        {basket.map((item) => (
          <div key={item.id} className='grid grid-cols-2 my-3'>
            <div className='flex items-center'>
              <img
                className='inline object-cover w-6 h-6 rounded-full mr-2'
                src={item.imageUrl}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
            <p className='text-right'>£{item.price}</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 col-start-2 text-red-600 border border-red-300 rounded justify-self-end mt-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={() => removeFromBasket(item)}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </div>
        ))}

        {basket.length ? (
          <div className='grid grid-cols-2 my-3'>
            <h3>Total:</h3>
            <h3 className='text-right'>
              £
              {basket
                .reduce((prev, curr) => prev + parseFloat(curr.price), 0.0)
                .toFixed(2)}
            </h3>
          </div>
        ) : null}
      </div>

      <div className='grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-gray-800 p-5'>
        <BasketButton
          onClick={() => {
            setShowBasket((current) => !current)
          }}
        />
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5'>
          Top Cats
        </h1>
        {cats.length ? (
          <section className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
            {cats.map((cat) => (
              <Cat
                {...cat}
                key={cat.id}
                onDetailClick={() => {
                  setSelectedCat(cat)
                }}
                onBasketClick={() => addToBasket(cat)}
              />
            ))}
          </section>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  )
}

export default App
