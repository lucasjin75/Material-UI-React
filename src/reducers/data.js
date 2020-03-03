let data = {
    userId: null,
    id: null,
    title: "",
    completed: false
}
function reducer(state = { data: {...data}}, action) {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  