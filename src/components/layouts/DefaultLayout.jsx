import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
    <Header />
    <main className='flex-grow-1'>
      <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default DefaultLayout