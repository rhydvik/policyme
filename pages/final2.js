import React, {Component} from 'react'
import Final from '../containers/final2/final'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from '../store';
import { Provider } from 'react-redux';
import '../styles/index.sass'

class FinalScreen extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const id = this.props.url.query.id;
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                <Final id={id} />
                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default FinalScreen;
