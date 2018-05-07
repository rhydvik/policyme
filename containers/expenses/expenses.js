import React, {Component} from 'react'
import {connect} from "react-redux";
import Router from 'next/router';

class About extends Component {
    constructor(props) {
        super(props)
    }

    looksGood = () => {
        console.log(this.props);
        Router.push('/askUserDetails');
    };

    seeBreakDown = () => {
        console.log(this.props);
        Router.push('/result');
    };

    render() {
        return (
            <div>
                <button onClick={this.looksGood}>LOOKS GOOD</button>
                <button onClick={this.seeBreakDown}>SEE BREAKDOWN</button>
            </div>
        )
    }
}

const mapStateToProps = state => state.questionReducer;
export default connect(mapStateToProps, {})(About);
