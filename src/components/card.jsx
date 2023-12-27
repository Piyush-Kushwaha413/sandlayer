import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card({ data, refrence }) {
  // here we want data object to showe data
  // but her we give just data Object-property

  // const dynamicColor = data.tags.tagcolor;

  return (
    <motion.div
      drag
      dragConstraints={refrence}
      className=" card relative h-[240px] w-[210px] rounded-[30px]  bg-zinc-950 text-zinc-100 pt-4 overflow-hidden"
    >
      {/* top part */}
      <div className="top mx-4">
        <div className=" flex justify-between">
          <Link to="/DocWindow">
            <FaRegFileAlt size="20px" />
          </Link>
          <SlOptionsVertical  size="17px" />
        </div>
        <p
        dangerouslySetInnerHTML={{ __html:data.descData }}  
        className=" text-sm text-zinc-100 mt-2 "></p>
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
