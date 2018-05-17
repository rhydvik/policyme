import React, { Component } from 'react';
import Router from 'next/router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import Nav from '../../components/Nav/index'
import styles from './index.sass';
import Button from '../../components/Button/index';
import { connect } from 'react-redux';
import {
    updateUserDetail,
    setAdvice
} from '../../Actions/index'

class Final extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                hearedFrom: '',
                message: '',
                feel: null
            }

        };
    }

    handleChange = (event, index, value) => {
        console.log('value', value);
        this.setState({ hearedFrom: value });
    };

    handleInputChange = (event) => {
        this.setState({ message: event.target.value })
    };

    handleSmileyChange = (item) => {
        this.setState({ feel: item })
    };

    render() {
        const { feel } = this.state;
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
                    <div className={styles.final2Container}>
                        <div className={styles.textBox}>
                            <img src="../../static/images/alex.jpg" />
                            <p>
                                Great! <br />
                                We'll be in touch soon.
                            </p>
                            <p>
                                In the meantime, let us know how your feel about the advice you've just received.
                            </p>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.smileys} onClick={()=> this.handleSmileyChange('Great')}>
                                <div className={feel === 'Great' ? styles.selectedSmiley : styles.smiley}>
                                    <img src={feel === 'Great' ? '../../static/images/questions/greatWhite.svg' : '../../static/images/questions/great.svg'} />
                                </div>
                                Great
                            </div>
                            <div className={styles.smileys} onClick={()=> this.handleSmileyChange('Okay')}>
                                <div className={feel === 'Okay' ? styles.selectedSmiley : styles.smiley}>
                                    <img src={feel === 'Okay' ? '../../static/images/questions/okayWhite.svg' : '../../static/images/questions/okay.svg'} />
                                </div>
                                okay
                            </div>
                            <div className={styles.smileys} onClick={()=> this.handleSmileyChange('Disappointed')}>
                                <div className={feel === 'Disappointed' ? styles.selectedSmiley : styles.smiley}>
                                    <img src={feel === 'Disappointed' ? '../../static/images/questions/disappointedWhite.svg' : '../../static/images/questions/disappointed.svg'} />
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
                            <Button onClick={this.showCoverages} label="NEXT" />
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
