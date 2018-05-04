import * as actionTypes from 'utils/actionTypes';

const initialState = {
    questions: []
};



export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
      return { ...state, questions: state.questions.concat(action.payload) };
    default:
      return state;
  }
};
