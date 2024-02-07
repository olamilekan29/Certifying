import React from "react";
import Header from "./components/Header"
import Automate from "./components/Automate";
import Certi from "./components/Certi";
import Excel from "./components/excel";
import Deploy from "./components/Deploy";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
// import Buton from "./components/Buton"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HOME from "./pages/HOME";
function App() {

  return (
    <> 
   <Header/>

    <Automate/>

    
    <Certi/> 

    <Excel/>

   <Deploy/>

 <Pricing/>

   <Footer/>  

    {/* <Buton text={"submit"} price={1000}/>
    <Buton text={"get done"} price={1200}/> */}

{/* <BrowserRouter>
      <Routes>
          <Route index element={<HOME />} />
          <Route path="aboutus" element={<ABOUT />} />
          </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App
