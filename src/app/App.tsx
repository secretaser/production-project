import React from 'react'
import './styles/index.scss'
import { Route, Routes, NavLink } from 'react-router-dom'
import { UseTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'



const App = () => {
   const { theme, toggleTheme } = UseTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <button onClick={toggleTheme}>Toggle</button>
         {/* в курсе тут линк */}
         <NavLink to={'/'}>Main Page</NavLink>
         <NavLink to={'/about'}>About</NavLink>
         <AppRouter />
      </div>
   )
}

export default App