import React from 'react'
import { useColorsContext } from '../context/ColorsProvider'

export function Score() {
    const {score, handleRestart} = useColorsContext()
  return (
    <div className=' flex flex-col justify-center items-center'>
       <h2 className='text-4xl font-bold text-center m-4 mb-16'>Score: {score}</h2>
       <button className='text-md font-bold text-center p-2 bg-gray-500 cursor-pointer hover:bg-blue-300 rounded-md' 
        onClick={handleRestart}>Play Again?</button>
    </div>
  )
}
