import React, { useEffect, useState } from "react";
import Card from "./card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Forgound() {
 
  const ref = useRef(null);
  const { dataArray , setGloStorageArray , gloStorageArray,EditHandler } = useContext(UserContext);
  const [curtTaskArray, setcurtTaskArray] = useState(dataArray);
  useEffect(()=>{
    setcurtTaskArray([...gloStorageArray]);

  },[gloStorageArray])

  // debug 05
  useEffect(() => {
    let copyArray = JSON.parse(localStorage.getItem("maintask")) ||[];
      setcurtTaskArray(copyArray);
      setGloStorageArray(copyArray);
      
      // if (localStorage.getItem("maintask") === " " ){
      //   console.log("localStorage : is empty");
      // }
      //   else {
      //     // console.log("localstorage: get something ");
      //   }

      

    

  }, []);


  return (
    <div className="for_return-div absolute">
      <motion.div
        ref={ref}
        className=" motion_div w-screen h-screen  flex flex-wrap gap-x-4 gap-y-4 p-5"
      >
        {curtTaskArray.map((itme, index) => (
          <Card key={index} data={itme} refrence={ref} id={index}  />
        ))}
      </motion.div>

      <Link to="/textEditor" className=" fixed bottom-1 right-2 px-5 py-5 ">
        <IoIosAdd size="45px" className="  bg-black text-white rounded-lg" />
      </Link>
    </div>
  );
}

export default Forgound;
