import React, { useState } from "react";
import UserContext from "./UserContext";
import { Navigate, useNavigate } from "react-router-dom";

function ContextProvider({ children }) {
  // debug 01
  const nevigates = useNavigate()
  const [dataArray, setDateArray] = useState((localStorage.getItem('maintask'))? (JSON.parse(localStorage.getItem('maintask'))):[]);
  const [gloStorageArray, setGloStorageArray] = useState("");
  const [index, setIndex] = useState(1);
  const [editMode, setEditMode] = useState(false);
 const  [editOject, setEditOject] = useState("");


// debug
  // setGloStorageArray(JSON.parse(localStorage.getItem('maintask')));

  function deleteHandler(idx) {
    let copyGloArray = [...gloStorageArray];
    copyGloArray.splice(idx, 1);
    setGloStorageArray(copyGloArray);
    setDateArray(copyGloArray);
    localStorage.setItem("maintask", JSON.stringify(copyGloArray));

  }

  // function : update and doc.
 function EditHandler(idx) {
    setEditOject(idx);
    if (!editMode) setEditMode(true);
    nevigates('/textEditor');
  }

  //Handler windonw
   function windowDocHandler(idx) {
     setIndex(idx);
     nevigates('/DocWindow');

  }

  return (
    <UserContext.Provider
      value={{
        dataArray,
        setDateArray,
        gloStorageArray,
        setGloStorageArray,
        index,
        setIndex,
        windowDocHandler,
        editMode, 
        setEditMode,
        editOject,
        setEditOject,
        EditHandler,
        deleteHandler

      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;
