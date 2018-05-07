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
  let newPayload = props
  newPayload.user.expenses.categories = categories
  console.log(newPayload)
  return (dispatch) => {

  //   fetch(`${ENDPOINT}expenses/9761e4a5-d83e-441f-a2c1-97f5280f8870`,
  //   {
  //     method: 'PATCH' ,
  //     // mode: 'no-cors',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'text/html; charset=utf-8',
  //       'Access-Control-Request-Method': 'PATCH'
        
  //     },
  //     body: JSON.stringify(newPayload)
  //   })
  //     .then(res => res.json())
  //     .then((fetchedData) => {
  //       console.log("PATCHED JSON", fetchedData)
        // dispatch(setSkeletonJson(fetchedData))
  //     });
  };
}
export function updateUserDetail (payload) {
  console.log(payload, payload.user)
  const json = payload.json;
  json.family.user.email = payload.user.email;
  json.family.user.first_name = payload.user.first_name;
  json.family.user.last_name = payload.user.last_name;
  console.log(json);
  return (dispatch) => {
    fetch(`${ENDPOINT}inputs/${payload.s_id}`,
    {
      method: 'PATCH' ,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Request-Method': 'PATCH'
        
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
  return (dispatch) => {
    fetch(`${ENDPOINT}coverage/${s_id}`)
      .then(res => res.json())
      .then((fetchedData) => {
        console.log(fetchedData)
        dispatch(setCoverageJson(fetchedData))
        // dispatch(setSkeletonJson(fetchedData))
      });
  };
}

export function patchCoverage (payload) {
  const json = payload.json;
  const coverage = payload.coverage;
  let { user } = json
  Object.keys(user.additional).map((x)=>{
    user.additional[x] = coverage[x]
  })
  Object.keys(user.existing).map((x)=>{
    user.existing[x] = coverage[x]
  })
  json.user.term = coverage.term
  json.user = user
  console.log(json)
  return (dispatch) => {
    fetch(`${ENDPOINT}inputs/${payload.s_id}`,
    {
      method: 'PATCH' ,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Request-Method': 'PATCH'
        
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

export function getQuotes (payload) {
  return (dispatch) => {
    fetch(`${ENDPOINT}quotes?amt=100000&term=10&age=30&gender=female&is_smoker=true`,
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