import React, {Component} from 'react';
import cn from 'classnames';
import Router from 'next/router';
import Nav from '../../components/Nav';
import Button from '../../components/Button/index';
import styles from '../../styles/index.sass';
import {connect} from 'react-redux';
import renderIf from 'render-if'
import Loader from 'components/FullScreenLoader';

import {
    getQuotes,
    patchQuote
} from '../../Actions/index'

export class Navy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuote: null,
            isLoading: false
        }
    }
    async componentDidMount () {
        await this.props.getQuotes({
            user: this.props.jsonSkeleton.family.user,
            coverageJson: this.props.coverageJson,
            s_id: this.props.s_id
        })
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
        this.setState({ isLoading: true });
        Router.push('/final');
    };

    goBack = () => {
        Router.push('/coverages');
    };

    render() {
        console.log(this.props);
        const {selectedQuote, isLoading} = this.state;
        return (
            <div className={styles.mainBox}>
                {renderIf(isLoading)(<Loader />)}
                <Nav
                    usedFor="questions"
                    showQuestionMark={true}
                    showHeader={false}
                    openModal={this.openModal}
                >
                    <img src="/static/images/questions/question.svg" onClick={this.openModal}/>
                </Nav>
                <div className='app-container'>
                    <img className={styles.backArrow} src='../static/images/questions/backarrow.svg'
                         onClick={this.goBack}/>

                    <div className={styles.questionBox}>
                        <img src="../static/images/alex.jpg"/>
                        <p className='app-texts headings karma-family bold'>Here are your quotes</p>
                        <br/>
                        <p className='app-texts sub-headings karma-family'>When it comes to picking a term life
                            insurance provider, the two most important factors are customer experience and price. We've
                            looked at a number of insurance companies and picked four that we believe will provide the
                            best customer experience.</p>
                        <br/>
                        <p className='app-texts sub-headings karma-family'>Going with the cheapest price is a good
                            choice but feel free to select a different option if you have a brand preference.</p>
                        <br/>
                        <p className='app-texts headings karma-family bold'>Your Policy</p>
                    </div>
                    <div className='sub-container'>
                        <hr/>
                        <div className='columns is-mobile input-group'>
                            <div className='column no-p'>
                                <label>
                                    Coverage
                                </label>
                            </div>
                            <div className='column no-p'>
                                <input
                                    className={styles.input}
                                    placeholder="$1000"
                                    value="$1000"
                                    onChange={(e) => console.log(e)}/>
                            </div>
                        </div>
                        <div className='columns input-group is-mobile'>
                            <div className='column no-p'>
                                <label>
                                    Term Years
                                </label>
                            </div>
                            <div className='column no-p'>
                                <input
                                    className={styles.input}
                                    placeholder="$1000"
                                    value="$1000"
                                    onChange={(e) => console.log(e)}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className='sub-container columns is-mobile'>
                        <div className='column'>
                            <Button label="RESET" className='full-width secondary-button'/>
                        </div>
                        <div className='column'>
                            <Button label="SUBMIT" className='full-width'/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <p className={cn(styles.quoteMessage, styles.policyHeading)}>Your Quotes </p>
                    <div className={cn(styles.quoteBoxContainer, 'p-m')}>
                        {this.props.quote.length ?
                            this.props.quote.map(x => <div onClick={() => this.selectQuote(x.company)}
                                                           className={cn('', styles.quoteBox, selectedQuote === x.company ? styles.selectedQuote : '')}>
                                    <div className=''>
                                        <label>{x.company}</label>
                                    </div>
                                    <div className=''><label>${x.premiums} <br/> per Month </label></div>
                                </div>
                            ) : ''}


                        <Button label="Next" onClick={this.sendQuote} buttonStyle={styles.nextEnabled}/>

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
