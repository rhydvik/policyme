import React, {Component} from 'react'
import AskUserDetails from '../containers/askUserDetails/askUserDetails'

import store from '../store';
import { Provider } from 'react-redux';


class UserDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <AskUserDetails />
            </Provider>
        )
    }
}

export default UserDetails;
