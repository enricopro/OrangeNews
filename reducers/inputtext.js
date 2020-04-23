const inputtextReducer = (state = "", action) => {
    switch(action.type){
        case 'CHANGETEXT':
            return action.payload;
        default:
            return state;
    }
};

export default inputtextReducer;