import React, { useRef, useState, useEffect, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { SlArrowLeftCircle } from "react-icons/sl";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TextEditor() {
  const editorRef = useRef(null);
  const nevigates = useNavigate();
  const {
    dataArray,
    setDateArray,
    gloStorageArray,
    editOject,
    editMode,
    setEditMode,
    setEditOject,
  } = useContext(UserContext);
  const [descData, setDescData] = useState(
    editMode ? gloStorageArray[editOject].descData: ""
  );
  const [fileName, setfileName] = useState(
    editMode ? gloStorageArray[editOject].fileName : ""
  );
  // Toast Handler
  const onSaveNotify = () =>
    toast.success("docCard saved succesfully", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const emptyNotify = () =>
    toast.info("inputs find empty", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  //function: save data in localstorage  take a new input and creact a object and then add in dataArary
  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem("maintask", JSON.stringify(updatedTasks));
  };

  // SaveHandler
  const onSave = async () => {
    const date = new Date();
    const dateTime = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
    if (editorRef.current) {
      if (descData !== "") {
        if (editMode) {
          console.log(editMode);
          console.log("if: ");
          let copyOject = { fileName, descData, dateTime };
          gloStorageArray.splice(editOject, 1, copyOject);
          saveTasksToLocalStorage([...gloStorageArray]);
          setEditMode(false);
          setEditOject(" ");
          setfileName("");
          setDescData("");
          onSaveNotify();
          nevigates("/");
        } else {
          console.log(editMode);
          console.log("else: ");
          setDateArray([...dataArray, { fileName, descData, dateTime }]);
          saveTasksToLocalStorage([
            ...dataArray,
            { fileName, descData, dateTime },
          ]);
          setfileName("");
          setDescData("");
          onSaveNotify();
          nevigates("/");
        }
      } else {
        emptyNotify();
      }
    }
  };

  // Back btn Handler
  const backHandler = () => {
    history.back();
    if (editMode) {
      // if(history.length >= 2) history.back();
      setEditMode(false);
      setEditOject("");
    }
  };
  return (
    <div className="flex flex-col w-full h-screen max-w-full max-h-screen bg-[#222f3e]  justify-between gap-0 overflow-hidden">
      <div className=" w-full h-12 px-5 flex items-center justify-between  text-white">
        <SlArrowLeftCircle
          size="28px"
          onClick={() => {
            backHandler();
          }}
        />
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
          onClick={() => {
            onSave();
          }}
          className=" text-base px-5 py-1 rounded-md bg-black "
        >
          Save
        </button>
        <span className=" absolute z-0">
          <ToastContainer />
        </span>
      </div>
      <Editor

        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey= {import.meta.env.VITE_tinyMCE_APIkey}
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
      <ToastContainer />
    </div>
  );
}
export default TextEditor;
