import { Navigate, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/Navbar"
import { ContactoScreen } from "./pages/ContactoScreen"
import { HomeScreen } from "./pages/HomeScreen"
import { TurnoScreen } from "./pages/TurnoScreen"
import Footer from "./components/footer/Footer"



export const App = () => {

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/home" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="/turno" element={<TurnoScreen></TurnoScreen>}></Route>
          <Route path="/contacto" element={<ContactoScreen></ContactoScreen>}></Route>
          <Route path="/*" element={<Navigate to='/home'></Navigate>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}
