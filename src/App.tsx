
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/loginpage/login'
import HomePage from './pages/homepage'
import Karyawan from './pages/karyawan'
import BlankPage from './pages/blank'
import TimeReportPage from './pages/time-report'
import DetailKaryawan from './DetailKaryawan'
import DetailAbsensi from './DetailAbsensi'
import Profile from './Profile'
import DetailTimeReport from './DetailTimeReport'
import Absensi from './Absensi'
import AbsensiDetail from './absensidetail'
import ProposalAdvance from './ProposalAdvance'
import DetailProposalAdvance from './DetailProposalAdvance'




function App() {

  return (
    <Routes>
      <Route path='/blank' element={<BlankPage />} /> {/* HAPUS JIKA SUDAH TIDAK DIPERLUKAN */}
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/karyawan' element={<Karyawan />} />
      <Route path='/karyawan/detail-karyawan' element={<DetailKaryawan/>}/>
      <Route path='/karyawan/profile-karyawan' element={<Profile />}/>
      <Route path='/karyawan/detail-absensi' element={<DetailAbsensi />}/>
      <Route path='/time-report' element={<TimeReportPage />} />
      <Route path='/time-report/detail-time-report' element={<DetailTimeReport />}/>
      <Route path='/absensi' element={<Absensi />}/>
      <Route path='/absensi/absensi-detail' element={<AbsensiDetail />}/>
      <Route path='/proposal-advance' element={<ProposalAdvance />}/>
      <Route path='/proposal-advance/detail-proposal-advance' element={<DetailProposalAdvance />}/>
      
    </Routes>
  )
}

export default App
