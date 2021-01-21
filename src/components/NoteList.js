import React from 'react';
import { useSelector } from "react-redux";
import Note from "./Note";
function NoteList() {
    const state = useSelector(state => state);
    var filtered = []; //array to store search filtered notes.
    //filter conditions.
    if(state.note.search!==""){
       filtered = state.note.notes.filter(note=>{
           return note.title.toLowerCase().indexOf(state.note.search.toLowerCase())!==-1;
       }) 
    }else{
        filtered = [...state.note.notes];
    }
    return (
        <div className="list-container">
            {
                filtered.map((note,index)=>(
                    <Note
                        note ={note}
                        key={index}
                        index={index}
                    />
                ))
            }


        </div>
    )
}

export default NoteList;
