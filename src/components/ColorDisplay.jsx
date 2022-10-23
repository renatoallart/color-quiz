import { useColorsContext } from '../context/ColorsProvider'
import { Button } from './button'

export function ColorDisplay() {
    const {colors, handleColor, randomColor} = useColorsContext()
    
    const backgroundColor = { backgroundColor: colors[randomColor].color }
    return (
        <div className='flex flex-col gap-4 justify-center m-4 p-4  items-center'>
            <div className=' w-[300px] h-[300px] rounded-md' style={backgroundColor}> </div>
            <div className='flex gap-4 font-bold text-xl m-4 '>{
                colors[randomColor].options.map((option, index) => 
                <Button key={index} handleColor={handleColor} option={option.correct} color={option.color} />)
            }</div>
        </div>
    )
}
