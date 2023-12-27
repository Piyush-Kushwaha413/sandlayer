import React,{useState} from "react";
import UserContext from "./UserContext";


function ContextProvider({children}) {
    const [dataArray, setDateArray] =  useState([]);

  return( <UserContext.Provider value={{dataArray,setDateArray}}>
    {children}
    </UserContext.Provider>)
}

export default ContextProvider;
