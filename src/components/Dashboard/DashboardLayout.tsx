import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'



const DashboardLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden bg-gray-100'>

        {/* Fiksiran Sidebar */}
          <aside className=' w-64 bg-gray-900 text-white fixed top-0 left-0 bottom-0 shadow-lg z-20'>
            <Sidebar />
          </aside>
        {/* Glavni Sadrzaj stranice */}
            <main className='flex-1 ml-64 p-8 overflow-y-auto max-w-7xl mx-auto'>
                <Outlet />

            </main>

        
      
    </div>
  )
}

export default DashboardLayout
