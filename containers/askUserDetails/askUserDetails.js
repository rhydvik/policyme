import React, { Component } from 'react';
import Nav from '../../components/Nav/index'
import styles from './index.sass';
import Button from '../../components/Button/index';
import { connect } from 'react-redux';
import {
    updateUserDetail,
    setAdvice
} from '../../Actions/index'
class AskUserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}

        };
    }


    submitUserDetails = () => {
        this.props.updateUserDetail({
            user: this.state.user,
            json: this.props.jsonSkeleton
        }
        )
    }

    handleInput = (e)  => {
        const {user} = this.state
        user[[e.target.name]] = e.target.value
        this.setState({user})
    }
    componentDidMount () {
        this.props.setAdvice()
    }
    render() {
        console.log(this.props)
        return (
            <div className={styles.modalBox}>
                <div className={styles.modalNav}>
                    <Nav usedFor="questions" >
                        <img src="/static/images/close.svg" onClick={this.props.closeModal} />
                    </Nav>
                </div>
                <div className={styles.popupContainer}>
                    <p>Questions? ... Leave them here. </p>
                    <input
                        className={styles.input}
                        placeholder="Email"
                        name="email"
                        onChange={this.handleInput}/>

                    <input
                        className={styles.input}
                        placeholder="First Name"
                        name="first_name"
                        onChange={this.handleInput}/>

                    <input
                        className={styles.input}
                        placeholder="last name"
                        name='last_name'
                        onChange={this.handleInput}/>

                    <Button  onClick={this.submitUserDetails}  label='Submit' />
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = {
    updateUserDetail,
    setAdvice
};

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, mapDispatchToProps)(AskUserDetails);
