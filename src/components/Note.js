import React from 'react';
import { useDispatch } from "react-redux";
import { deletNote,setCurrentNote,setEditable } from "../redux/actions/noteActions";

function Note({note,index}) {
    const dispatch = useDispatch();
    const handleDelete = ()=>{
        dispatch(deletNote(note.id));
    }
    const handleCardClick= ()=>{
        dispatch(setCurrentNote(note));
        // console.log(note);
    }
    const handleEdit = ()=>{
        dispatch(setEditable(note.id));
        dispatch(setCurrentNote(note));
    }
    return (       
            <div className="note-container">
                <div className="title" onClick={handleCardClick}>
                    <h2 >
                        {note.title}
                    </h2>
                </div>
                <div className="date-btn">
                    <h4>
                        {note.date}
                    </h4>
                    <div className="btns">
                        <button onClick={handleEdit}><i className="fas fa-pencil-alt edit"></i></button>
                        <button onClick={handleDelete}><i className="far fa-trash-alt delete"></i></button>
                    </div>
                </div>
            </div>
    )
}

export default Note;
