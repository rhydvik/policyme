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
                    progressBar="40"
                >
                    <img src="/static/images/questions/question.svg"  onClick={this.openModal} />
                </Nav>
                <div className={styles.container}>
                    <div className={styles.textBox}>
                        <img src="../../static/images/alex.jpg" />
                        <p>
                            We estimate that families like yours save
                            about <span>$6,000 per year</span> and spend
                            about <span> $10,000 - $12,000 </span> per month.
                        </p>
                        <p>
                            We estimated these numbers by
                            analyzing the spending patterns of millions of Canadians.
                        </p>
                        <p>
                            However, your family might spend differently.
                            If this is the case, you can see a breakdown
                            of your estimate by spend category and make
                            revisions as needed.
                        </p>
                        <p>
                            Would you like to see a breakdown of your estimate?
                        </p>
                    </div>
                    <Button onClick={this.looksGood} label="YES" />
                    <Button onClick={this.seeBreakDown} label="NO, PROCEED WITH ESTIMATE"  />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, {})(About);
