import React, { Component } from 'react';
import Questions from '../containers/questions';

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

            <Questions />

        )
    }
}

export default QuestionsBox;
