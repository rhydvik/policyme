import React, {Component} from 'react'
import Final from '../containers/final/final'

import store from '../store';
import { Provider } from 'react-redux';


class Expense extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Provider store={store}>
                <Final />
            </Provider>
        )
    }
}

export default Expense;
