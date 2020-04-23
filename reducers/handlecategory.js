const handlecategoryReducer = (state = "", action) => {
    switch(action.type){
        case 'SETCATEGORY':
            return action.payload;
        default:
            return state;
    }
};

export default handlecategoryReducer;