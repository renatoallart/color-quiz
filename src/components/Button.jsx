

export function Button({ handleColor, option, color }) {

  return (
    <button
      onClick={() => handleColor(option)}
      className='p-2 border-transparent bg-gray-500 cursor-pointer hover:bg-blue-300 rounded-md'>
      {color}
    </button>
  )
}
