import * as actionTypes from '../utils/actionTypes';
import { ENDPOINT } from '../config'
import { createGzip } from 'zlib';

export function addQuestion(payload) {
  return {
      type: actionTypes.ADD_QUESTION,
      payload
    };
}
export function setSessionId (payload) {
  return {
    type: actionTypes.SET_SESSION_ID,
    payload
  }
}
export function setSkeletonJson (payload) {
  return {
    type: actionTypes.SET_SKELETON_JSON,
    payload
  }
}
export function setAdvice() {
  return (dispatch) => {
    fetch(`${ENDPOINT}inputs`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      mode: 'no-cors',
      method: 'POST'
    })
      .then(res => res.json())
      .then((fetchedData) => {
        dispatch(setSessionId(fetchedData));
        dispatch(getSkeletonJson(fetchedData.id))
      });
  };
}

export function getSkeletonJson (s_id)  {
  return (dispatch) => {
    fetch(`${ENDPOINT}inputs/${s_id}`)
      .then(res => res.json())
      .then((fetchedData) => {
        dispatch(setSkeletonJson(fetchedData))
      });
  };
}

export function populateJson (payload) {
  return  {
    type: actionTypes.POPULATE_JSON,
    payload
  };
}

export function setExpense (payload) {
  return {
    type: actionTypes.SET_EXPENSE,
    payload
  }
}
export function sendPopulatedJson (payload) {
  console.log(payload.payload)
  return (dispatch) => {
    fetch(`${ENDPOINT}inputs/${payload.s_id}`,
    {
      method: 'PUT' ,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload.payload)
    })
      .then(res => res.json())
      .then((fetchedData) => {
        dispatch(getExpenses(payload.s_id))
        console.log("POPULATED JSON", fetchedData)
        // dispatch(setSkeletonJson(fetchedData))
      });
  };
}

export function getExpenses (s_id) {
  return (dispatch) => {
    fetch(`${ENDPOINT}expenses/${s_id}`)
      .then(res => res.json())
      .then((fetchedData) => {
        dispatch(setExpense(fetchedData))
        console.log("RESPONSE JSON", fetchedData)
        // dispatch(setSkeletonJson(fetchedData))
      });
  };
}

export function patchExpense (props,categories) {
  let newPayload = props
  console.log(props)
  newPayload.user.expenses.categories = categories
  return (dispatch) => {
    fetch(`${ENDPOINT}expenses/9761e4a5-d83e-441f-a2c1-97f5280f8870`,
    {
      method: 'PATCH' ,
      // mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin':  'localhost:3000',
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Request-Method': 'PATCH'
        
      },
      body: JSON.stringify(newPayload)
    })
      .then(res => res.json())
      .then((fetchedData) => {
        console.log("PATCHED JSON", fetchedData)
        // dispatch(setSkeletonJson(fetchedData))
      });
  };
}
