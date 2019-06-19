import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED } from "../actions";

const initialState = {
  characters: [],
  fetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_START:
      return {
        ...state,
        fetching: true
      }
      case FETCH_SUCCESS:
        return {
          ...state,
          fetching: false,
          characters: action.payload
        }

    default:
      return state;
  }
};
