import React, { useEffect, useState } from 'react'

const Home = () => {
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')

  useEffect(() => {
    window.addEventListener('load' , () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    })
  }, [height, width])
    window.addEventListener('resize', () => {
        console.log(window.innerHeight);
        console.log(window.innerWidth); 
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    })
  return (
    <div className='text-black bg-white rounded-2xl p-5'>
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