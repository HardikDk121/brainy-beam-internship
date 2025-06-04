import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div className="bg-info-subtle">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

