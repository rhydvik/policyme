import React, {Component} from 'react';
import Nav from '../../components/Nav';
import cn from 'classnames';
import Button from '../../components/Button/index';
import styles from '../../styles/index.sass';

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
                <div className={styles.policyContainer}>
                    <img className={styles.backArrow} src='../static/images/questions/backArrow.png' onClick={this.goBack} />

                    <div className={styles.questionBox}>
                        <img src="../static/images/alex.png" />
                        <p className={styles.quoteMessage} >A term life insurance policy is the best fit for you. For more information on term life policies , click here</p>
                        <p className={styles.quoteMessage} >Now, let's talk about your coverage amount policy length</p>
                    </div>
                    <div className={cn('columns', styles.recommendedPolicies)}>
                        <div className={cn('column', styles.recommendedPolicyBox)}>
                            <div className={styles.selectedPolicyBox} >
                                <p className={styles.quoteMessage}>LifeStyle Protection</p>
                                <p className={styles.policyText}>Choose this option if you want your family to be able to maintain their lifestyleif you are no longer around.</p>
                                <p className={styles.quoteMessage}>$1,000,000 coverage</p>
                                <p className={styles.quoteMessage}>$70 - $80 / month</p>
                            </div>
                            <a className={styles.questionText} onClick={this.openModal}>
                                <p style={{textAlign:'right', fontSize: '0.8rem', width: '100%', marginTop: '2rem'}}>
                                    why should i pick this option?
                                </p>
                                <img style={{height: '24px', marginTop:'2rem', marginLeft: '10px'}}
                                     src="/static/images/questions/question.svg"  onClick={this.openModal} />
                            </a>
                        </div>

                        <div className={cn('column',styles.recommendedPolicyBox)}>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Transition Protection</p>
                                <p className={styles.policyText}>Choose this option if you think your family will be able to adjust to your lost income after a few years.</p>
                                <p className={styles.quoteMessage}>$500,000 coverage</p>
                                <p className={styles.quoteMessage}>$35 - $40 / month</p>
                            </div>
                            <a className={styles.questionText} onClick={this.openModal}>
                                <p style={{textAlign:'right', fontSize: '0.8rem', width: '100%', marginTop: '2rem'}}>
                                    why should i pick this option?
                                </p>
                                <img style={{height: '24px', marginTop:'2rem', marginLeft: '10px'}}
                                     src="/static/images/questions/question.svg"  onClick={this.openModal} />
                            </a>
                        </div>
                        <div className={cn('column',styles.recommendedPolicyBox)}>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Choose Your Own</p>
                                <p className={styles.policyText}>Choose this option if you'd like to customize your coverage.</p>
                                <p className={styles.quoteMessage}>Coveragee</p>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                        </div>


                    </div>



                    <div className={styles.otherCoverages}>
                        <p className={styles.quoteMessage}>Add Other Coverages</p>
                        <div className={styles.otherCoverageBox}>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Other Dependents</p>
                                <p className={styles.policyText}>Add coverage if you have other dependents(not including childern in your household) who rely on you financially.</p>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>End of Life Expenses</p>
                                <p className={styles.policyText}>Add coverage if you'd like to pay for end of life expenses(funeral cost).
                                    <br /><br />Most Leave $15,000.</p>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                        </div>
                        <div className={styles.otherCoverageBox}>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Education Costs</p>
                                <p className={styles.policyText}>Add coverage if you'd like to leave money for post-secondar education costs.
                                    <br /><br />Most Leave $40,000 per child. </p>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Something else...</p>
                                <p className={styles.policyText}>Add coverage if there is any other needs we missed(additional caregiving costs, charitable donation or more family cobverage).</p>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                        </div>

                    </div>
                    <div className={styles.existingCoverageContainer}>
                        <p className={styles.quoteMessage}>Offset with any existing coverage</p>
                        <p className={styles.policyText}>Reduce your monthly premium by offsetting your needs with insurance policies you already have in place. </p>
                        <div className={styles.otherCoverageBox}>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Employer Life Insurance</p>
                                <p className={styles.policyText}>Coverage you already have in place..</p>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Life Insurance you bought</p>
                                <p className={styles.policyText}>Coverage you already have in place..</p>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    onChange={(e) => console.log(e) } />
                            </div>
                        </div>

                    </div>

                    <div className={styles.termLengthContainer} >
                        <p className={styles.quoteMessage}>Pick your term</p>
                        <p className={styles.policyText}>Your term is the pre-agreed timeframe during which you will bw covered by the policy. For more insurance information on term insurance, click here. </p>
                        <div className={styles.policyBox} >
                            <p className={styles.quoteMessage}>Term Length</p>
                            <div  className={styles.termLengthBox} >
                                <Button buttonStyle={styles.termLengthInc} label="+"/>
                                <p className={styles.policyText}>30 year term</p>
                                <Button buttonStyle={styles.termLengthInc} label="-"/>
                            </div>

                            <p className={styles.policyText}>It look like your insurance needs are pretty steadyfor the next 30 years. We recommend buying a 30 year policy todayto protect your self. </p>
                            <p className={styles.policyText}>Insurance is cancellable, so need to worry if you outgrow the protection.</p>
                        </div>
                    </div>
                    <Button label="Next" buttonStyle={styles.nextEnabled} />
                </div>
            </div>

        )
    }
}
