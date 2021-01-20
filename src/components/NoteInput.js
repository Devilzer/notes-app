import React,{useState} from 'react';
import { useDispatch  } from "react-redux";
import { createNote } from "../redux/actions/noteActions";
import { showNotification } from "../config/noty";

function NoteInput() {
    const today = new Date();
  
    const dispatch = useDispatch();
    const [value,setValue]=useState({
        title :"",
        description :"",
        date : today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
        editable : false,
        id : Date.now()
    }); 
    
    const handleClick = () =>{
        // console.log(value);
        if(value.title==="" || value.description===""){
            showNotification("please fill all details");
            return;
        }
        dispatch(createNote(value));
        setValue({...value,title:"",description:"",date:today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),id:Date.now()});
    };
    return (
        <div className="input-container">
            <input type="text" value={value.title} onChange={(e)=>setValue({...value,title:e.target.value})} placeholder="Title"/>
            <textarea value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})} placeholder="Type something..."/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
};

export default NoteInput;
