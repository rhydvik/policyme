import React, {Component} from 'react'
import Expenses from '../containers/expenses/expenses'

import store from '../store';
import { Provider } from 'react-redux';


class Expense extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Provider store={store}>
                <Expenses />
            </Provider>
        )
    }
}

export default Expense;
