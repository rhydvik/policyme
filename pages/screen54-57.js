import React, {Component} from 'react';
import Nav from '../components/Nav';
import cn from 'classnames';
import Button from '../components/Button/index';
import styles from '../styles/index.sass';

export default class Navy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={styles.mainBox}>
               <Nav
                    usedFor="questions"
                    showQuestionMark={true}
                    showHeader={false}
                    openModal={this.openModal}
                >
                  <img src="/static/images/questions/question.svg"  onClick={this.openModal} />
                </Nav>
                <div className={styles.quoteContainer}>
                    <img className={styles.backArrow} src='../static/images/questions/backArrow.png' onClick={this.goBack} />

                    <div className={styles.questionBox}>
                        <img src="../static/images/alex.png" />
                        <p className={styles.quoteMessage} >Here are your quotes</p>
                        <p className={styles.quoteMessage} >When it comes to picking a term life insurence provider, the two most imporant factors are customer experience and price. We've looked at a number of insurance companiesand picked four that we believe will provide the best customer experience.</p>
                        <p className={styles.quoteMessage} >Going with the cheapest  price is a good choice but feel free to select a different option if you have a brand preference.</p>
                        <p className={cn( styles.quoteMessage, styles.policyHeading)}>Your Policy</p>
                        <div className={cn('columns',  styles.inputBorderContainer )}>
                            <div className={cn('column', styles.rightAlignedInputContainer )}>
                                 <span>Coverage</span>
                                 <input
                                    className={styles.input}
                                    placeholder="$1000"
                                    value="$1000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                            <div className={cn('column', styles.rightAlignedInputContainer )}>
                                 <span>Term Years</span>
                                 <input
                                    className={styles.input}
                                    placeholder="$1000"
                                    value="$1000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                            
                        </div>
                        <div className={styles.quoteButtonContainer}>
                            <Button label="RESET"  buttonStyle={styles.disabledButton}/>
                            <Button label="SUBMIT" buttonStyle={styles.selectedButton} />
                        </div>  
                        <p className={cn( styles.quoteMessage, styles.policyHeading)}>Your Quotes </p>
                        <div className={styles.quoteBoxContainer}>
                            <div className={styles.quoteBox}>
                                <div>Empire Life</div>
                                <p>$12.13 per Month </p>
                            </div>
                            <div className={styles.quoteBox}>
                                <p>Empire Life</p>
                                <p>$12.13 per Month </p>
                            </div>
                        </div>
                        
                        <Button label="Next" buttonStyle={styles.nextEnabled} />

                    </div>
                </div>
            </div>
        )
    }
}