const initialState = {
    notes : [],
    search : "",
    currentnote:{}
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case "CREATE_NOTE":
            return {
                ...state,
                notes : [...state.notes,action.payload]
            };
        case "UPDATE_SEARCH":
            return{
                ...state,
                search : action.payload
            };
        case "DELETE_NOTE":
            var deleteIndex = state.notes.findIndex(obj=>obj.id===action.payload);
            const listAfterDelete = state.notes;
            listAfterDelete.splice(deleteIndex,1);
            return{
                ...state,
                notes : listAfterDelete
            };
        case "SET_CURRENT_NOTE":
            return{
                ...state,
                currentnote : action.payload
            };
        case "SET_EDIT":
            var index = state.notes.findIndex(obj=>obj.id===action.payload);
            let setEditList = state.notes;
            setEditList[index].editable =true;
            return{
                ...state,
                notes : setEditList
            };
        case "RESET_EDIT":
            var rindex = state.notes.findIndex(obj=>obj.id===action.payload);
            let resetEditList = state.notes;
            resetEditList[rindex].editable =false;
            return{
                ...state,
                notes : resetEditList
            };
        case "EDIT_TODO":
            const editIndex = state.notes.findIndex(obj=>obj.id===action.payload.id);
            let listAfterEdit = state.notes;
            listAfterEdit[editIndex]=action.payload;
            return{
                ...state,
                notes : listAfterEdit,
                currentnote :action.payload
            };
        default:
            return state;
    }
};

export default reducer;