import React from 'react'
import { Background } from "../components/background";
import Forground from "../components/forgound";

function Home() {
  return (
    <div className='  min-w-full min-h-screen max-w-fit max-h-auto  bg-zinc-700 text-9xl relative'>
      <Background/>
      <Forground/>    
     </div>
  )
}

export default Home