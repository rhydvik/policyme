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
import Loader from 'components/FullScreenLoader';
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
            isLoading:false,
            modalIsOpen: false,

        };
    }
componentDidMount () {
    if(this.props.expense.default) {
        const categories = this.props.expense.default.expenses.categories
        this.setState ({ categories})
    }
}
handleInput = (e, i) => {
    let {categories} = this.state
        if (e.target.name === 'housing') {
            categories[e.target.name].rent.monthly_payment = parseInt(e.target.value)
        } else if(e.target.name === 'other' ){
            categories.other[i].amount = parseInt(e.target.value)
        }else {
            categories[e.target.name] = parseInt(e.target.value)
        }

    this.setState({categories})
}
addCategory = () => {
    let {categories} = this.state
    const { other } = categories
    categories.other.push({type:`category ${other.length + 1}`, amount: 0})
    this.setState({categories})
}
monthlyExpense = (categories) => {
    let sum = 0;
    if(categories) {
        sum =  Object.keys(categories).reduce((acc,cur)=>{
        if(cur !== 'other' && cur !== 'housing') {
            acc += + categories[cur]
        }
        if (cur === 'housing') {
            acc += + categories[cur].rent.monthly_payment
        }
        return acc
    }, 0)

    sum += categories.other.reduce((acc,cur)=>{
            acc += + cur.amount
        return acc
    }, 0)
    return sum;
}
}
deleteCategory = (i) => {
    const { categories } = this.state
    categories.other.splice(i,1)
    categories.other.map((x,j) => {
        x.type = `category ${j+1}`
    } )
    this.setState({categories})

}
next = () => {
    this.setState({isLoading:true})
    this.props.patchExpense(this.props, this.state.categories);
    Router.push('/askUserDetails')
};
ifHousingCategory = (x) => {
        return <div className={styles.rightAlignedInputContainer}>
                              <span>
                                {CATEGORY[x] || x }
                              </span>
                                <input type ="text"
                                className="input"
                                value={this.state.categories[x].rent.monthly_payment}
                                name={x}
                                onChange={this.handleInput}/>
                          </div>
}
    render() {
        const categories = this.state.categories || null
        const { isLoading } = this.state
        return (
        <div>
            {renderIf(isLoading)(<Loader />)}
            <Nav
                usedFor="questions"
                showQuestionMark={true}
                showHeader={false}
                openModal={this.openModal}
                progressBar="50"
            >
              <img src="/static/images/questions/question.svg" onClick={this.openModal} />
            </Nav>

            {categories ?
            <div>
                <div className={styles.container}>
                    <div className={styles.textBox}>
                        <img src="../../static/images/alex.jpg" onClick={() => Router.push('/coverages')} />
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
                        x === 'housing' ? this.ifHousingCategory (x) : <div className={styles.rightAlignedInputContainer}>
                              <span>
                                {CATEGORY[x] || x }
                              </span>
                                <input type ="text"
                                className="input"
                                value={categories[x]}
                                name={x}
                                onChange={(e) => this.handleInput(e)}/>
                          </div>
                        : ''
                         }
                      </div>
                    )}
                         {categories.other && categories.other.length ?                         <div>
                            {categories.other.map((y,i) => <div className={styles.rightAlignedInputContainer}>
                              <span>
                                <button onClick={()=>this.deleteCategory(i)}  className="negative">-</button> 
                                {y.type}
                              </span>
                                <input type ="text"
                                className="input"
                                value={y.amount}
                                name='other'
                                onChange={(e)=>this.handleInput(e, i)}/>
                          </div>)}
                        </div>: ''}
                </div>
                <div className={styles.addOnButton}  >
                    <button className={styles.buttonBox} onClick={this.addCategory} >+ Add Category</button>
                </div>
                <div className={styles.expensesContainer} >
                    <div className={styles.expenses}>
                        <div>
                           <label>Monthly Expenses:</label> <span> {this.monthlyExpense(categories)}</span>
                        </div>
                        <div>
                           <label>Implied Annual Savings:</label> <span>{this.props.expense.user.savings.max}</span>
                        </div>
                    </div>
                </div>
               </div>
             : ''}
             <div className={styles.buttonContainer}>
                 <Button label="NEXT" onClick={() => this.next()} />
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
