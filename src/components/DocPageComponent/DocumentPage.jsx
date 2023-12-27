import React from "react";
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

function DocumentPage() {
  const {} = useContext(UserContext);
  return (
    <div className=" scrollH w-full min-h-screen h-auto bg-black pt-4 flex flex-col items-center  ">
      <div className=" navbar  w-full flex px-7 text-white justify-between  items-center ">
        <div className=" flex gap-10 items-center">
          <Link to="/">
            {" "}
            <SlArrowLeftCircle size="30px" />
          </Link>
          <div className=" text-white text-lg flex gap-1">
            {/* <FaRegFileAlt size='25px'/> */}
            File name.....
          </div>
        </div>

        <div className=" flex   ">
          <LuArrowBigLeft size="30px" />
          <LuArrowBigRight size="30px" />
        </div>
      </div>

      <div className="secNavBar w-[90%]  px-8 flex flex-col justify-between items-center text-white mt-5 ">
        <div className="flex justify-between items-center w-full">
          <div className=" datecomponent "> Date at time</div>
          <Link to="/textEditor">
            {" "}
            <LuFileSignature
              size="45px"
              className="p-2 rounded-md border-white border-[1.5px] bg-slate-300 bg-opacity-20  "
            />
          </Link>
        </div>
        

        {/* text area */}
        <div className=" textarea mt-4 w-full h-auto scrollH mb-5"
        // dangerouslySetInnerHTML={{ __html:descData }}
        >
          {/* <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambledLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text <br /> <br />
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambledLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text <br /> <br />
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambledLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text <br /> <br />
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default DocumentPage;
