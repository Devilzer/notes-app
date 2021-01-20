import React,{useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { setCurrentNote, setEditable,resetEditable,editNote} from "../redux/actions/noteActions";
function NoteDetails() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [value,setValue]=useState({
        title : state.note.currentnote.title,
        description:state.note.currentnote.description,
        date:state.note.currentnote.date,
        id:state.note.currentnote.id,
        editable:false
    });

    const handleBackClick = ()=>{
        dispatch(resetEditable(state.note.currentnote.id));
        const obj = {};
        dispatch(setCurrentNote(obj));
    }

    const handleEditClick = ()=>{
        dispatch(setEditable(state.note.currentnote.id));
    }

    const handleSubmitEdit=()=>{
        dispatch(editNote(value));
        setValue({...value,editable:false});
    }

    var noteDetailsElement;
    if(state.note.currentnote.editable){
        noteDetailsElement = <div className="note-detail-container">
        <div className="btns">
          <button onClick={handleBackClick}><i className="fas fa-chevron-left"></i></button>
          <button onClick={handleSubmitEdit}><i className="fas fa-check"></i></button>
        </div>
        <div className="note-details">
          <input type="text" value={value.title} onChange={(e)=>setValue({...value,title:e.target.value})}/> 
          <h4>
            27-2-2021
          </h4>
          <textarea value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})}/>
        </div> 
      </div>;
    }
    else{
        noteDetailsElement=<div className="note-detail-container">
            <div className="btns">
            <button onClick={handleBackClick}><i className="fas fa-chevron-left"></i></button>
            <button onClick={handleEditClick}><i className="fas fa-pencil-alt edit"></i></button>
            </div>
            <div className="note-details">
            <h2>
                {state.note.currentnote.title}
            </h2>
            <h4>
                27-2-2021
            </h4>
            <p>
                {state.note.currentnote.description}
            </p>
            </div> 
        </div>;
    }


    
    return (
        <>
        {noteDetailsElement}
        </>
    )
}

export default NoteDetails;
