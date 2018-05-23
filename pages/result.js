import React, { Component } from 'react';
import Results from '../containers/result/result';
// import withRedux from 'next-redux-wrapper';
import store from '../store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            currentQuestion: {},
        };
    }


    render() {
        const id = this.props.url.query.id;
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                  <Results id={id} />
                </MuiThemeProvider>
            </Provider>

        )
    }
}


  export default Result;
