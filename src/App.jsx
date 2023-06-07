import { BrowserRouter, Route, Router, Routes,  } from "react-router-dom";
import React from "react";
import Home from "./Pages/home/Home";
function App() {
  // const user=null;
  const user={
    name:"saran",
    email:"saran@gmail.com",
    password:"123"

  }
  return <div className="App">
    <BrowserRouter>
    
      {
        !user ?
        <h1>login</h1>
     :
     <Routes>
      <Route element={<Home/>} path="/"/>
     </Routes>

      }
     
      </BrowserRouter>
   
  </div>;
}

export default App;
