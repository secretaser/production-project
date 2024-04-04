import React, { Suspense } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { UseTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'



const App = () => {
   const { theme, toggleTheme } = UseTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <button onClick={toggleTheme}>Toggle</button>
         {/* в курсе тут линк */}
         <NavLink to={'/'}>Main Page</NavLink>
         <NavLink to={'/about'}>About</NavLink>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path={'/'} element={<MainPageAsync />} />
               <Route path={'/about'} element={<AboutPageAsync />} />
            </Routes>
         </Suspense>
      </div>
   )
}

export default App