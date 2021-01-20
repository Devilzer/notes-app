import { showNotification } from "../../config/noty";

export const createNote = (value)=>{
    showNotification("Note Created!");
    return{
        type:"CREATE_NOTE",
        payload: value
    };
};
export const updateSearch = (text)=>{
    return{
        type : "UPDATE_SEARCH",
        payload : text
    };
};

export const deletNote = (id)=>{
    showNotification("Note Deleted!");
    return {
        type : "DELETE_NOTE",
        payload : id
    };
};

export const setCurrentNote = (object)=>{
    return{
        type:"SET_CURRENT_NOTE",
        payload : object
    };
};

export const setEditable = (id)=>{
    return{
        type:"SET_EDIT",
        payload : id
    };
};
export const resetEditable = (id)=>{
    return{
        type:"RESET_EDIT",
        payload : id
    };
};

export const editNote = (object)=>{
    showNotification("Note Updated!");
    return{
        type : "EDIT_TODO",
        payload : object
    };
};