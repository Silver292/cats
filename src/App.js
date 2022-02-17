import { useEffect, useState } from 'react'

import { getCats } from './api';
import { Cat, Spinner, BasketButton, Modal } from './components'

function App() {
  const [cats, setCats] = useState([])
  const [showBasket, setShowBasket] = useState(false)

  const [showModal, setShowModal] = useState(false)
  const [selectedCat, setSelectedCat] = useState(null)

  useEffect(() => {
    const getData = async () => {
      setCats(await getCats())
    }

    getData()
  }, [])

  return (
    <>
      {
        showModal && <Modal cat={selectedCat} onCloseClick={() => {
          setSelectedCat(null)
          setShowModal(false)
        }} />
      }

      {showBasket &&
        <div className='absolute h-full bg-white w-56 p-3 pt-28'>
          <h2 className='text-gray-600 text-lg font-bold align-center'>Your Basket</h2>
        </div>
      }

      <div className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-gray-800 p-5">
        <BasketButton onClick={() => { setShowBasket(current => !current) }} />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Top Cats</h1>
        {
          cats.length ?
            <section className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {
                cats.map(cat => (
                  <Cat {...cat} key={cat.id} onDetailClick={() => {
                    setSelectedCat(cat)
                    setShowModal(true)
                  }} />
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
