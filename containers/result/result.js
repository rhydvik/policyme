import React, { Component } from 'react';
import Nav from 'components/Nav/index';
import Button from 'components/Button/index';
import renderIf from 'render-if';
import Router from 'next/router';
import cn from 'classnames';
import question from '../../constants/questions';
import styles from '../../styles/index.sass';
import { CATEGORY } from '../../utils/const.js';
import { connect } from 'react-redux';
import {
    addQuestion,
    setAdvice,
    populateJson,
    sendPopulatedJson,
    setExpense,
    patchExpense
} from '../../Actions/index'
import Modal from '../../components/Modal/index';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null,
            currentQuestion: {},
            modalIsOpen: false,

        };
    }
componentDidMount () {
    this.props.setExpense('ad');
}
componentWillReceiveProps (newProps) {
    console.log('AKJSDOIW',newProps)
    if (newProps.expense.user) {
        const categories = newProps.expense.user.expenses.categories
        this.setState ({ categories})
    }
}
handleInput = (e) => {
    let {categories} = this.state

        categories[e.target.name] = parseInt(e.target.value)

    this.setState({categories})
}
addCategory = () => {
    let {categories} = this.state
    categories = {...categories, ...{[`category${Object.keys(categories).length}`]: 0}}
    this.setState({categories})
}
monthlyExpense = () => {
    const { categories } = this.state
    return Object.keys(categories).reduce((acc,cur)=>{
        if(cur !== 'other') {
            acc += + categories[cur]
        }
        return acc
    }, 0)
}
next = () => {
    this.props.patchExpense(this.props.expense, this.state.categories);
    Router.push('/askUserDetails')
};
    render() {
        console.log(this.props);

        const { expense } = this.props
        const {categories} = this.state
        const ifExpense = renderIf(Object.keys(expense).length && expense.user)
        return (
        <div className={styles.mainBox}>
            <Nav
                usedFor="questions"
                showQuestionMark={true}
                showHeader={false}
                openModal={this.openModal}
            >
              <img src="/static/images/questions/question.svg" onClick={this.openModal} />
            </Nav>
            {categories ?
            <div>
                {Object.keys(categories).map(x => <div>
                    {x !== 'other' ? <div><label>
                        {CATEGORY[x] || x }
                        </label>
                    <input type ="text"
                    value={categories[x]}
                    name={x}
                    onChange={this.handleInput}/></div>
                    : '' }
                </div>
                )}
                <button onClick={this.addCategory}>add Category</button>
                <p>Monthly Expenses: {this.monthlyExpense()}</p>
                <p>Annual Savings: {this.props.expense.user.savings.max}</p>
            </div>
            : ''}
            <Button label="Next" buttonStyle={styles.nextEnabled}  onClick={this.next}/>
        </div>
            )
    }
}
const mapDispatchToProps = {
    addQuestion,
    setAdvice,
    populateJson,
    sendPopulatedJson,
    setExpense,
    patchExpense
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Results);
