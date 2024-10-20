import React, { useContext } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { motion } from "framer-motion";
import { Link,useNavigate } from "react-router-dom";
import  UserContext  from "../Context/UserContext";
import { useState } from "react";

function Card({ data, refrence ,id }) {
  const nevigates = useNavigate();
  const {deleteHandler, windowDocHandler,index, setIndex, EditHandler,setEditMode, setEditOject,} = useContext(UserContext);
  const [ShowMenuBox, setShowMenubox] = useState(false);
  const des_prev =  `${data.descData.substring(0, 150)}...`;
  const MenuBar = ()=>{
    return(
    <div className=" absolute text-sm bg-white bg-opacity-80 text-black right-2  rounded  pl-0  ">
            <ul>
              <li  className=" cursor-pointer hover:bg-black hover:border-[0.5px] border-slate-300 hover:text-slate-200 hover:rounded px-2"
                onClick={()=>{
                   setIndex(id);
                   windowDocHandler(id);
                   setShowMenubox(prev =>(!prev));

                }}>Open</li>
              <li className=" cursor-pointer hover:bg-black  hover:border-[0.5px] border-slate-300 hover:text-slate-200 hover:rounded  px-2" 
              onClick={()=>{
                deleteHandler(id);
          
                setShowMenubox(prev =>(!prev));
                }}>Delete</li>
                
              <li  className=" cursor-pointer hover:bg-zinc-950 hover:border-[0.5px] border-slate-300 hover:text-slate-200 hover:rounded px-2"
              onClick={()=>{
                setEditOject(id);
                EditHandler(id);        
                setShowMenubox(prev =>(!prev));
              }} >Edit</li>
              <li  className=" cursor-pointer hover:bg-zinc-950 hover:border-[0.5px] border-slate-300 hover:text-slate-200 hover:rounded px-2" >Marke Star</li>
              <li  className=" cursor-pointer hover:bg-zinc-950 hover:border-[0.5px] border-slate-300 hover:text-slate-200 hover:rounded px-2" >Move Archive</li>
            </ul>
           </div>
          )
  }
  const Nothing = ()=>{
    <div className=" text-sm"> h</div>

  }

  return (
    <motion.div
      drag
      dragConstraints={refrence}
      onDoubleClick={()=>{
        // setIndex(id);
        windowDocHandler(id);
     }}
      className=" card relative h-[240px] w-[210px] rounded-[30px]  bg-zinc-950 text-zinc-100 pt-4 overflow-hidden"
    >
      {/* top part */}
      <div className="top mx-4" >
        <div className=" flex justify-between">
          
            <FaRegFileAlt size="20px"
            onClick={()=>{
               windowDocHandler(id);
            }}
             className="active:bg-violet-700"/>
          
          <div> 
          <SlOptionsVertical 
          className=" cursor-pointer focus:text-black focus:ring-violet-300"
          onClick={() =>{ 
            setShowMenubox(prev =>(!prev))
            ;}}
          size="17px" />
           {ShowMenuBox?<MenuBar/>:<Nothing/>} 
          </div>
         
        </div>
        <p
        dangerouslySetInnerHTML={{ __html:des_prev}}  
        // className=" text-sm text-zinc-100 mt-2  "
        className={` text-sm text-zinc-100   mt-2 ${ShowMenuBox ? "opacity-1 text-zinc-700" : "" }`}

        ></p>
      </div>

      {/* bottom  tags */}
      <div className="bottom_tag absolute bottom-0 h-19 w-full">
        <div className=" h-full w-full  flex flex-col">
          <div className=" tag w-full h-7  flex justify-between items-center px-3 bg-black ">
            <h6 className="texts text-xs font-bold  ">0.04mb</h6>
            <div className=" h-6 w-6 rounded-full flex items-center   justify-center  pb-[2px] bg-black">
              <LuDownload size="15px" />
            </div>
          </div>
          <div
            // style={{ backgroundColor: dynamicColor }}
            className={` w-full h-9 text-sm font-bold  flex items-center justify-center bg-blue-500`}
          >
            {/* {data.tags.tagTittle} */}
          </div>
        </div>
      </div>
    </motion.div>
    // ${data.tags.tagcolor}
  );
}

export default Card;
