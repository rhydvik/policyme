import React, { Component } from 'react';
import Nav from 'components/Nav';
import Button from 'components/Button';
import renderIf from 'render-if';
import cn from 'classnames';
import question from '../constants/questions';
import styles from '../styles/index.sass';
import { connect } from 'react-redux';
import Link from 'next/link'
import Router from 'next/router';
import {
    addQuestion,
    setAdvice,
    populateJson,
    sendPopulatedJson
} from '../Actions'
import Modal from '../components/Modal/index';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 12,
            currentQuestion: {},
            modalIsOpen: false
        };
    }
    componentWillMount() {

        this.props.addQuestion({qi:this.state.questionIndex, question: question[this.state.questionIndex]});
        this.setState({ currentQuestion: question[this.state.questionIndex] })
    }
    componentDidMount() {
        this.props.setAdvice()
    }

    handleButtonChange = (i) => {
        // //debugger;
        const temp = Object.assign({}, question[this.state.questionIndex]);
        const inputs = this.resetButtonStatus(question[this.state.questionIndex].inputs);
        temp.inputs = inputs;
        const currentButton = temp.inputs[i];
        currentButton.value = true;
        temp.inputs[i] = currentButton;
        this.setState({ currentQuestion: temp });
    };
    handleSubQuestionButtonChange = (i) => {
        // //debugger;
        const currentQuestionTemp = Object.assign({}, question[this.state.questionIndex]);
        const temp = Object.assign({}, question[this.state.questionIndex].subQuestion[0]);
        const inputs = this.resetButtonStatus(question[this.state.questionIndex].subQuestion[0].inputs);
        temp.inputs = inputs;
        const currentButton = temp.inputs[i];
        currentButton.value = true;
        temp.inputs[i] = currentButton;
        currentQuestionTemp.subQuestion[0] = temp;
        this.setState({ currentQuestion: currentQuestionTemp });
        // //debugger;
    };
    resetButtonStatus = (inputs) => {
        return inputs.map((x) =>{
            x.value = null;
            return x;
           });
    };

    handleInputChange = (i, e) => {
        const temp = this.state.currentQuestion;
        temp.inputs[i].value = parseInt(e.target.value);
        this.setState({ currentQuestion: temp });
    };


    handleSubQuestionInputChange = (e,input) => {
        // debugger;
        console.log("ASDADSDA#EQ#@$", input)
        const temp = this.state.currentQuestion;
        const index = input.subQuestionIndex || 0
        const temp1 = temp.subQuestion[index]
        temp1.inputs[e.target.id].value = parseInt(e.target.value);
        temp.subQuestion[index] = temp1;
        this.setState({ currentQuestion: temp }, () => console.log(this.state.currentQuestion));
    };

    next = () => {
        const qi = this.state.questionIndex;
        this.setState({ questionIndex: qi + 1, currentQuestion: question[qi + 1] });
        this.props.addQuestion({qi, question: question[qi + 1]});
        if (this.state.currentQuestion.last) {
            this.props.populateJson(this.props.questions)
            this.props.sendPopulatedJson({payload: this.props.jsonSkeleton, s_id: this.props.s_id })
            Router.push('/result')

        }
    };

    goBack = () => {
        const qi = this.state.questionIndex;
        this.setState({ questionIndex: qi - 1, currentQuestion: question[qi - 1] })
    };

    validate = (name) => {
        if (this.state.name === undefined) return true;
    };
    handleInputField = (type, name) => {

    };


    openModal = () => {
        this.setState({modalIsOpen: true});
    };


    closeModal = () => {
        this.setState({modalIsOpen: false});
    };
    getInputClass = (data) => {
        if (data.inputs.length > 1 || !data.addon) {
           return  styles.alignInputsInOneLine
        } else return ''
    }
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
                    <div className={cn((data.inputs.length > 1 || data.addon) ? styles.inputBorderContainer : '')}>
                        {data.inputs.map((input, i) => (
                            <div className={cn('column', (data.inputs.length > 1 || data.addon) ? styles.rightAlignedInputContainer: '')}>
                                {(data.inputs.length > 1 || data.addon) ? <span>{input.label}</span> : '' }
                                <input
                                    className={styles.input}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    value={input.value}
                                    id={i}
                                    onChange={(e) => data.isSubQuestion !== undefined ? this.handleSubQuestionInputChange(e,input) : this.handleInputChange(i, e)} />
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
        const { currentQuestion } = this.state;
        if(currentQuestion.addOn && currentQuestion.subQuestion.length ) {
            const subQuestion = currentQuestion.subQuestion;
                 return subQuestion.map(x=>
                     <div style={{ maxWidth: '300px', margin: 'auto' }}>
                        {x.question}
                        {this.getInputOptions(x)}
                    </div>)
        }
        const subQuestion = currentQuestion.subQuestion;
        for (let i = 0; i < currentQuestion.inputs.length; i++) {
            // //debugger;
            const currentInputValue = currentQuestion.inputs[i].value;
            if (currentInputValue !== null && currentInputValue !== '') {
                let qindex = 0;
                if(currentQuestion.type === 'BUTTON' && currentQuestion.subQuestion) {
                    if(currentQuestion.inputs[i].subQuestionOpen !== undefined) {
                        qindex = currentQuestion.inputs[i].subQuestionOpen
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
                // //debugger;
                for (let i = 0; i < currentQuestion.inputs.length; i++) {
                    if (currentQuestion.inputs[i].value !== null && currentQuestion.subQuestion === undefined) {
                        console.log('3');
                        return true
                    } else if (currentQuestion.subQuestion !== undefined) {
                        console.log('**^^^**', currentQuestion.subQuestion);
                        for (let i = 0; i < currentQuestion.subQuestion[0].inputs.length; i++) {
                            console.log('4');
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
                            for (let i = 0; i < currentQuestion.subQuestion[0].inputs.length; i++) {
                                const currentInput = currentQuestion.subQuestion[0].inputs[i];
                                if (currentInput.value !== '' && currentQuestion.subQuestion[0].type === 'INPUT') {
                                    validInputCount = validInputCount + 1;
                                } else if (currentInput.value !== null && currentQuestion.subQuestion[0].type === 'BUTTON') {
                                    validInputCount = currentQuestion.subQuestion[0].inputs.length;
                                }
                            }
                            if (validInputCount === currentQuestion.subQuestion[0].inputs.length && validInput) return true

                        } else return false
                    }
                    if (value !== null && value !== '' && currentQuestion.subQuestion === undefined) {
                        console.log('returning true from hulululu');
                        return true
                    }
                    return true;
                }
        }
    };
    handleAddOn = () => {
        const { questionIndex, currentQuestion } = this.state;
        let q =  {
            question: '',
            type: 'INPUT',
            name: 'child',
            addon: true,
            isSubQuestion: true,
            inputs:[]
        }
        const noOfChild = (currentQuestion.subQuestion.length) ? (currentQuestion.subQuestion[0].inputs.length + 1) : 1
            const inputs =
                {
                    label: `Child ${noOfChild}`,
                    value: '',
                    placeholder: 'age'
                }


            if(!currentQuestion.subQuestion.length) {
                q.inputs.push(inputs)
                currentQuestion.subQuestion.push(q)
            } else {
                console.log("SUBQUESI", currentQuestion)
                currentQuestion.subQuestion[0].inputs.push(inputs)
            }
        this.setState({currentQuestion})
    };

    addOn = (question) => {
        return (
            <div className="addOnBtn"  >
                  <button className={styles.buttonBox} onClick={this.handleAddOn} >+ Add Child</button>
            </div>
        )
    };

    render() {
        // console.log(this.props)
        const { questionIndex, currentQuestion } = this.state;
        let nextDisabled = this.validateQuestion();
        console.log(this.props);
        return (
            <div className={styles.mainBox}>
                <Nav
                    usedFor="questions"
                    showQuestionMark={true}
                    showHeader={false}
                    openModal={this.openModal}
                >
                  <img src="/static/images/questions/question.svg"  onClick={this.openModal} />
                </Nav>
                {renderIf(questionIndex > 1)(
                    <img className={styles.backArrow} src='../static/images/questions/backArrow.png' onClick={this.goBack} />
                )}
                {this.getCurrentQuestion(currentQuestion)}
                {/* {question.subQuestion ? this.getSubQuestion(question[this.state.questionIndex]) : ''} */}
                {this.getSubQuestion(currentQuestion)}
                {currentQuestion.addOn ? this.addOn(currentQuestion) : ''}
                <div className={styles.questionContainer}>
                    <Button label={questionIndex === 0 ? "GET STARTED" : "NEXT" } buttonStyle={nextDisabled ? styles.nextEnabled : styles.nextDisabled} disabled={nextDisabled} onClick={this.next} />
                    {renderIf(this.state.modalIsOpen)(
                      <Modal  isOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
                    )}
                    {renderIf(currentQuestion.questionText !== undefined)(
                        <a className={styles.questionText} onClick={this.openModal}>
                            {currentQuestion.questionText}
                        </a>
                    )}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = {
    addQuestion,
    setAdvice,
    populateJson,
    sendPopulatedJson
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
