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
        const id = this.props.url.query.id;
        return (
            <Provider store={store}>
               <MuiThemeProvider>
                 <Coverages id={id} />
               </MuiThemeProvider>
            </Provider>
        )
    }
}

export default Container;
