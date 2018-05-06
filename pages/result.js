import React, { Component } from 'react';
import Results from '../containers/result';
// import withRedux from 'next-redux-wrapper';
import store from '../store';
import { Provider } from 'react-redux';
import { initialize } from 'react-ga';
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            currentQuestion: {},
        };
    }


    render() {
        return (
            <Provider store={store}>
                <Results />
            </Provider>
            
        )
    }
}


  export default Result;
