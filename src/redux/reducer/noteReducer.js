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
            }
        default:
            return state;
    }
};

export default reducer;