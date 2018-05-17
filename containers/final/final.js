import React, { Component } from 'react';
import Router from 'next/router';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TimePicker from 'material-ui/TimePicker';

import Nav from '../../components/Nav/index'
import styles from './index.sass';
import Button from '../../components/Button/index';
import { connect } from 'react-redux';
import Loader from 'components/FullScreenLoader';
import {
    updateUserDetail,
    setAdvice
} from '../../Actions/index'
import renderIf from "render-if";

class Final extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            user: {
                email: '',
                first_name: '',
                last_name: ''
            }

        };
    }


    submitUserDetails = () => {
        this.props.updateUserDetail({
                user: this.state.user,
                json: this.props.jsonSkeleton
            }
        )
    };

    handleInput = (e)  => {
        const {user} = this.state;
        user[e.target.name] = e.target.value;
        this.setState({user})
    };

    componentDidMount () {
        this.props.setAdvice()
    }
    changePage = () => {
        this.submitUserDetails();
        this.setState({ isLoading: true })
        Router.push('/final2');
    };

    render() {
        const { isLoading }= this.state;
        return (
            <MuiThemeProvider>
                <div>
                    {renderIf(isLoading)(<Loader />)}
                    <Nav
                        usedFor="questions"
                        showQuestionMark={true}
                        showHeader={false}
                        openModal={this.openModal}
                        progressBar="95"
                    >
                        <img src="/static/images/questions/question.svg"  onClick={this.openModal} />
                    </Nav>
                    <div className={styles.finalContainer}>
                        <div className={styles.textBox}>
                            <img src="../../static/images/alex.jpg" />
                            <p>
                                Thanks for answering my questions!  That's all I
                                need to provided your customized life insurance advice.
                            </p>
                            <p>
                                If you choose to leave your information, we can save your progress.
                            </p>
                        </div>
                        <div className={styles.inputContainer}>
                            <input placeholder="First Name" name="first_name" onChange={this.handleInput}/>
                            <DatePicker
                                hintText="&#x25BE; Select Date"
                                className={styles.datePicker}
                            />
                            <TimePicker
                               hintText="&#x25BE; Time Slot"
                               className={styles.datePicker}
                            />
                        </div>
                        <div className={styles.buttonContainer}>
                        <Button onClick={this.changePage} label="NEXT" />
                        </div>
                        <br />
                        <div className={styles.buttonContainer}>
                            <p className={styles.header}>DISCLAIMER</p>
                            <p className={styles.message}>
                                By providing your contact information above,
                                you agree to this website's Privacy Policy,
                                and your consent to email the email address
                                provided to verify your identity for our
                                insurance services and for marketing.
                                We don't share or sell your information with third parties.
                            </p>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


const mapDispatchToProps = {
    updateUserDetail,
    setAdvice
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Final);
