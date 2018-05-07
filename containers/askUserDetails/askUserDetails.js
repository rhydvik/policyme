import React, { Component } from 'react';
import Nav from '../../components/Nav/index'
import styles from './index.sass';
import Button from '../../components/Button/index';

class AskUserDetails extends Component {
    render() {
        return (
            <div className={styles.modalBox}>
                <div className={styles.modalNav}>
                    <Nav usedFor="questions" >
                        <img src="/static/images/close.svg" onClick={this.props.closeModal} />
                    </Nav>
                </div>
                <div className={styles.popupContainer}>
                    <p>Questions? ... Leave them here. </p>
                    <input
                        className={styles.input}
                        placeholder="Name"
                        onChange={(e) => console.log(e) }/>

                    <input
                        className={styles.input}
                        placeholder="Email"
                        onChange={(e) => console.log(e) }/>

                    <textarea
                        className={styles.input}
                        placeholder="Your Question..."
                        onChange={(e) => console.log(e) }/>

                    <Button  onClick={this.submitUserDetails}  label='Submit' />
                </div>
            </div>
        );
    }
}


export default AskUserDetails;
