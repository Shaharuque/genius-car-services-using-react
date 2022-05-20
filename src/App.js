import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Home from './pages/Home/Home/Home'
import About from './pages/About/About'
// import Services from './pages/Home/Services/Services'
import NoPageFound from './pages/NoPage/NoPageFound'
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import RequireAuth from "./pages/Authentication/RequireAuth/RequireAuth";
import AddService from "./pages/AddService/AddService";
import ManageServices from "./pages/ManageServices/ManageServices";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="about" element={<About />} />
        {/*protected route */}
        <Route path="/checkout/:id" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }>
        </Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        }>
        </Route>

        <Route path="/manageservice" element={
          <RequireAuth>
            <ManageServices/>
          </RequireAuth>
        }>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='*' element={<NoPageFound></NoPageFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
