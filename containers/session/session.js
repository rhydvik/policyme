import React, { Component } from 'react';
import Router from 'next/router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux';
import Coverages from '../coverages/coverages'
import {
    followUp,
} from '../../Actions/index'
import renderIf from "render-if";

class Session extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }


    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.followUp) Router.push('/final2');
    }




    render() {
        const { finalScreenLoading }= this.props;
        console.log(this.props)
        return (
            <MuiThemeProvider>
                  <Coverages />
            </MuiThemeProvider>
        );
    }
}


const mapDispatchToProps = {
    followUp,
};

const mapStateToProps = state => state.questionReducer;

export default connect(mapStateToProps, mapDispatchToProps)(Session);
