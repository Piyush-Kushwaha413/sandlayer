import React from 'react'

import { Routes, Route } from "react-router-dom";
import  DocumentPage  from "../components/DocPageComponent/DocumentPage";
import  TextEditor  from "../pages/TextEditor";
import  Home  from "../pages/Home";



function RoutePage() {
  return (
    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/DocWindow" element={<DocumentPage/>} />
    <Route path="/textEditor" element={<TextEditor/>} />
    <Route path="*" element={<div>namaste jii</div>} />
  
</Routes>
  )

}

export default RoutePage