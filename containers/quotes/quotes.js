import React, {Component} from 'react';
import cn from 'classnames';
import Router from 'next/router';
import Nav from '../../components/Nav';
import Button from '../../components/Button/index';
import styles from '../../styles/index.sass';
import { connect } from 'react-redux';
import renderIf from 'render-if'

import {
    getQuotes,
    patchQuote
} from '../../Actions/index'
export  class Navy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuote: null
        }
    }
    componentDidMount () {
        this.props.getQuotes()
    }
    selectQuote = (company) => {
        this.setState({selectedQuote: company})
    }
    sendQuote = () => {
        const id = "50c9a31a-443b-11e8-842f-0ed5f89f718b"
        this.props.patchQuote({
            quotes: this.props.quote,
            selected: this.state.selectedQuote,
            s_id: id
        });
        Router.push('/final');
    };

    goBack = () => {
        Router.push('/coverages');
    };

    render() {
        console.log(this.props);
        const {selectedQuote} = this.state;
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
                    </div>
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
                        <div className={cn(styles.quoteBoxContainer,)}>
                            {this.props.quote.length ?
                            this.props.quote.map(x => <div  onClick={()=>this.selectQuote(x.company)} className={cn(styles.quoteBox,selectedQuote === x.company ? styles.selectedQuote : '')}>
                                <div>{x.company}</div>
                                <p>${x.premiums} per Month </p>
                            </div>
                            ) : ''}


                        <Button label="Next" onClick = {this.sendQuote} buttonStyle={styles.nextEnabled} />

                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
getQuotes,
patchQuote
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Navy);
