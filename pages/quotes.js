import React, {Component} from 'react'
import Quotes from '../containers/quotes/quotes'

import store from '../store';
import { Provider } from 'react-redux';


class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <Quotes />
            </Provider>
        )
    }
}

export default Container;