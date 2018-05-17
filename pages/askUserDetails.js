import React, {Component} from 'react'
import AskUserDetails from '../containers/askUserDetails/askUserDetails'

import store from '../store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UserDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
              <MuiThemeProvider>
                <AskUserDetails />
              </MuiThemeProvider>
            </Provider>
        )
    }
}

export default UserDetails;
