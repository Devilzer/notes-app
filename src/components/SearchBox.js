import React from 'react';
import { useSelector ,useDispatch } from "react-redux";
import { updateSearch } from "../redux/actions/noteActions";

function SearchBox() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    // constantly updating the search value in state onchange.
    return (
        <div className="search-container">
            <input type="text" value={state.note.search} onChange={(e)=>dispatch(updateSearch(e.target.value))} placeholder="Search title..."/>
        </div>
    )
}

export default SearchBox;
