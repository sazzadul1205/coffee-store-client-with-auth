import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees , setCoffees] = useState(loadedCoffees)
 
  return (
    <>
      <div className='m-20'>
        <div className='text-center'>
          <h1 className='text-6xl text-purple-600'>Sazzads Coffee</h1>
          <p className='text-3xl mt-5'>{coffees.length}</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}></CoffeeCard>)
          }
        </div>
      </div>

    </>
  )
}

export default App
