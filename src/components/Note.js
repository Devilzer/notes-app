import React from 'react';
import { useSelector } from "react-redux";

function Note({note}) {
    const state = useSelector(state => state);

    
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
                        <button><i className="far fa-trash-alt delete"></i></button>
                    </div>
                </div>
            </div>
  
    )
}

export default Note;
