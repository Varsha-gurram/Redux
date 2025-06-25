export const addBook=(name)=>({
    type:"ADD_BOOK",
    payload:name,
});
export const removeBook=(name)=>({
    type:"REMOVE_BOOK",
    payload:name
});
export const increment=(number)=>({
    type:"INCREMENT",
    payload:number,
});
export const decrement=(number)=>({
    type:"DECREMENT",
    payload:number,
});
export const deleteBook=(name)=>({
    type:"DELETE_BOOK",
    payload:name,

});
export const incrementM=(value)=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch({type:"INCREMENT",payload:value});
        },2000);
    };
};