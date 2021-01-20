import React from 'react';
import NoteInput from "./NoteInput";
import SearchBox from "./SearchBox";
import NoteList from "./NoteList";

function HomePage() {
    return (
        <>
        <NoteInput/>
        <SearchBox/>
        <NoteList/>  
        </>
    )
}

export default HomePage;
