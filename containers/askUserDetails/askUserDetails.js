import React, { Component } from 'react';
import Router from 'next/router';
import renderIf from 'render-if';
import Loader from 'components/FullScreenLoader';
import Nav from '../../components/Nav/index'
import styles from './index.sass';
import '../../styles/index.sass';
import Button from '../../components/Button/index';
import { connect } from 'react-redux';
import {
    updateUserDetail,
    setAdvice
} from '../../Actions/index';

class AskUserDetails extends Component {
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
        const { id } = this.props;
        this.setState({ isLoading: true });
        this.props.updateUserDetail({
            user: this.state.user,
            json: this.props
        }
        );
        Router.push(id !== undefined ? `/coverages?id=${id}` : '/coverages');
    };

    handleInput = (e)  => {
        const {user} = this.state
        user[e.target.name] = e.target.value
        this.setState({user , error: ''});
    }


    showCoverages = () => {
        const { first_name, last_name, email } = this.state.user;
        let user = {};
        if(this.props.jsonSkeleton !== undefined){
            user = this.props.jsonSkeleton.family.user;
        }
        console.log('*****', (first_name !== '' && last_name !== '' && email !== '') || (user.first_name !== ''), first_name, user.first_name)
        if((first_name !== '' && last_name !== '' && email !== '') || (user.first_name !== '')){
            this.submitUserDetails()
        } else this.setState({ error: 'Please fill all the details.' });


    };

    goBack = () => {
        const { id } = this.props;
        this.setState({ isLoading: true });
        Router.push(id ? `/expenses?id=${id}` : '/expenses')
    };

    render() {
        const { isLoading, error } = this.state;
        let user = {};
        if(this.props.jsonSkeleton !== undefined){
            user = this.props.jsonSkeleton.family.user;
        }

        return (
            <div>
                {renderIf(isLoading)(<Loader />)}
                <Nav
                    usedFor="questions"
                    showQuestionMark={true}
                    showHeader={false}
                    openModal={this.openModal}
                    progressBar="65"
                >
                    <img src="/static/images/questions/question.svg"  onClick={this.openModal} />
                </Nav>
                <div className={styles.container}>
                    <div className={styles.textBox}>
                        <img
                            className="backArrow"
                            src='../../static/images/questions/backarrow.svg'
                            onClick={this.goBack} />

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
                        <input placeholder="First Name" value={this.state.user.first_name || user.first_name } name="first_name" onChange={this.handleInput}/>
                        <input placeholder="Last Name" value={this.state.user.last_name || user.last_name} name="last_name"onChange={this.handleInput} />
                        <input placeholder="Email" value={this.state.user.email || user.email} name="email" onChange={this.handleInput}/>
                    </div>
                    <Button onClick={this.showCoverages} label="NEXT" />
                    <br />
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
        );
    }
}


const mapDispatchToProps = {
    updateUserDetail,
    setAdvice
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(AskUserDetails);
