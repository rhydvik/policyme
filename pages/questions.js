import React, { Component } from 'react';
import Questions from '../containers/questions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        const id = this.props.url.query.id;
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                   <Questions id={id} />
                </MuiThemeProvider>
            </Provider>
        )
    }
}


  export default QuestionsBox;
