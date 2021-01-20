import React from 'react';

function NoteDetails() {
    return (
        <div className="note-detail-container">
            <div className="btns">
            <button><i className="fas fa-chevron-left"></i></button>
            <button><i className="fas fa-pencil-alt edit"></i></button>
            </div>
            <div className="note-details">
            <h2>
                this is note title
            </h2>
            <h4>
                27-2-2021
            </h4>
            <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
            </p>
            </div> 
        </div>
    )
}

export default NoteDetails;
