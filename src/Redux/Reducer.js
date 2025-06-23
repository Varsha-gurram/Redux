const initialState = {
  books: {"Data Structures":5,"C Programming":2},
  counter: 0,
};
const bookReducer=(state = initialState,action)=>{
    switch(action.type){
        case "ADD_BOOK":{
            const title=action.payload;
            return {
                ...state,
                books:{
                    ...state.books,
                    [title]:(state.books[title]||0)+1,
                },
            };
        }
            
        case "REMOVE_BOOK":{
            const title=action.payload;
            if(!state.books[title])return state;
            const count=state.books[title];
            const newBooks={...state.books};
            if(count>1){
                newBooks[title]=count-1;
            }
            else{
                delete newBooks[title];
            }
            return{
                ...state,
                books:newBooks,
            };
        }
        case "DELETE_BOOK":{
            const title=action.payload;
            const availbooks={...state.books};
            delete availbooks[title];
            return{
                ...state,
                books:availbooks,
            };
           
        }
        case "INCREMENT":
            return{
                ...state,
                counter:state.counter+action.payload
            }
        case "DECREMENT":
            return{
                ...state,
                counter:state.counter-action.payload,
            }
        default:
            return state;
    }
};
export default bookReducer;
