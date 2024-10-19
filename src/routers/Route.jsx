import React, { Suspense } from 'react'

import { Routes, Route } from "react-router-dom";
import  DocumentPage  from "../components/DocPageComponent/DocumentPage";
// const TextEditor = React.lazy(() => import("../pages/TextEditor"));
import  TextEditor  from "../pages/TextEditor";

import  Home  from "../pages/Home";



function RoutePage() {
  return (
    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/DocWindow" element={<DocumentPage/>} />
    <Route path="/textEditor" element={<TextEditor/>} />
    {/* <Route path="/textEditor" element={<Suspense fallback={<p>Loading...</p>}><TextEditor/></Suspense> } /> */}
    <Route path="*" element={<div>namaste jii</div>} />
  
</Routes>
  )

}

export default RoutePage