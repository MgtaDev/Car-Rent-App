'use client'

import { CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'
import CarCard from '@/components/CarCard'
import { fuels, yearsOfProduction } from '@/constants'
import ShowMore from '@/components/ShowMore'
import { useEffect, useState } from 'react'



export default  function Home() {

  const [allCars, setallCars] = useState([])
  const [loading, setloading] = useState(false)
  const [manufacturer, setmanufacturer] = useState('')
  const [model, setmodel] = useState('model')    
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)
  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setloading(true)
  try {
  const result = await fetchCars({
    manufacturer: manufacturer || '',
    year: year || 2022,
    fuel: '',
    limit: limit || 10, 
    model: model || ''
  })
  setallCars(result)
  } catch (error) {
  console.log(error)
  } finally {
    setloading(false)
  }

  }
  
  useEffect(()=>{
    console.log(fuel, year, limit, manufacturer, model );
    getCars()
  }, [fuel, year, limit, manufacturer, model ])

const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
console.log(allCars)



  return (
    <main className="overflow-hidden ">
    <Hero/>
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container '>
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p>Explore the cars you mike like</p>
      </div>

      <div className='home__filters'>
        <SearchBar
        setManufacturer={setmanufacturer}
        setModel={setmodel}
        />
        
        <div className='home__filter-container'>
        <CustomFilter title='fuel' options={fuels} setFilter={setFuel}/>
        <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear}/>
        </div>

      </div>

    {allCars.length > 0 ? (
      <section>
      <div className='home__cars-wrapper'>
      {allCars?.map((car)=>
      (<CarCard car={car}/>
      ))} 
      </div>

      {loading && (
        <div>
          <Image 
          src='/loader.svg'
          alt='loader'
          width={50}
          height={50}
          className='object-contain'
          />
        </div>
      )}
    
        <ShowMore
        pageNumber={limit / 10}
        isNext={limit > allCars.length}
        setLimit={setLimit}
        />
      </section>
    ):
    <div className='home__error-container'>
      <h2 className='text-black text-xl font-bold'>Ups, no results</h2>
      {/* <p>{allCars?.message}</p> */}
    </div>
    }




    </div>
    </main>
  )
}
