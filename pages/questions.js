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

    handleInputChange = (i, value) => {
        const temp = Object.assign({}, question[0]);
        console.log('temp', temp);
        const currentButton = temp.inputs[i];
        currentButton.value = value;
        temp.inputs[i] = currentButton;
        this.setState({ currentQuestion:  temp });
    };

    next = () => {
      this.setState({ questionIndex : this.state.questionIndex+1 })
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
                    <div className={data.alignInOnline ? styles.alignInputsInOneLine : styles.inputsContainer}>
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
                        {data.inputs.map((input, i) => (
                            <div className='column'>
                               <input className={styles.input} placeholder="Age" onChange={() => this.handleInputChange(i, name)}
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
        console.log('asdas', nextDisabled);
        return(
        <div className={styles.mainBox}>
            <Nav />
            {this.getCurrentQuestion(question[this.state.questionIndex])}

            <Button label="NEXT" buttonStyle={nextDisabled ? styles.nextEnabled :  styles.nextDisabled} disabled={nextDisabled} onClick={this.next} />
        </div>
        )
    }
}

export default Questions;
