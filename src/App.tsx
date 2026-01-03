
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/loginpage/login'
import HomePage from './pages/homepage'
import PerusahaanRelasi from './pages/PerusahaanRelasi'
import BlankPage from './pages/blank'
import TimeReportPage from './pages/time-report'
import DetailKaryawan from './DetailKaryawan'
import DetailAbsensi from './DetailAbsensi'
import Profile from './Profile'
import DetailTimeReport from './DetailTimeReport'
import Projek from './Projek'
import ProposalAdvance from './ProposalAdvance'
import DetailProposalAdvance from './DetailProposalAdvance'
import ListRequest from './ListRequest'
import PopUpAgree from './PopUp'
import PopUpDisAgree from './DisAgreePopUp/Disagree'
import TambahPerusahaanRelasi from './TambahPerusahaan'
import TambahProjek from './TambahProjek'
import DetailTimeReportByDate from "./information";
import DetailRevisi from "./detailrevisi";
import ProtectedRoute from './routes/ProtectedRoute'
import PublicRoute from './routes/PublicRoute'
import OnGoing from './ongoing/index'
import Closed from './closed/index'

function App() {
  return (
    <Routes>
      <Route path='/blank' element={<BlankPage />} /> 
      <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path='/perusahaan-relasi' element={<ProtectedRoute><PerusahaanRelasi /></ProtectedRoute>} />
      <Route path='/perusahaan-relasi/tambah-perusahaan-relasi' element={<ProtectedRoute><TambahPerusahaanRelasi /></ProtectedRoute>} />
      <Route path='/perusahaan-relasi/detail-karyawan' element={<ProtectedRoute><DetailKaryawan /></ProtectedRoute>} />
      <Route path='/karyawan/profile-karyawan' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path='/karyawan/detail-absensi' element={<ProtectedRoute><DetailAbsensi /></ProtectedRoute>} />
      <Route path="/time-report" element={<ProtectedRoute><TimeReportPage /></ProtectedRoute>} />
      <Route path="/time-report/detail-time-report" element={<ProtectedRoute><DetailTimeReport /></ProtectedRoute>} />
      <Route
        path="/time-report/detail-time-report/information"
        element={<ProtectedRoute><DetailTimeReportByDate /></ProtectedRoute>}
      />
      <Route
        path="/time-report/detail-time-report/information/detail-revisi"
        element={<ProtectedRoute><DetailRevisi /></ProtectedRoute>}
      />
      <Route path='/projek' element={<ProtectedRoute><Projek /></ProtectedRoute>} />
      <Route path='/projek/tambah-projek' element={<ProtectedRoute><TambahProjek /></ProtectedRoute>} />
      <Route path='/proposal-advance' element={<ProtectedRoute><ProposalAdvance /></ProtectedRoute>} />
      <Route path='/proposal-advance/on-going' element={<ProtectedRoute><OnGoing /></ProtectedRoute>} />
      <Route path='/proposal-advance/closed' element={<ProtectedRoute><Closed /></ProtectedRoute>} />
      <Route path='/proposal-advance/detail-proposal-advance' element={<ProtectedRoute><DetailProposalAdvance /></ProtectedRoute>} />
      <Route path='/proposal-advance/list-request' element={<ProtectedRoute><ListRequest /></ProtectedRoute>} />
      <Route path='/PopUp-Agree' element={<ProtectedRoute><PopUpAgree /></ProtectedRoute>} />
      <Route path='/PopUp-DisAgree' element={<ProtectedRoute><PopUpDisAgree /></ProtectedRoute>} />
    </Routes>
  )
}
export default App
