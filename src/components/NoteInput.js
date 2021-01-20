import React from 'react';

function NoteInput() {
    return (
        <div className="input-container">
            <input type="text" required placeholder="Title"/>
            <textarea placeholder="Type something..."/>
            <button>Add</button>
        </div>
    )
};

export default NoteInput;
