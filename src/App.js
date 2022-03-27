import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Loading from './Loading';
import Tours from './Tours';
import { BiRefresh } from 'react-icons/bi';

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isloading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])
  
  if (isloading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no available tour today</h2>
        </div>
        <button onClick={() => fetchTours()} className="btn refresh">
          <BiRefresh/>
        </button>
      </main>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Tours tours={tours} removeTours={removeTours} />
      </main>
    </>
  )
}

export default App
