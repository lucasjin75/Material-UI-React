
let user = {
    username:'',
    password:'',
    is_logined: false
}
 
function reducer(state = {user: {...user}}, action){
switch (action.type) {
    case "UPDATE_USER":
        return {
            ...state,
            user: action.user
        }
    default:
        return state;
  }
}
 
export default reducer;