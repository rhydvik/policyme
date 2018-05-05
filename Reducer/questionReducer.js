import * as actionTypes from 'utils/actionTypes';

const initialState = {
    questions: [],
    s_id: null
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

    default:
      return state;
  }
};
