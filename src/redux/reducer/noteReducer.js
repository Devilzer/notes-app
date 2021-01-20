const initialState = {
    notes : [],
    search : ""
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
        default:
            return state;
    }
};

export default reducer;