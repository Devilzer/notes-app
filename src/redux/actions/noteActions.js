import { showNotification } from "../../config/noty";

//create note action  
export const createNote = (value)=>{
    showNotification("Note Created!");
    return{
        type:"CREATE_NOTE",
        payload: value
    };
};

//action to update search value
export const updateSearch = (text)=>{
    return{
        type : "UPDATE_SEARCH",
        payload : text
    };
};

//action to delete note based in id
export const deletNote = (id)=>{
    showNotification("Note Deleted!");
    return {
        type : "DELETE_NOTE",
        payload : id
    };
};

//action for setting current note for note details page 
export const setCurrentNote = (object)=>{
    return{
        type:"SET_CURRENT_NOTE",
        payload : object
    };
};

//action to update the note edit status
export const setEditable = (id)=>{
    return{
        type:"SET_EDIT",
        payload : id
    };
};

//action to update the note edit status
export const resetEditable = (id)=>{
    return{
        type:"RESET_EDIT",
        payload : id
    };
};

//action to update the note with new details
export const editNote = (object)=>{
    showNotification("Note Updated!");
    return{
        type : "EDIT_TODO",
        payload : object
    };
};