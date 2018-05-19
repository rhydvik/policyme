import React, {Component} from 'react'
import Final from '../containers/final/final'

import store from '../store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/index.sass'
class Expense extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Provider store={store}>
               <MuiThemeProvider>
                 <Final />
               </MuiThemeProvider>
            </Provider>
        )
    }
}

export default Expense;
