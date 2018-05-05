import * as actionTypes from '../utils/actionTypes';
import { ENDPOINT } from '../config'

export function addQuestion(payload) {
  return {
      type: actionTypes.ADD_QUESTION,
      payload
    };
}
export function setSessionId (payload) {
  console.log(payload)
  return {
    type: actionTypes.SET_SESSION_ID,
    payload
  }
}
export function setAdvice() {
  return (dispatch) => {
    fetch(`${ENDPOINT}inputs`, {
      header: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      // mode: 'no-cors',
      method: 'POST'
    })
      .then(res => res.json())
      .then((fetchedData) => {
        console.log(fetchedData)
        dispatch(setSessionId(fetchedData));
      });
  };
}
