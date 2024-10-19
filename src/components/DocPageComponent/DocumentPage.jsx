import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";
import {
  LuArrowBigLeft,
  LuArrowBigRight,
  LuFileSignature,
} from "react-icons/lu";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import parse from "html-react-parser";




function DocumentPage() {
  const {index, setIndex,gloStorageArray,EditHandler} = useContext(UserContext);
  
  useEffect(()=>{
    // console.log(gloStorageArray[index].fileName);
    // console.log(gloStorageArray[index].descData);
    // console.log(gloStorageArray[index].dateTime);
  },[])

  
  return (
    <div className=" scrollH w-full min-h-screen h-auto bg-black pt-4 flex flex-col items-center  ">
      <div className=" navbar  w-full flex px-7 text-white justify-between  items-center ">
        <div className=" flex gap-10 items-center">
          <Link to="/" onClick={()=>{
            setIndex(" ")
          }}>
            {" "}
            <SlArrowLeftCircle size="30px" />
          </Link>
          <div className=" text-white text-lg flex gap-1">
          {gloStorageArray[index].fileName}
          </div>
        </div>

        <div className=" flex   ">
          <LuArrowBigLeft size="30px" />
          <LuArrowBigRight size="30px" />
        </div>
      </div>

      <div className="secNavBar w-[90%]  px-8 flex flex-col justify-between items-center text-white mt-5 ">
        <div className="flex justify-between items-center w-full">
          <div className=" datecomponent text-sm "> 🗓️{gloStorageArray[index].dateTime}</div>
          {/* <Link to="/textEditor"> */}
            <LuFileSignature
              size="45px"
              className="p-2 rounded-md border-white border-[1.5px] bg-slate-300 bg-opacity-20"
              onClick={()=>(
                EditHandler(index)
              )}

            />
          {/* </Link> */}
        </div>
        

        {/* text area */}
        <div className=" textarea mt-4 w-full h-auto scrollH mb-5"
        // dangerouslySetInnerHTML={{ __html:gloStorageArray[index].descData }}
        >
          {parse(gloStorageArray[index].descData)}
                 </div>
      </div>
    </div>
  );
}

export default DocumentPage;
