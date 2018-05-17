import * as actionTypes from 'utils/actionTypes';

const initialState = {
    questions: [],
    s_id: null,
    jsonSkeleton: {},
    expense: {},
    coverageJson:{},
    quote: []
};




function populateFamily (family, json) {
  family.forEach((x)=> {
    if(x !== undefined){
    switch(x.json_key) {
      case 'userAge':
        json.user.age = x.inputs[0].value
        break;
      case 'userGender':
        json.user.gender = buttonValue(x.inputs).label
        break;
      case 'healthIssue':
        json.user.health_issues = buttonValue(x.inputs).label
        break;
      case 'smoke':
        json.user.use_tobacco = buttonValue(x.inputs).label
        break;
      case 'userIncome':
        json.user.income = x.inputs[0].value  
        break;
      case 'children':
        if(x.subQuestion.length) { json.children = makeChildren(x.subQuestion[0].inputs) }
        break;
      case 'spouse':
        json.spouse = makeSpouse(x)
        break;
      default:
        return false
        
    }
  }
  })
  return json
}

function populateFinance (finances, json) {
  finances.forEach((x)=> {
    if(x !== undefined){
    switch(x.json_key) {
      case 'debts':
        json.debts = buttonValue(x.inputs).label === 'Yes' ? makeDebts(x.subQuestion[0]) : json.debts
        break;
      case 'mortage':
      if (buttonValue(x.inputs).label === 'Rent' ) {
        json.expenses.mortgage_or_rent = makeRent(x.subQuestion[0])
      } else {
        json.mortgage = makeMortage(x.subQuestion[1])
      }
        break;
      case 'savings':
        json.savings = buttonValue(x.inputs).label === 'Yes' ? makeSavings(x.subQuestion[0]) : json.savings
        break;
      default:
        return false
        
    }
  }
  })
  return json
}
function buttonValue (inputs) {
  for(let i=0; i< inputs.length; i++) {
    if(inputs[i].value) {
      return inputs[i]
    } else { return {label: '', value: ''}}
  }
}
function makeChildren (inputs) {
  let children = []
  for(let i=0; i< inputs.length; i++) {
    if(inputs[i].value) {
      children.push({[inputs[i].label]: inputs[i].value})
    }
  }
  return children
}
function makeSpouse (inputs) {
  if(inputs.inputs[0].value) {
  return {gender: buttonValue(inputs.subQuestion[0].inputs).label, age: inputs.inputs[0].value}
  } else return {}
}

function makeDebts (inputs) {
  const input = inputs.inputs
  return {
    credit_cards: input[0].value,
    credit_line: input[3].value,
    home_equity_loans: input[2].value,
    student_loans: input[1].value,
    other: [],

  }
} 
function makeRent (inputs) {
  return inputs.inputs[0].value
}
function makeMortage(inputs) {
  return {current_mortage: inputs.inputs[0].value, monthly_payment: inputs.inputs[1].value}
}
function makeSavings (inputs) {
  return {retirement_savings: inputs.inputs[0].value, non_retirement_savings: inputs.inputs[1].value}
}
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
    case actionTypes.POPULATE_JSON:
      console.log(action.payload)
      const json = state.jsonSkeleton
      const { payload } = action
      const family = payload.map((x) => {
        if (x !== undefined  && x.category === 'family') {
          return x
        }
      })
      json.family = populateFamily(family, json.family)
      const finances = payload.map((x) => {
        if (x !== undefined  && x.category === 'finances') {
          return x
        }
      })
      json.finances = populateFinance(finances, json.finances)
      console.log('ASJKDOEIOWEUROIUWE(*#@$',json)
      return { ...state, jsonSkeleton: json }
      break;
    case actionTypes.SET_EXPENSE:
  
      return { ...state, expense: action.payload}
      break;

    case actionTypes.SET_COVERAGE_JSON:
      return { ...state, coverageJson: action.payload} 
      break;
    case actionTypes.SET_QUOTE:
      return { ...state, quote: action.payload} 
      break;
    default:
      return state;
  }
};
