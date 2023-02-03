import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {BasicHooks,Mainfile} from "./Pages/index"

const App = ()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hooks" element={<BasicHooks/>}/>
          <Route path="/" element={<Mainfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;