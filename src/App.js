import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Home from './pages/Home/Home/Home'
import About from './pages/About/About'
import Services from './pages/Home/Services/Services'
import NoPageFound from  './pages/NoPage/NoPageFound'

function App() {
  return (
    <div >
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="about" element={<About />} />
        <Route path='*' element={<NoPageFound></NoPageFound>}/>
      </Routes>
    <Footer></Footer>  
    </div>
  );
}

export default App;
