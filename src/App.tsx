
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import LoginPage from './pages/auth/loginpage/login'
import Karyawan from './pages/Sidebar/karyawan'



function App() {

  return (
    <Routes>
       <Route path='/login' element={<LoginPage />}/>
      <Route path='/' element={<HomePage />}/>
      <Route path='/karyawan' element={<Karyawan/>}/>
      
     
    
    </Routes>
  )
}

export default App
