const LoggedReducer =(state=true,action) =>{
    switch(action.type){
        case 'LOG':
            return !state;
        default:
            return state;
    }
} 
export default LoggedReducer;