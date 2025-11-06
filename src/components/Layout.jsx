import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout(){
    return (
      <div>
        <Navbar />
        <main className='className="bg-black bg-linear-to-t from-gray-900 to-black text-white"'>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
} 

export default Layout