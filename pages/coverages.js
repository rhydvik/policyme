import React, {Component} from 'react'
import Coverages from '../containers/coverages/coverages'

import store from '../store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
               <MuiThemeProvider>
                 <Coverages />
               </MuiThemeProvider>
            </Provider>
        )
    }
}

export default Container;
