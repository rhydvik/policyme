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
export function setCoverageJson (payload) {
  return {
    type: actionTypes.SET_COVERAGE_JSON,
    payload
  }
}
export function setQuote (payload) {
  return {
    type: actionTypes.SET_QUOTE,
    payload
  }
}
export function sendPopulatedJson (payload) {
  console.log(payload.payload);
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
  console.log("EXPENSESSSSSSS")
  let newPayload = props.expense
  const s_id = props.s_id
  newPayload.user.expenses.categories = categories
  return (dispatch) => {

    fetch(`${ENDPOINT}expenses/${s_id}`,
    {
      method: 'PATCH' ,
      // mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Request-Method': 'PATCH'
        
      },
      body: JSON.stringify(newPayload)
    })
      .then(res => res.json())
      .then((fetchedData) => {
        console.log("PATCHED JSON", fetchedData)
      });
  };
}
export function updateUserDetail (payload) {
  console.log("UPADTE USER DEIAL",payload)
  const json = payload.json.jsonSkeleton;
  json.family.user.email = payload.user.email;
  json.family.user.first_name = payload.user.first_name;
  json.family.user.last_name = payload.user.last_name;
  return (dispatch) => {
    fetch(`${ENDPOINT}inputs/${payload.json.s_id}`,
    {
      method: 'PUT' ,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/Json',
        'Access-Control-Request-Method': 'PUT'
        
      },
      body: JSON.stringify(json)
    })
      .then(res => res.json())
      .then((fetchedData) => {
        console.log("PATCHED JSON", fetchedData)
        // dispatch(setSkeletonJson(fetchedData))
      });
    }
}


export function getCoverage (s_id) {
  s_id = '3325f70a-443b-11e8-842f-0ed5f89f718b'
  return async (dispatch) => {
    await fetch(`${ENDPOINT}coverage/${s_id}`)
      .then(res => res.json())
      .then((fetchedData) => {
        console.log('CoverageJson', fetchedData)
        dispatch(setCoverageJson(fetchedData))
        // dispatch(setSkeletonJson(fetchedData))
      });
  };
}

export function patchCoverage (payload) {
  const s_id = '3325f70a-443b-11e8-842f-0ed5f89f718b'
  // s_id = payload.s_id
  
  return (dispatch) => {
    fetch(`${ENDPOINT}coverage/${s_id}`,
    {
      method: 'PATCH' ,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Request-Method': 'PATCH'
        
      },
      body: JSON.stringify(payload.coverageJson)
    })
      .then(res => res.json())
      .then((fetchedData) => {
        console.log("PATCHED Coverage", fetchedData)
        // dispatch(setSkeletonJson(fetchedData))
      });
    }
}

export function getQuotes (payload) {
  
const { age, gender, use_tobacco } = payload.user.family.user
const amt = payload.coverageJson.options[0].selected ? payload.coverageJson.options[0].amt : payload.coverageJson.options[1].amt
const term = payload.coverageJson.user.term
  return async (dispatch) => {
    await fetch(`${ENDPOINT}quotes?amt=${amt}&term=${term}&age=${age}&gender=${gender}&is_smoker=${use_tobacco}`,
  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
      .then(res => res.json())
      .then((fetchedData) => {
        dispatch(setQuote(fetchedData))
      });
  };
}

export function patchQuote (payload) {
  let {s_id, quotes } = payload
  s_id = '9761e4a5-d83e-441f-a2c1-97f5280f8870'
  return (dispatch) => {
    fetch(`${ENDPOINT}quotes/${payload.s_id}`,
    {
      method: 'PATCH' ,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Request-Method': 'PATCH'
        
      },
      body: JSON.stringify(quotes)
    })
      .then(res => res.json())
      .then((fetchedData) => {
        console.log("PATCHED JSON", fetchedData)
        // dispatch(setSkeletonJson(fetchedData))
      });
    }
}