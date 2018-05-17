// Libraries
import React, { Component } from 'react'
import cn from 'classnames';

// Styles
import styles from './index.sass'

export default class Button extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <button className={cn(this.props.buttonStyle)} onClick={this.props.onClick}>
                {this.props.label}
            </button>
        )
    }
}


