import React, { Component } from 'react';
import Router from 'next/router';
import Nav from '../../components/Nav/index'
import styles from './index.sass';
import '../../styles/index.sass';
import Button from '../../components/Button/index';
import { connect } from 'react-redux';
import {
    updateUserDetail,
    setAdvice
} from '../../Actions/index'
class AskUserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            json: this.props
        }
        )
    }

    handleInput = (e)  => {
        console.log(e.target.name)
        const {user} = this.state
        user[e.target.name] = e.target.value
        this.setState({user})
    }
    componentDidMount () {
    }
    showCoverages = () => {
        this.submitUserDetails()
        Router.push('/coverages');
    };

    render() {
        console.log(this.props);
        return (
            <div>
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
                        <img src="../../static/images/alex.png" />
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
                        <input placeholder="Last Name" name="last_name"onChange={this.handleInput} />
                        <input placeholder="Email" name="email" onChange={this.handleInput}/>
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
