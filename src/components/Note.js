import React from 'react';
import { useDispatch } from "react-redux";
//redux actions
import { deletNote,setCurrentNote,setEditable } from "../redux/actions/noteActions";

function Note({note}) {
    const dispatch = useDispatch();

    //delete note handler function
    const handleDelete = ()=>{
        dispatch(deletNote(note.id));
    }
    //function to set note for details page  
    const handleCardClick= ()=>{
        dispatch(setCurrentNote(note));
    }

    //set note edit status
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
