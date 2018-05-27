import React, { Component } from 'react';
import Router from 'next/router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import renderIf from 'render-if';
import Loader from "../../components/FullScreenLoader";
import Nav from '../../components/Nav/index'
import styles from './index.sass';
import Button from '../../components/Button/index';
import { connect } from 'react-redux';
import {
    feedback
} from '../../Actions/index'

class Final extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    handleChange = (event, index, value) => {
        this.setState({ hearedFrom: value });
    };

    handleInputChange = (event) => {
        this.setState({ message: event.target.value })
    };

    handleSmileyChange = (item) => {
        this.setState({ feel: parseInt(item) })
    };

    handleFinalScreen = () => {
        const { feel, hearedFrom, message } = this.state;
        const payload = {
            rating: feel,
            source: hearedFrom,
            message: message,
        };
        this.props.feedback(payload);
        this.setState({ isLoading: true });
        Router.push('/');
    };

    goBack = () => {
        const { id } = this.props;
        this.setState({ isLoading: true });
        Router.push(id ? `/final?id=${id}` : '/final')
    };

    render() {
        const { feel, isLoading } = this.state;
        return (
            <MuiThemeProvider>
                <div>
                    <Nav
                        usedFor="questions"
                        showQuestionMark={true}
                        showHeader={false}
                        openModal={this.openModal}
                        progressBar="95"
                    >
                        <img src="/static/images/questions/question.svg"  onClick={this.openModal} />
                    </Nav>
                    {renderIf(isLoading)(<Loader />)}

                    <div className={styles.final2Container}>
                        <img
                            className="backArrow"
                            src='../../static/images/questions/backarrow.svg'
                            onClick={this.goBack} />
                        <div className={styles.textBox}>
                            <img src="../../static/images/alex.jpg" />
                            <p style={{fontWeight: 600, fontSize: '1.125rem', lineHeight: '2rem', color: '#004f78'}}>
                                Great! <br />
                                We'll be in touch soon.
                            </p>
                            <p style={{fontWeight: 400}}>
                                In the meantime, let us know how your feel about the advice you've just received.
                            </p>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.smileys} onClick={()=> this.handleSmileyChange('5')}>
                                <div className={feel === 5 ? styles.selectedSmiley : styles.smiley}>
                                    <img src={feel === 5 ? '../../static/images/questions/greatWhite.svg' : '../../static/images/questions/great.svg'} />
                                </div>
                                Great
                            </div>
                            <div className={styles.smileys} onClick={()=> this.handleSmileyChange('3')}>
                                <div className={feel === 3 ? styles.selectedSmiley : styles.smiley}>
                                    <img src={feel === 3 ? '../../static/images/questions/okayWhite.svg' : '../../static/images/questions/okay.svg'} />
                                </div>
                                okay
                            </div>
                            <div className={styles.smileys} onClick={()=> this.handleSmileyChange('1')}>
                                <div className={feel === 1 ? styles.selectedSmiley : styles.smiley}>
                                    <img src={feel === 1 ? '../../static/images/questions/disappointedWhite.svg' : '../../static/images/questions/disappointed.svg'} />
                                </div>
                                Disappointed
                            </div>
                        </div>
                        <div className={styles.otherInputs}>
                            <p>How did you hear about us?</p>
                            <SelectField
                                value={this.state.hearedFrom}
                                onChange={this.handleChange}
                                style={{ border: 'solid 1px rgba(27, 176, 219, 0.3)', width: '100%' }}
                                iconStyle={{ display: 'none' }}
                                underlineStyle={{ display: 'none' }}
                                hintStyle={{ textAlign: 'center', color: '#004f78', width: '100%' }}
                                labelStyle={{ textAlign: 'center', color: '#004f78', width: '100%', paddingRight: '0' }}
                                hintText="&#x25BE; Choose"
                            >
                                <MenuItem value={1} label="Facebook" primaryText="Facebook" />
                                <MenuItem value={2} label="Twitter" primaryText="Twitter" />
                                <MenuItem value={3} label="Instagram" primaryText="Instagram" />
                                <MenuItem value={4} label="Friends" primaryText="Friends" />
                            </SelectField>
                            <p>Anything else you’d like to add?</p>
                            <textarea rows={10} placeholder="Message" onChange={this.handleInputChange}>

                            </textarea>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button onClick={this.handleFinalScreen} label="NEXT" />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


const mapDispatchToProps = {
    feedback,
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Final);
