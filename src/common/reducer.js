export const initialState = {
  User: null,
  isVisible: false,
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_VISIBLE: "SET_VISIBLE",
};
const reducer = (state, action) => {
  if (action) {
    switch (action.type) {
      case actionTypes.SET_USER:
        return { ...state, User: action.User };
      case actionTypes.SET_VISIBLE:
        return { ...state, isVisible: action.isVisible };
      default:
        return state;
    }
  }
};
export const getUser = () => {
  return (
    sessionStorage.getItem("ME") && JSON.parse(sessionStorage.getItem("ME"))
  );
};
export default reducer;
