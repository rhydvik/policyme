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
  return async (dispatch) => {
    await fetch(`${ENDPOINT}quotes?amt=100000&term=10&age=30&gender=female&is_smoker=true`,
  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
      .then(res => res.json())
      .then((fetchedData) => {
        console.log(fetchedData)
        dispatch(setQuote(fetchedData))
      });
  };
}

export function patchQuote (payload) {
  const {s_id, quotes, selected} = payload
  const updated = quotes.map((x) => {
    if (x.company === selected ) {
      x.selected = true
    }
    return x
  }) 
  console.log(updated)
  return (dispatch) => {
    fetch(`${ENDPOINT}quote/${payload.s_id}`,
    {
      method: 'PATCH' ,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Request-Method': 'PATCH'
        
      },
      body: JSON.stringify(updated)
    })
      .then(res => res.json())
      .then((fetchedData) => {
        console.log("PATCHED JSON", fetchedData)
        // dispatch(setSkeletonJson(fetchedData))
      });
    }
}