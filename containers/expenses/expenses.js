import React, {Component} from 'react'
import {connect} from "react-redux";
import Router from 'next/router';
import Nav from "../../components/Nav";
import Button from "../../components/Button";
import styles from './index.sass'

class About extends Component {
    constructor(props) {
        super(props)
    }

    looksGood = () => {
        console.log(this.props);
        Router.push('/askUserDetails');
    };

    seeBreakDown = () => {
        console.log(this.props);
        Router.push('/result');
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
                    <Button onClick={this.looksGood} label="Yes" />
                    <Button onClick={this.seeBreakDown} label="SEE BREAKDOWN"  />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, {})(About);
