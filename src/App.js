import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom"
import Contact from "./components/Contact";
import Education from "./components/Education"
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Login from "./Authenication/Login";
// import { AuthProvider } from "./Authenication/Auth";

function App() {

  
  return (
    <div className="App">
     {/* <AuthProvider> */}
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Education" element={<Education/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Certificates" element={<Certificates/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/login" element={<Login/>} />
       </Routes>
    <Footer/>
    {/* </AuthProvider> */}

     
    </div>
  );
}

export default App;
