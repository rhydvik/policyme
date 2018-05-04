import React, { Component } from 'react';
import Questions from '../containers/questions';
// import withRedux from 'next-redux-wrapper';
import store from '../store';
import { Provider } from 'react-redux';
import { initialize } from 'react-ga';
class QuestionsBox extends Component {
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
                <Questions />
            </Provider>
        )
    }
}


  export default QuestionsBox;
