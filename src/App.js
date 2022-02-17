import { useEffect, useState } from 'react'

import { getCats } from './api';
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
    if (basket.some(item => item.id === cat.id)) {
      return
    }
    setBasket(basket => [...basket, cat])
  }

  const removeFromBasket = (cat) => {
    setBasket(basket.filter(item => item.id !== cat.id))
  }

  return (
    <>
      {
        selectedCat && <Modal cat={selectedCat} onCloseClick={() => {setSelectedCat(null)}} />
      }

        <div className={`fixed inset-0 bg-white w-56 p-3 pt-28 transition-transform ${showBasket ? 'translate-x-0' : '-translate-x-full'}`}>
          <h2 className='text-gray-600 text-xl font-bold align-center'>Your Basket</h2>
          {basket.map(item => <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => removeFromBasket(item)}>Remove</button>
          </div>)}

          {basket.length ? (<div><h3>total: £{basket.reduce((prev, curr) => prev + parseFloat(curr.price), 0.0).toFixed(2)}</h3></div>) : null}
        </div>


      <div className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-gray-800 p-5">
        <BasketButton onClick={() => { setShowBasket(current => !current) }} />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Top Cats</h1>
        {
          cats.length ?
            <section className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
              {
                cats.map(cat => (
                  <Cat {...cat} key={cat.id}
                    onDetailClick={() => {
                      setSelectedCat(cat)
                    }}
                    onBasketClick={() => addToBasket(cat)}
                  />
                ))
              }
            </section>
            :
            <Spinner />
        }
      </div>
    </>
  );
}

export default App;
