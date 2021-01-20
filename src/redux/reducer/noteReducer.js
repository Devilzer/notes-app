const initialState = {
    notes : []
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case "CREATE_NOTE":
            return state;
        default:
            return state;
    }
};

export default reducer;