import React, { Component } from 'react';
import Nav from 'components/Nav';
import Button from 'components/Button';
import renderIf from 'render-if';
import cn from 'classnames';
import question from '../constants/questions';
import styles from '../styles/index.sass';
import { connect } from 'react-redux';
import {
    addQuestion
} from '../Actions'
class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            currentQuestion: {},
        };
    }
    componentWillMount() {
        this.props.addQuestion({qi:this.state.questionIndex, question: question[this.state.questionIndex]});
        this.setState({ currentQuestion: question[this.state.questionIndex] })
    }
    handleButtonChange = (i) => {
        // debugger;
        const temp = Object.assign({}, question[this.state.questionIndex]);
        const inputs = this.resetButtonStatus(question[this.state.questionIndex].inputs)
        temp.inputs = inputs
        const currentButton = temp.inputs[i];
        currentButton.value = true;
        temp.inputs[i] = currentButton;
        this.setState({ currentQuestion: temp });
    };
    handleSubQuestionButtonChange = (i) => {
        // debugger;
        const currentQuestionTemp = Object.assign({}, question[this.state.questionIndex]);
        const temp = Object.assign({}, question[this.state.questionIndex].subQuestion[0]);
        const inputs = this.resetButtonStatus(question[this.state.questionIndex].subQuestion[0].inputs)
        temp.inputs = inputs
        const currentButton = temp.inputs[i];
        currentButton.value = true;
        temp.inputs[i] = currentButton;
        currentQuestionTemp.subQuestion[0] = temp;
        this.setState({ currentQuestion: currentQuestionTemp });
        // debugger;
    };
    resetButtonStatus = (inputs) => {
        return inputs.map((x) =>{
            x.value = null
            return x
           })
    }

    handleInputChange = (i, e) => {
        const temp = this.state.currentQuestion;
        temp.inputs[i].value = parseInt(e.target.value);
        this.setState({ currentQuestion: temp });
    };

    handleSubQuestionInputChange = (i, e) => {
        const temp = this.state.currentQuestion.subQuestion[0];
        // const currentInput = temp.inputs[i];
        temp.inputs[i].value = parseInt(e.target.value);
        // temp.inputs[i] = currentInput;
        this.setState({ currentQuestion: temp });
    };

    next = () => {
        const qi = this.state.questionIndex;
        this.setState({ questionIndex: qi + 1, currentQuestion: question[qi + 1] });
        this.props.addQuestion({qi, question: question[qi + 1]});
    };

    goBack = () => {
        const qi = this.state.questionIndex;
        this.setState({ questionIndex: qi - 1, currentQuestion: question[qi - 1] })
    }

    validate = (name) => {
        if (this.state.name === undefined) return true;
    };
    handleInputField = (type, name) => {

    };

    getInputOptions = (data) => {
        switch (data.type) {
            case 'BUTTON':
                return (
                    <div className={data.alignInOnline ? styles.alignInputsInOneLine : styles.inputsContainer}>
                        {data.inputs.map((input, i) => (
                            <Button
                                label={input.label}
                                onClick={() => data.isSubQuestion !== undefined ? this.handleSubQuestionButtonChange(i) : this.handleButtonChange(i)}
                                buttonStyle={input.value !== null ? styles.selectedButton : styles.disabledButton}
                            />
                        ))}
                    </div>
                );
            case 'INPUT':
                return (
                    <div className={cn('columns', data.inputs.length > 1 ? styles.inputBorderContainer : '')}>
                        {data.inputs.map((input, i) => (
                            <div className={cn('column', data.inputs.length > 1 ? styles.rightAlignedInputContainer: '')}>
                                {data.inputs.length > 1 ? <span>{input.label}</span> : '' }
                                <input
                                    className={styles.input}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    value={input.value}
                                    onChange={(e) => input.isSubQuestion !== undefined ? this.handleSubQuestionInputChange(i) : this.handleInputChange(i, e)} />
                            </div>
                        ))}
                    </div>
                )
        }
    };

    getCurrentQuestion = (data) => {
        return (
            <div className={styles.questionContainer}>
                <div className={styles.questionBox}>
                    <img src="../static/images/alex.png" />
                    {data.question}
                </div>
                <div className={styles.inputsContainer}>
                    {this.getInputOptions(data)}
                </div>
            </div>
        )
    };

    getSubQuestion = (question) => {
        if (question.subQuestion === undefined) return;
        // debugger;
        const { currentQuestion } = this.state;
        const subQuestion = currentQuestion.subQuestion;
        for (let i = 0; i < currentQuestion.inputs.length; i++) {
            // debugger;
            const currentInputValue = currentQuestion.inputs[i].value;
            if (currentInputValue !== null && currentInputValue !== '') {
                let qindex = 0
                if(currentQuestion.type === 'BUTTON' && currentQuestion.subQuestion) {
                    if(currentQuestion.inputs[i].subQuestionIndex !== undefined) {
                        qindex = currentQuestion.inputs[i].subQuestionIndex
                    } else { return false; }
                }
                return (
                    <div>
                        {console.log('subQuestion[i].question', subQuestion)}
                        {subQuestion[qindex].question}
                        {this.getInputOptions(subQuestion[qindex])}
                    </div>
                )
            }
        }
    };

    validateQuestion = () => {
        const { currentQuestion } = this.state;
        if (currentQuestion.overrideValidation !== undefined) return true
        switch (currentQuestion.type) {
            case 'BUTTON':
                // debugger;
                for (let i = 0; i < currentQuestion.inputs.length; i++) {
                    if (currentQuestion.inputs[i].value !== null && currentQuestion.subQuestion === undefined) {
                        console.log('returning true from rupu dp hee hee hee');
                        return true
                    } else if (currentQuestion.subQuestion !== undefined) {
                        for (let i = 0; i < currentQuestion.subQuestion[0].inputs.length; i++) {
                            console.log('4 tarik dp, hee hee hee');
                            if (currentQuestion.subQuestion[0].inputs[i].value !== null) return true
                        }
                    }
                }
                return false;
            case 'INPUT':
                for (let i = 0; i < currentQuestion.inputs.length; i++) {
                    const value = currentQuestion.inputs[i].value;
                    const validationRules = currentQuestion.inputs[i].validationRules;
                    let validInput = false;
                    if (validationRules !== undefined) {
                        if (value < validationRules.maximum && value > validationRules.minimum) {
                            validInput = true;
                        }
                        if (validInput && currentQuestion.subQuestion === undefined) {
                            // debugger;
                            return true
                        } else if (currentQuestion.subQuestion !== undefined) {
                            let validInputCount = 0;
                            // debugger;
                            for (let i = 0; i < currentQuestion.subQuestion[0].inputs.length; i++) {
                                const currentInput = currentQuestion.subQuestion[0].inputs[i];
                                if (currentInput.value !== '' && currentQuestion.subQuestion[0].type === 'INPUT') {
                                    validInputCount = validInputCount + 1;
                                } else if (currentInput.value !== null && currentQuestion.subQuestion[0].type === 'BUTTON') {
                                    validInputCount = currentQuestion.subQuestion[0].inputs.length;
                                }
                            }
                            if (validInputCount === currentQuestion.subQuestion[0].inputs.length && validInput) return true
                            // debugger;
                        } else return false
                    }
                    if (value !== null && value !== '' && currentQuestion.subQuestion === undefined) {
                        console.log('returning true from hulululu');
                        return true
                    }
                    return true
                    // debugger;
                }
        }
    };

    render() {
        console.log(this.props)
        const { questionIndex } = this.state;
        let nextDisabled = this.validateQuestion();
        console.log('****', this.state.currentQuestion)
        return (
            <div className={styles.mainBox}>
                <Nav usedFor="questions" showHeader={false} />
                {renderIf(questionIndex > 1)(
                    <img className={styles.backArrow} src='../static/images/questions/backArrow.png' onClick={this.goBack} />
                )}
                {this.getCurrentQuestion(question[this.state.questionIndex])}
                {this.getSubQuestion(question[this.state.questionIndex])}
                <div className={styles.questionContainer}>
                    <Button label={questionIndex === 0 ? "GET STARTED" : "NEXT" } buttonStyle={nextDisabled ? styles.nextEnabled : styles.nextDisabled} disabled={nextDisabled} onClick={this.next} />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = {
    addQuestion
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
