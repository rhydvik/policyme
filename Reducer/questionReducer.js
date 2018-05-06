import * as actionTypes from 'utils/actionTypes';

const initialState = {
    questions: [],
    s_id: null,
    jsonSkeleton: {}
};



export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
    const { qi, question } = action.payload
      state.questions[qi] = question
      return { ...state };
      break;
    case actionTypes.SET_SESSION_ID:
      return { ...state, s_id: action.payload.id }
      break;
    case actionTypes.SET_SKELETON_JSON:
      return { ...state, jsonSkeleton: action.payload }
      break;

    default:
      return state;
  }
};
