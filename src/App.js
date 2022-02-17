import { useEffect, useState } from 'react'

import { getCats } from './api';
import { Cat } from './components/Cat'
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
    <div className="App">
      {
        cats.length ?
          (
            <div className='sales-wrapper'>
              <div className='sales-container'>{
                cats.map(cat => (
                  <Cat {...cat} key={cat.id} />
                ))
              }
              </div>
            </div>
          )
          :
          <p>loading</p>
      }
    </div>
  );
}

export default App;
