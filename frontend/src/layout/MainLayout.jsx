import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/headers/Navbar'
import Footer from '../components/headers/footer/Footer'
import Section from '../components/headers/Section'
import Newsletter from '../components/headers/Newsletter'



function MainLayout() {
  return (
    <main className='dark:bg-black overflow-hidden '>

    <Navbar/>
      <Outlet/>
      <Section/>
      <Newsletter/>
      <Footer/>
          </main>
  )
}

export default MainLayout
