import React from 'react';
import { useDispatch } from "react-redux";
import { deletNote } from "../redux/actions/noteActions";

function Note({note,index}) {
    const dispatch = useDispatch();
    const handleDelete = ()=>{
        dispatch(deletNote(note.id));
    }
    return (       
            <div className="note-container">
                <div className="title">
                    <h2>
                        {note.title}
                    </h2>
                </div>
                <div className="date-btn">
                    <h4>
                        {note.date}
                    </h4>
                    <div className="btns">
                        <button><i className="fas fa-pencil-alt edit"></i></button>
                        <button onClick={handleDelete}><i className="far fa-trash-alt delete"></i></button>
                    </div>
                </div>
            </div>
    )
}

export default Note;
