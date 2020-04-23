const handleresultsReducer = (state = [], action) => {
    switch(action.type){
        case 'SETRESULT':
            return action.payload;
        default:
            return state;
    }
};

export default handleresultsReducer;