export const createNote = (value)=>{
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
    return {
        type : "DELETE_NOTE",
        payload : id
    };
};