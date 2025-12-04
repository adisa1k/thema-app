import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const linkClasses = "px-4 py-2 rounded-md transition-colors font-medium";

    return (
        <div className="h-full flex flex-col">

            {/* Logo */}
            <div className="px-6 py-5 border-b border-gray-700">
                <h2 className="text-lg font-semibold tracking-wide text-green-500">THEMA Dashboard</h2>
            </div>

            {/* Navigacija */}
            <nav className="flex flex-col gap-2 px-4 py-6 text-sm mt-4">
                <NavLink
                to="/racuni"
                className={({ isActive }) =>
                `${linkClasses} ${
                    isActive
                    ? "bg-green-600 text-white font-semibold"
                    : "text-gray-300 hover:bg-gray-700 hover:text-green-400"
                }`
                }
                >
                    Racuni
                </NavLink>

                <NavLink
                to="/ponude"
                className={({ isActive }) =>
                `${linkClasses} ${
                    isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
                }>
                    Ponude
                </NavLink>

                <NavLink
                to="/finansijska-analiza"
                className={({ isActive }) =>
                `${linkClasses} ${
                    isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
                }>
                    Finansijska analiza
                </NavLink>
            </nav>
        </div>
    )

}

export default Sidebar;



// import React from 'react'
// import { Link } from 'react-router-dom'


// const Sidebar = () => {
//   return (
//     <aside className='w-60 bg-gray-900 text-white p-6'>
//         <div className='p-4 border-b'>
//             <h2 className='text-lg font-bold text-green-700'>Thema Dashboard</h2>
//         </div>
//         <nav className='flex flex-col gap-3'>
//           <Link to="/racuni" className='hover:text-green-400'> Racuni </Link>
//           <Link to="/ponude" className='hover:text-green-400'> Ponude </Link>
//           <Link to="/finansijska-analiza" className='hover:text-green-400'> Finansijska analiza projekta </Link>

//         </nav>
      
//     </aside>
//   )
// }

// export default Sidebar
