import React, {Component} from 'react'
import Expenses from '../containers/expenses/expenses'

import store from '../store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Expense extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const id = this.props.url.query.id;
        return (
            <Provider store={store}>
               <MuiThemeProvider>
                  <Expenses id={id} />
               </MuiThemeProvider>
            </Provider>
        )
    }
}

export default Expense;
