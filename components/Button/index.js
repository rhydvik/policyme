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
        console.log(this.props.buttonStyle);
        return (
            <button className={cn(styles.btn, this.props.buttonStyle )} onClick={this.props.onClick}>
                {this.props.label}
            </button>
        )
    }
}


