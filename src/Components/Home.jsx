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
    <div className='text-black w-1/2 bg-white rounded-2xl p-5'>
      <div>
        <h1 className='text-5xl'>Window Resize Tracker</h1>
      </div>
      <div>
        <h1 className='text-3xl font-semibold text-center'> Width : {width}px </h1>
        <h1 className='text-3xl font-semibold text-center'> Height : {height}px </h1>
      </div>
    </div>
  )
}

export default Home