import React from 'react'
import { useEffect, useState } from 'react'

import { getCats } from './api'
import { Cat, Spinner, Basket, BasketButton, Modal } from './components'

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

      <Basket
        visible={showBasket}
        items={basket}
        removeFromBasket={removeFromBasket}
      />

      <div className='grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-gray-800 p-5'>
        <BasketButton
          onClick={() => {
            setShowBasket((current) => !current)
          }}
          count={basket.length}
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
                onRemoveClick={() => removeFromBasket(cat)}
                inBasket={basket.some((item) => item.id === cat.id)}
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
