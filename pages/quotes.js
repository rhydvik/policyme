import React, {Component} from 'react'
import Quotes from '../containers/quotes/quotes'

import store from '../store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Quote extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                <Quotes />
                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default Quote;
