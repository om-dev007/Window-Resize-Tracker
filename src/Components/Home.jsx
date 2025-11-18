import React, { useEffect, useState } from 'react'

const Home = () => {
  const [height, setHeight] = useState(() => typeof window !== 'undefined' ? window.innerHeight : 0)
  const [width, setWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const update = () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }

    update()
    window.addEventListener('load', update)
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('load', update)
    }
  }, [])
    window.addEventListener('resize', () => { 
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    })
  return (
    <div className='text-black w-full bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-3xl sm:text-5xl text-center'>Window Resize Tracker</h1>
      </div>
      <div className='mt-4 flex flex-col sm:flex-row items-center justify-center gap-4'>
        <h1 className='text-xl sm:text-3xl font-semibold text-center w-full sm:w-auto'> Width : {width}px </h1>
        <h1 className='text-xl sm:text-3xl font-semibold text-center w-full sm:w-auto'> Height : {height}px </h1>
      </div>
    </div>
  )
}

export default Home