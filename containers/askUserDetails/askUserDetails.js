import React, { Component } from 'react';
import Router from 'next/router';
import Nav from '../../components/Nav/index'
import styles from './index.sass';
import Button from '../../components/Button/index';

class AskUserDetails extends Component {
    showCoverages = () => {
        Router.push('/coverages');
    };

    render() {
        return (
            <div>
                <Nav
                    usedFor="questions"
                    showQuestionMark={true}
                    showHeader={false}
                    openModal={this.openModal}
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
                        <input placeholder="First Name" />
                        <input placeholder="Last Name" />
                        <input placeholder="Email" />
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


export default AskUserDetails;
