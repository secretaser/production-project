import React, { useState } from 'react'
import s from './Counter.module.scss'

function Counter() {
   const [number, setNumber] = useState(0)

   const increment = () => {
      setNumber(number + 1)
   }

   const decrement = () => {
      setNumber(number - 1)
   }

   return (
      <div>
         <h1>Count: {number}</h1>
         <button className={s.btn} onClick={decrement}>decrement</button>
         <button className={s.btn} onClick={increment}>increment</button>
      </div>
   )
}

export default Counter
