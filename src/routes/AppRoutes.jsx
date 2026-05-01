import React from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home/HomePage.jsx'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={ <DefaultLayout /> } > 
    {/* <Route path="" element={} ></Route> */}
    <Route index element={<HomePage />}></Route>
    </Route>
   </Routes>
  )
}

export default AppRoutes