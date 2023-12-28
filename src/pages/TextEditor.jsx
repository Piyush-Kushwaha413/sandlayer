import React, { useRef, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { SlArrowLeftCircle } from "react-icons/sl";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function TextEditor() {
  const editorRef = useRef(null);
  const nevigates = useNavigate();
  const { dataArray, setDateArray } = useContext(UserContext);
  const [descData, setDescData] = useState("");
  const [fileName, setfileName] = useState("");

  const emptyNotify = () =>toast.info('inputs find empty', {
    position: "bottom-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  
    const onSaveNotify = () =>toast.success('docCard saved succesfully', {
    position: "bottom-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const onSave = async () => {
    if (editorRef.current) {
      if (descData !== "") {
        console.log("Alert : function :onSave  if, execet");
        await setDateArray([...dataArray, { fileName, descData }]);
        setfileName("");
        setDescData("");
        onSaveNotify();
        nevigates("/");
        
      }
     else {
      emptyNotify()
     
     }
    }
  };
  return (
    <div className="flex flex-col w-full h-screen max-w-full max-h-screen bg-[#222f3e]  justify-between gap-0 overflow-hidden">
      <div className=" w-full h-12 px-5 flex items-center justify-between  text-white">
        <Link to="/DocWindow" className="">
          {" "}
          <SlArrowLeftCircle size="28px" />
        </Link>
        <div className=" text-white text-lg flex gap-1">
          <input
            type="text"
            className=" text-black"
            onChange={(e) => {
              setfileName(e.target.value);
            }}
            name="fileName"
            id="FileName"
            value={fileName}
          />
        </div>
        <button
          onClick={()=>{onSave()
          }}
          className=" text-base px-5 py-1 rounded-md bg-black "
        >
          Save
        </button>
        <span className=" absolute z-0"><ToastContainer /></span> 
      </div>

      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        // apiKey='le9w353m0h8xz36mkjwt83s6e3luusq7lebg3jl5fckv3v0h'
        // initialValue={descData}
        value={descData}
        init={{
          height: 620,
          menubar: true,
          skin: "oxide-dark",
          content_css: "dark",
          plugins: [
            "advlist",
            "image",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; ::selection {color: aquamarine;}  }",
        }}
        onEditorChange={(onchange) => setDescData(onchange)}
      />

      {/* <div 
           className=' text-white'
           dangerouslySetInnerHTML={{ __html:descData }}></div> */}
           <ToastContainer />
    </div>
  );
}

export default TextEditor;
