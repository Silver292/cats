import { useEffect, useState } from 'react'

import { getCats } from './api';
import { Cat, Spinner } from './components'
import './App.css';


function App() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getData = async () => {
      setCats(await getCats())
    }

    getData()
  }, [])

  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-gray-800 p-5">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Top Cats</h1>
      {
        cats.length ?
          <section className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {

              cats.map(cat => (
                <Cat {...cat} key={cat.id} />
              ))
            }
          </section>
          :
          <Spinner />
      }
    </div>
  );
}

export default App;
