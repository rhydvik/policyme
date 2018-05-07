import React, { Component } from 'react';
import Nav from 'components/Nav/index';
import Button from 'components/Button/index';
import renderIf from 'render-if';
import Router from 'next/router';
import cn from 'classnames';
import question from '../../constants/questions';
import indexStyles from '../../styles/index.sass';
import styles from './index.sass';
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
    categories[e.target.name] = e.target.value
    this.setState({categories})
}
addCategory = () => {
    let {categories} = this.state
    categories = {...categories, ...{[`category${Object.keys(categories).length}`]: 0}}
    this.setState({categories})
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
        <div>
            <Nav
                usedFor="questions"
                showQuestionMark={true}
                showHeader={false}
                openModal={this.openModal}
            >
              <img src="/static/images/questions/question.svg" onClick={this.openModal} />
            </Nav>
            <div className={styles.container}>

            </div>
            {categories ?
            <div>
                <div className={styles.container}>
                    <div className={styles.textBox}>
                        <img src="../../static/images/alex.png" />
                        <p>
                            Here is a breakdown your estimate by spend category.
                            If a category looks off, feel free to revise.
                        </p>
                    </div>
                </div>

                <div className={styles.inputBorderContainer}>
                    {Object.keys(categories).map(x =>
                      <div>
                        {x !== 'other' ?
                          <div className={styles.rightAlignedInputContainer}>
                              <span>
                                {CATEGORY[x] || x }
                              </span>
                                <input type ="text"
                                className="input"
                                value={categories[x]}
                                name={x}
                                onChange={this.handleInput}/>
                          </div>
                        : '' }
                      </div>
                    )}
                </div>
                <div className={styles.addOnButton}  >
                    <button className={styles.buttonBox} onClick={this.addCategory} >+ Add Category</button>
                </div>
            </div> : ''}
            <div className={styles.buttonContainer}>
              <Button label="NEXT"   onClick={this.next}/>
            </div>
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
