import React, {Component} from 'react';
import Router from 'next/router';
import Nav from '../../components/Nav';
import cn from 'classnames';
import Loader from 'components/FullScreenLoader';
import Button from '../../components/Button/index';
import styles from '../../styles/index.sass';
import { connect } from 'react-redux';
import renderIf from 'render-if';

import {
    getCoverage,
    setAdvice,
    patchCoverage,
    getExpenses,
    getSkeletonJson
} from '../../Actions/index'

export class Navy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 50,
            isLoading: false,
            min: 15,
        }
    }

    // componentWillMount(){
    //     const { id } = this.props;
    //     if(id !== undefined){
    //         this.setState({ isLoading: true })
    //         this.props.getCoverage(id, (data) => {
    //             console.log(data)
    //             this.setState({
    //                 isLoading: false,
    //             })
    //         })
    //     }
    // }


    goToQuotes = () => {
        const { id } = this.props;
        this.setState({isLoading:true})
        this.props.patchCoverage({
            s_id: this.props.s_id || this.props.id,
            coverageJson: this.state.coverageJson,
        });
        Router.push(id ? `/quotes?id=${id}` : '/quotes');
    };

    handleInput = (e) => {
        const { coverageJson } = this.state;
        const val = parseInt(e.target.value)
        const name = e.target.name
        if (name === 'custom') {
            coverageJson.options[1].amt = val
        }
        else if(coverageJson.user.addtl[name] !== undefined) {
            coverageJson.user.addtl[name] = val
        }
        else if (name === 'group' || name === 'individual') {
            coverageJson.user.existing.user[name] = val
        }
        this.setState({coverageJson}, ()=> console.log(this.state.coverageJson));
    };

     async componentDidMount () {
         // if(this.props.id !== undefined) {
         //     this.props.getExpenses(this.props.id);
         // }
         if(!Object.keys(this.props.jsonSkeleton).length) {
             this.props.getSkeletonJson(this.props.id)
         }
         const id  = this.props.s_id
         await this.props.getCoverage(id);
         const { options } = this.props.coverageJson
         this.setState({
             coverageJson:this.props.coverageJson,
             lifeStyle: options[0].selected,
             transition: options[1].selected,
             own: options[2].selected,
         })


    }

    delimitNumbers = (str) => {
        return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
            return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
        });
    };

    getBoxCLass = (str) => {
        const { coverageJson } = this.state
        coverageJson.options[0].selected = false
        coverageJson.options[1].selected = false
        this.setState({lifeStyle: false,transition:false,own:false });
        if (str === 'lifeStyle') {
            coverageJson.options[0].selected = true
        } else if(str === 'own') {
            coverageJson.options[1].selected = true
        }
        this.setState({[str]: true, coverageJson});
    };

    handleTerm = (inc) => {
        const { coverageJson } = this.state
        const { user } = this.state.coverageJson

        const term = coverageJson.user.term
        if (inc === '+'){
            if (term < this.state.max){
                user.term = coverageJson.user.term + 1
            }
        } else {
            if (term > this.state.min) {
                user.term = coverageJson.user.term -1
            }
        }

        this.setState({coverageJson}, ()=>console.log(coverageJson.user.term))
    };

    validated = () => {
        const {transition, lifeStyle, own} = this.state
        return  lifeStyle || own
    };

    handlePageChange = () =>{
        const { id } = this.props;
        this.setState({ isLoading: true });
        Router.push(id === undefined ? '/expenses' : `/questions?id=${id}`)
    };

    render() {
        const coverageJson = this.state.coverageJson || null
        let addtl;
        let existing;
        if (coverageJson && Object.keys(coverageJson).length) {
            addtl = coverageJson.user.addtl
            existing = coverageJson.user.existing
        }
        const { lifeStyle, transition, own, isLoading } = this.state;

        return (
            <div className={styles.mainBox}>
                {renderIf(isLoading)(<Loader />)}
                <Nav
                    usedFor="questions"
                    showQuestionMark={true}
                    showHeader={false}
                    openModal={this.openModal}
                    progressBar="70"
                >
                    <img src="/static/images/questions/question.svg"  onClick={this.openModal} />
                </Nav>
                { coverageJson && Object.keys(coverageJson).length ? <div className={styles.policyContainer}>
                    <img
                        className={styles.backArrow}
                        src='../../static/images/questions/backarrow.svg'
                        onClick={this.handlePageChange} />

                    <div className={cn('app-container no-p',styles.questionBox)}>
                        <img src="../static/images/alex.jpg" />
                        <p className={cn('app-texts x-large karma-family',styles.quoteMessage)} >
                            A term life insurance policy is the best fit for you.
                            For more information on term life policies , click here</p>
                        <p className={cn('app-texts x-large karma-family',styles.quoteMessage)} >
                            Now, let's talk about your coverage
                            amount policy length</p>
                    </div>
                    <div className={cn('columns', styles.recommendedPolicies)}>
                        <div className={cn('column', styles.recommendedPolicyBox)}>
                            <div onClick={()=>this.getBoxCLass('lifeStyle')} className={lifeStyle ? styles.selectedPolicyBox : styles.policyBox}>
                                <p className={'app-texts headings ' + (lifeStyle ? '' : '' )}>LifeStyle Protection</p>
                                <br/>
                                <p className={'app-texts sub-text ' + (lifeStyle ? '' : '' )}>
                                    Choose this option if you want your family to be
                                    able to maintain their life style if you are no longer around.</p>

                                <br/>
                                <p className={'app-texts headings ' + (lifeStyle ? '' : '' )}>$1,000,000 coverage</p>
                                <p className={'app-texts headings ' + (lifeStyle ? '' : '' )}>$70 - $80 / month</p>
                            </div>
                            <a className={styles.questionText} onClick={this.openModal}>
                                <p style={{textAlign:'right', fontSize: '0.8rem', width: '100%', marginTop: '-1rem'}}>
                                    why should i pick this option?
                                </p>
                                <img style={{height: '24px', marginTop:'-1rem', marginLeft: '10px'}}
                                     src="/static/images/questions/question.svg"  onClick={this.openModal} />
                            </a>
                        </div>

                        <div className={cn('column',styles.recommendedPolicyBox)}>
                            <div onClick={()=>this.getBoxCLass('transition')} className={transition ? styles.selectedPolicyBox : styles.policyBox} >
                                <p className={'app-texts headings ' + (transition ? '' : '' )}>Transition Protection</p>
                                <br/>
                                <p className={'app-texts sub-text ' + (transition ? '' : '' )}>Choose this option if you think your family will be able to adjust to your lost income after a few years.</p>
                                <br/>
                                <p className={'app-texts headings '+ (transition ? '' : '' )}>$500,000 coverage</p>
                                <p className={'app-texts headings ' + (transition ? '' : '' )}>$35 - $40 / month</p>
                            </div>
                            <a className={styles.questionText} onClick={this.openModal}>
                                <p style={{textAlign:'right', fontSize: '0.8rem', width: '100%', marginTop: '-1rem'}}>
                                    why should i pick this option?
                                </p>
                                <img style={{height: '24px', marginTop:'-1rem', marginLeft: '10px'}}
                                     src="/static/images/questions/question.svg"  onClick={this.openModal} />
                            </a>
                        </div>
                        <div className={cn('column',styles.recommendedPolicyBox)}>
                            <div onClick={()=>this.getBoxCLass('own')} className={own ? styles.selectedPolicyBox : styles.policyBox} >
                                <p className={'app-texts headings ' + (own ? '' : '' )}>Choose Your Own</p>
                                <br/>
                                <p className={'app-texts sub-text ' + (own ? '' : '' )}>Choose this option if you'd like to customize your coverage.</p>
                                <br/>
                                <p className={'app-texts headings ' + (own ? '' : '' )}>Coverage</p>
                                <input
                                    className={styles.input}
                                    value={this.delimitNumbers(coverageJson.options[1].amt)}
                                    name="custom"
                                    onChange={this.handleInput } />
                            </div>
                        </div>
                    </div>

                    <div className={styles.otherCoverages}>
                    <div className={'  medium-container'}>
                        <p className={'app-texts headings'}>Add Other Coverages</p>
                        <div className={styles.otherCoverageBox }>
                            <div className={styles.policyBox + ' no-p-b'} >
                                <p className={styles.quoteMessage}>Other Dependents</p>
                                <br/>
                                <p className={styles.policyText}>Add coverage if you have other dependents (not including children in your household) who rely on you financially.</p>
                                <br/>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    name="other_deps"
                                    value={this.delimitNumbers(addtl.other_deps)}
                                    onChange={this.handleInput} />
                            </div>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>End of Life Expenses</p>
                                <br/>
                                <p className={styles.policyText}>Add coverage if you'd like to pay for end of life expenses (funeral cost).
                                    <br /><br /><span className='app-texts'>Most Leave $15,000.</span></p>
                                <br/>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    name="funeral"
                                    value={this.delimitNumbers(addtl.funeral)}
                                    onChange={this.handleInput} />
                            </div>
                        </div>
                        <div className={styles.otherCoverageBox}>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Education Costs</p>
                                <br/>
                                <p className={styles.policyText}>Add coverage if you'd like to leave money for post-secondar education costs.
                                    <br /><br />Most Leave $40,000 per child. </p>
                                <br/>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    name="education"
                                    value={this.delimitNumbers(addtl.education)}
                                    onChange={this.handleInput} />
                            </div>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Something else...</p>
                                <br/>
                                <p className={styles.policyText}>Add coverage if there is any other needs we missed(additional caregiving costs, charitable donation or more family cobverage).</p>
                                <br/>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    name="other"
                                    value={this.delimitNumbers(addtl.other)}
                                    onChange={this.handleInput} />
                            </div>
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
                                    name="group"
                                    value={this.delimitNumbers(existing.user.group)}
                                    onChange={this.handleInput} />
                            </div>
                            <div className={styles.policyBox} >
                                <p className={styles.quoteMessage}>Life Insurance you bought</p>
                                <p className={styles.policyText}>Coverage you already have in place..</p>
                                <input
                                    className={styles.input}
                                    placeholder="$10,000"
                                    name="individual"
                                    value={this.delimitNumbers(existing.user.individual)}
                                    onChange={this.handleInput} />
                            </div>
                        </div>

                    </div>

                    <div className={styles.termLengthContainer} >
                        <p className={styles.quoteMessage}>Pick your term</p>
                        <p className={styles.policyText}>Your term is the pre-agreed time frame during which you will bw covered by the policy. For more insurance information on term insurance, click here. </p>
                        <div className={styles.policyBox} >
                            <p className={styles.quoteMessage}>Term Length</p>
                            <div  className={styles.termLengthBox} >
                                <Button onClick={()=> this.handleTerm('-')} buttonStyle={styles.termLengthInc} label="-"/>
                                <p className={styles.policyText}>{coverageJson.user.term} year term</p>
                                <Button onClick={()=> this.handleTerm('+')} buttonStyle={styles.termLengthInc} label="+"/>
                            </div>

                            <p className={styles.policyText}>It look like your insurance needs are pretty steady for the next 30 years. We recommend buying a 30 year policy today to protect your self. </p>
                            <p className={styles.policyText}>Insurance is cancellable, so need to worry if you outgrow the protection.</p>
                            {/*<input*/}
                            {/*className={styles.input}*/}
                            {/*placeholder="$10,000"*/}
                            {/*name="term"*/}
                            {/*onChange={this.handleInput} />*/}
                        </div>
                    </div>
                    <Button label="Next" onClick={this.validated() ? () => this.goToQuotes() : () =>{}} buttonStyle={this.validated() ? styles.nextEnabled : styles.nextDisabled} />
                </div> : ''}
            </div>

        )
    }
}

const mapDispatchToProps = {
    getCoverage,
    setAdvice,
    patchCoverage,
    getExpenses,
    getSkeletonJson
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Navy);
