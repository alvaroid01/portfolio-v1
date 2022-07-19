import React, { useState } from 'react'

const useManageCount = () => {

    const [count, setCount] = useState(2)
    const [style, setStyle] = useState('')

    const handleButtonStyle = (number) => {
        console.log("estilo", number)
        if (number === 2) {
            setStyle('#skills')

        }
        else if (number === 1) {


            setStyle('#projects')
        }
        else if (number === 0) {


            setStyle('#main')
        }
    }

    const handleColor = () => {
        if (count === 1) {
            return 'white'
        }
        else {
            return "black"
        }
    }
    const handleClick = () => {
        if (count !== 0) {
            setCount(count - 1)
            handleButtonStyle(count)
        }
        else {
            setCount(2)
            handleButtonStyle(count)

        }
    }
    return { handleButtonStyle, handleClick, handleColor, count, style }
}

export default useManageCount