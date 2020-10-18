export const initialState = {
  user: null,
};

export const actionType = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log("asdasdasdas")
  console.log(action)
  switch (action.type) {
    case actionType.SET_USER:
      console.log("state 01")
      console.log(state)
      console.log(" action.user")
      console.log(action.user)
      return {
        ...state,
        user: action.user,
      };
      
    default:
      console.log("state")
      console.log(state)
      return state;
     
  }
};

export default reducer;
