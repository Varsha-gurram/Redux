import bookReducer from "./Reducer";
import ReducerM from "./ReducerM";
const rootReducer=(state,action)=>{
    const inState=bookReducer(state,action);
    return{
        ...inState,
        counter:ReducerM(inState.counter,action)
    };
};
export default rootReducer;