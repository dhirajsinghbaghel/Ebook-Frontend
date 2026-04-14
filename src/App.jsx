
import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Registerpage from "./components/register"
import AdminLayout from "./layouts/adminLayout"
import EbookPage from "./components/Ebook"
import SettingPage from "./components/Setting"
import DashboardPage from "./components/Dashboard"
import OtpPage from "./components/otp-verify"

const App=()=> {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="otp-verify" element={<OtpPage />}/>

        <Route path="/admin" element={<AdminLayout/>}>
        
          <Route path="ebook" element={<EbookPage/>}/>
           <Route path="dashboard" element={<DashboardPage/>}/>
          <Route path="setting" element={<SettingPage/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
