
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




function App() {

  return (
    <Routes>
      <Route path='/blank' element={<BlankPage />} /> {/* HAPUS JIKA SUDAH TIDAK DIPERLUKAN */}

      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/perusahaan-relasi' element={<PerusahaanRelasi />} />
      <Route path='/perusahaan-relasi/tambah-perusahaan-relasi' element={<TambahPerusahaanRelasi />} />
      <Route path='/perusahaan-relasi/detail-karyawan' element={<DetailKaryawan />} />
      <Route path='/karyawan/profile-karyawan' element={<Profile />} />
      <Route path='/karyawan/detail-absensi' element={<DetailAbsensi />} />
      <Route path="/time-report" element={<TimeReportPage />} />
      <Route path="/time-report/detail-time-report" element={<DetailTimeReport />} />
      <Route
        path="/time-report/detail-time-report/information"
        element={<DetailTimeReportByDate />}
      />
      <Route
        path="/time-report/detail-time-report/information/detail-revisi"
        element={<DetailRevisi />}
      />
      <Route path='/projek' element={<Projek />} />
      <Route path='/projek/tambah-projek' element={<TambahProjek />} />
      <Route path='/proposal-advance' element={<ProposalAdvance />} />
      <Route path='/proposal-advance/detail-proposal-advance' element={<DetailProposalAdvance />} />
      <Route path='/proposal-advance/list-request' element={<ListRequest />} />
      <Route path='/PopUp-Agree' element={<PopUpAgree />} />
      <Route path='/PopUp-DisAgree' element={<PopUpDisAgree />} />


    </Routes>
  )
}
export default App
