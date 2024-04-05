import React from 'react'
import './styles/index.scss'
import { NavLink } from 'react-router-dom'
import { UseTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'



const App = () => {
   const { theme, toggleTheme } = UseTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <Navbar />
         <AppRouter />
         <button onClick={toggleTheme}>Toggle</button>
      </div>
   )
}

export default App