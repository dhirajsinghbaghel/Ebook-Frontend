
import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Registerpage from "./components/register"
import AdminLayout from "./layouts/adminLayout"
import EbookPage from "./components/Ebook"
import SettingPage from "./components/Setting"

const App=()=> {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registerpage/>}/>

        <Route path="/admin" element={<AdminLayout/>}>
        
          <Route path="ebook" element={<EbookPage/>}/>
          <Route path="setting" element={<SettingPage/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
