import { Routes, Route, Navigate} from 'react-router-dom'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import InvoicesPage from './pages/InvoicesPage'
import OffersPage from './pages/OffersPage'
import FinancialAnalysisPage from './pages/FinancialAnalysisPage'

import './App.css'

function App() {
  

  return (
    
      <Routes>
        

      {/* Dashboard layout - glavni wrapper za rute, za dashboard  */}
        <Route path='/' element={<DashboardLayout />}>

          <Route path='racuni' element={<InvoicesPage />}/>
          <Route path='ponude' element={<OffersPage />}/>
          <Route path='finansijska-analiza' element={<FinancialAnalysisPage />}/>

          {/* Ako neko ode na '/' , automatski ga vodi na racune */}

          <Route index element={<Navigate to='racuni'/>}/>
        </Route>

      </Routes>

    
  )
}

export default App
