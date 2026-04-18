import React from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={ <DefaultLayout /> } > 
    {/* <Route path="" element={} ></Route> */}
    </Route>
   </Routes>
  )
}

export default AppRoutes