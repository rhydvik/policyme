import * as actionTypes from 'utils/actionTypes';

const initialState = {
    questions: []
};



export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
    const { qi, question } = action.payload
      state.questions[qi] = question
      return { ...state };
    default:
      return state;
  }
};
