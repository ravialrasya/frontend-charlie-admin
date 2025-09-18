
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/loginpage/login'
import HomePage from './pages/homepage'
import Karyawan from './pages/karyawan'
import BlankPage from './pages/blank'
import TimeReportPage from './pages/time-report'

function App() {

  return (
    <Routes>
      <Route path='/blank' element={<BlankPage />} /> {/* HAPUS JIKA SUDAH TIDAK DIPERLUKAN */}
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/karyawan' element={<Karyawan />} />
      <Route path='/time-report' element={<TimeReportPage />} />
    </Routes>
  )
}

export default App
