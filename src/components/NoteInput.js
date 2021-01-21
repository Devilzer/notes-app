import React,{useState} from 'react';
import { useDispatch , useSelector} from "react-redux";
import { createNote } from "../redux/actions/noteActions";
import { showNotification } from "../config/noty";

function NoteInput() {
    const today = new Date();
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [value,setValue]=useState({
        title :"",
        description :"",
        date : today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
        editable : false,
        id : Date.now()
    }); 
    
    const handleClick = () =>{
        const noteList = [...state.note.notes];
        let index = noteList.findIndex(obj=>obj.title===value.title)
        // console.log(value);
        
        if(value.title==="" || value.description===""){
            showNotification("please fill all details.");
            return;
        }
        else if(index!==-1){
            showNotification("Title already exists.");
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
