import React from 'react'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='bg-gray-950 flex items-center justify-center p-5 h-screen text-white'>
      <div className='w-full max-w-sm flex items-center justify-center'>
        <Home/>
      </div>
    </div>
  )
}

export default App