import { createContext, useContext, useState } from "react"
import { colors } from '../data/colors'

const ColorsContext = createContext()

export function useColorsContext() {
    return useContext(ColorsContext)
}

const INITIAL_STATE = colors.map(color => ({
    ...color,
    options: color.options.sort((a, b) => a.color > b.color ? 1 : -1)}))

export function ColorsProvider({ children }) {
    const [colors, setColor] = useState(INITIAL_STATE)
    const [randomColor, setRandomColor] = useState(Math.floor(Math.random() * colors.length))
    const [score, setScore] = useState(0)
    const [isShow, setIsShow] = useState(true)
    const [colorsLength, setColorsLength] = useState(1)


    function handleColor(correctOption) {
      if (colorsLength <= colors.length) {
        setRandomColor(Math.floor(Math.random() * colors.length))
        setColorsLength(old => old + 1)
        return handleScore(correctOption)
      }
      return setIsShow(false)
    }
  
    function handleScore(correctOption) {
      colors[randomColor].options.map(opt => {
        if (correctOption) return setScore(score + 1)
        return
      })
    }
  
    function handleRestart(){
      setScore(0)
      setColorsLength(1)
      setIsShow(true)
    }


    return (
        <ColorsContext.Provider value={{ colors, isShow, randomColor,score, handleColor, handleRestart}}>
            {children}
        </ColorsContext.Provider>
    )
}
