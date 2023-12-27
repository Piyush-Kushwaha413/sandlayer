
import React ,{ useRef, useState} from 'react'
import {Link} from "react-router-dom"
import { Editor } from '@tinymce/tinymce-react';
import { SlArrowLeftCircle } from "react-icons/sl";
import { useContext } from 'react';
import UserContext from '../Context/UserContext';


function TextEditor() {
    const editorRef = useRef(null);
    const {dataArray,setDateArray}  = useContext(UserContext);  
    const [descData,setDescData] = useState("");
    const [fileName,setfileName] = useState("");    
  

    const onSave = () => {
      // if (editorRef.current) {
        
        // setDescData(editorRef.current.getContent());
        setDateArray([...dataArray, {fileName,descData}]);
        console.log([...dataArray, {fileName,descData}]);
        setfileName("");
        setDescData("");

      // console.log(  [{fileName,descData}]);
       
        // // creact a item object {filename:"", dec:""}
        // const temItemObj = new Object();
        // temItemObj.fileName = fileName;
        // temItemObj.descData = description;
        // // setItemObject(temItemObj)
        // console.log(temItemObj);
        // console.log(dateArray);
        // // add the new object in dataArray with previion itemOject 
        // setDateArray([temItemObj,...dateArray]);
       
      // }
    };
    return (
        <div className='flex flex-col w-full h-screen max-w-full max-h-screen bg-[#222f3e]  justify-between gap-0 overflow-hidden' >

          <div className=' w-full h-12 px-5 flex items-center justify-between  text-white'>
          <Link to="/DocWindow" className='' >  <SlArrowLeftCircle size="28px"  /></Link>
          <div className=' text-white text-lg flex gap-1'>
           <input type="text"
           className=' text-black' 
           onChange={(e)=>{setfileName(e.target.value)}}
           name="fileName" 
           id="FileName" 
           value={fileName}
          
           />
           </div>
          <button onClick={onSave} className=' text-base px-5 py-1 rounded-md bg-black '>Save</button>
          </div>
           
        <Editor
    
          //  height='500px'
            
            onInit={(evt, editor) => editorRef.current = editor}
            apiKey='le9w353m0h8xz36mkjwt83s6e3luusq7lebg3jl5fckv3v0h'
            initialValue={descData}
            init={{
              height: 620,
              menubar: true,
              skin: 'oxide-dark',
              content_css: 'dark',
              plugins: [
                'advlist','image', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; ::selection {color: aquamarine;}  }'
            }}
            onEditorChange={(e)=>(setDescData(e))}
            
          />

           <div 
           className=' text-white'
           dangerouslySetInnerHTML={{ __html:descData }}></div>
          
          </div>
      )
}

export default TextEditor