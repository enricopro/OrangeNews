export const changetext = (e) => {
    return{
        type: 'CHANGETEXT',
        payload: e
    }
}
export const handleresults = (e) => {
    return{
        type: 'SETRESULT',
        payload: e
    }
}
export const handlecategory = (e) => {
    return{
        type: 'SETCATEGORY',
        payload: e
    }
}