import React, {Component} from 'react'
import Coverages from '../containers/coverages/coverages'

import store from '../store';
import { Provider } from 'react-redux';


class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <Coverages />
            </Provider>
        )
    }
}

export default Container;
