import React, { Component } from 'react';
import Nav from 'components/Nav';
import Button from 'components/Button';

import question from '../constants/qustions';
import styles from '../styles/index.sass';

class Questions extends Component{
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            currentQuestion: {},
        };
    }
    componentWillMount(){
        this.setState({ currentQuestion: question[this.state.questionIndex] })
    }
    handleButtonChange = (i) => {
        const temp = Object.assign({}, question[0]);
        console.log('temp', temp);
        const currentButton = temp.inputs[i];
        currentButton.value = true;
        temp.inputs[i] = currentButton;
        this.setState({ currentQuestion:  temp });
    };

    next = () => {
      console.log('next');
    };

    validate =(name) => {
        if(this.state.name === undefined) return true;
    };
    handleInputField = (type, name) => {

    };

    getInputOptions = (data) => {
        switch (data.type) {
            case 'BUTTON':
                return(
                    <div className={styles.buttonContainer}>
                        {data.inputs.map((button, i) => (
                                <Button
                                label={button.label}
                                onClick={() => this.handleButtonChange(i)}
                                buttonStyle={button.value !== null ? styles.selectedButton : styles.disabledButton}
                            />
                          ))}
                     </div>
                );
            case 'INPUT':
                return (
                    <div className='columns'>
                        {data.inputs.map(button => (
                            <div className='column'>
                               <Button label={button.label} onChange={() => this.handleChange(data.type, name)}
                               />
                            </div>
                        ))}
                    </div>
                )
        }
    };

    getCurrentQuestion = (data) => {
        return(
            <div className={styles.questionContainer}>
                <div className={styles.questionBox}>
                   {data.question}
                </div>
                <div className={styles.inputsContainer}>
                    {this.getInputOptions(data)}
                </div>
            </div>
        )
    };

    validateQuestion = () => {
        const { currentQuestion } = this.state;
        console.log('currentQuestion.type', currentQuestion);
        switch (currentQuestion.type) {
            case 'BUTTON':
                console.log(currentQuestion.type);
                for(let i =0; i<currentQuestion.inputs.length; i++){
                   if(currentQuestion.inputs[i].value !== null) return true
                }
                return false;
        }
    };

    render(){
        const temp = {...question[this.state.questionIndex]};
        console.log('temp', temp);
        let nextDisabled = this.validateQuestion();
        return(
        <div>
            <Nav />
            {this.getCurrentQuestion(question[this.state.questionIndex])}
            <Button label="NEXT" buttonStyle={nextDisabled ? styles.greenButton :  styles.redButton} disabled={nextDisabled} onClick={this.next} />
        </div>
        )
    }
}

export default Questions;
