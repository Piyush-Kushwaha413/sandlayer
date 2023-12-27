import React from "react";
import Card from "./card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Forgound() {
  // here we make the
  const ref = useRef(null);
  const {dataArray} = useContext(UserContext);
  console.log(dataArray);

  const cardData = [
    {
      description:
        dataArray.descData,
      fileSize: "0.0mb",
      fileName:dataArray.fileName,
      close: "true",
      tags: {
        isOpen: "fale",
        tagTittle: "Downlowd.",
        tagcolor: "aquamarine",
      },
    },
    {
      description:
        " it's your birthdat man it's your birthdy❤️ Voluptatem nisi laborum aspernatur",
      fileSize: "0.10mb",
      close: "true",
      tags: {
        isOpen: "true",
        tagTittle: "Download.",
        tagcolor: "cornflowerblue",
      },
    },
  ];

  

  return (
    <div>
      <motion.div
        ref={ref}
        className=" w-screen h-screen absolute  flex flex-wrap gap-6"
      >
        {dataArray.map((itme, index) => (
          <Card key={index} data={itme} refrence={ref} />
        ))}
      </motion.div>

      <Link to="/textEditor" className=" absolute bottom-1 right-2 px-5 py-5 ">
        
          <IoIosAdd size="45px" className="  bg-black text-white rounded-lg" />
        
      </Link>
    </div>
  );
}

export default Forgound;
