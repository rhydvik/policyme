import React, { Component } from 'react';
import Router from 'next/router';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TimePicker from 'material-ui/TimePicker';

import '../../styles/index.sass';

import Nav from '../../components/Nav/index'
import styles from './index.sass';
import Button from '../../components/Button/index';
import { connect } from 'react-redux';
import Loader from 'components/FullScreenLoader';
import {
    followUp,
} from '../../Actions/index'
import renderIf from "render-if";

class Final extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }


    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.followUp) Router.push('/final2');
    }


    handleInput = (e)  => {
        this.setState({phone: e.target.value, error: '' });
    };


    handleDateChange = (event, date) => {
        this.setState({ date, error: '' })
    };

    handleTimeChange = (event, time) => {
        this.setState({ time , error: '' })
    };

    combineDateAndTime = (date, time) => {
        console.log(date, time);
        let timeString = time.getHours() + ':' + time.getMinutes() + ':00';
        let year = date.getFullYear();
        let month = date.getMonth() + 1; // Jan is 0, dec is 11
        let day = date.getDate();
        let dateString = '' + year + '-' + month + '-' + day;
        let combined  = new Date(dateString + ' ' + timeString);

        return combined;
    };

    goBack = () => {
        const { id } = this.props;
        this.setState({ isLoading: true });
        Router.push(id ? `/quotes?id=${id}` : '/quotes')
    };

    changePage = () => {
        const { time, date, phone } = this.state;
        const { id } = this.props;
        if(time && date && phone) {
            this.setState({ isLoading: true })
            const timeStamp = this.combineDateAndTime(date, time);
            const payload = {
                phone,
                timeStamp
            }
            this.props.followUp(payload);
            Router.push(id ? `/final2?id=${id}` : '/final2');
        } else {
            this.setState({ error: 'Please fill all the details.' })
        }
    };

    render() {
        const { finalScreenLoading }= this.props;
        const { error } = this.state;
        return (
            <MuiThemeProvider>
                <div>
                    {renderIf(finalScreenLoading || this.state.isLoading)(<Loader />)}
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
                        <img
                            className="backArrow"
                            src='../../static/images/questions/backarrow.svg'
                            onClick={this.goBack} />

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
                            <p style={{ color: 'red', textAlign: 'left' }}>{error}</p>
                            <input placeholder="Phone Number" name="phone" onChange={this.handleInput}/>
                            <DatePicker
                                hintText="&#x25BE; Select Date"
                                className={styles.datePicker}
                                onChange={this.handleDateChange}
                            />
                            <TimePicker
                               hintText="&#x25BE; Time Slot"
                               className={styles.datePicker}
                               onChange={this.handleTimeChange}
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
    followUp,
};

const mapStateToProps = state => state.questionReducer;

export default connect(mapStateToProps, mapDispatchToProps)(Final);
