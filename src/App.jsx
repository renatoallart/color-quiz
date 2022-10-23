import { ColorDisplay } from './components/ColorDisplay'
import { Score } from './components/Score'
import { useColorsContext } from './context/ColorsProvider'


export function App() {

  const { isShow } = useColorsContext()

  return (
    <main className=''>
        <h1 className='text-4xl font-bold text-center m-4 text-white'>Color Quiz</h1>
        {isShow ? <ColorDisplay /> : <Score/>}
    </main>
  )
}
