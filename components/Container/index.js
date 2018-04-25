// Libraries
import React, { Component } from 'react'

// Styles
import styles from './index.sass'

export default class Container extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={`${styles.container} ${this.props.className ? this.props.className : ''}`}>
                {this.props.children}
            </div>
        )
    }
}


