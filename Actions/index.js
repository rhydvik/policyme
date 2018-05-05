import * as actionTypes from '../utils/actionTypes';

export function addQuestion(payload) {
  return {
      type: actionTypes.ADD_QUESTION,
      payload
    };
}
