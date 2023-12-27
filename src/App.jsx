import React from 'react'
import RoutePage from './routers/Route';
import ContextProvider from "./Context/contextProvider.jsx"



function App() {
  return (
    <ContextProvider>
     <div>
       <RoutePage></RoutePage>
     </div>
 
  </ContextProvider>
  )
}

export default App