import React, { Component } from 'react'

import styles from './index.sass';

export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }


    }

    componentDidMount() {

    }

    render() {
        return (
            <nav className={styles.navContainer}>
                <span className={styles.logo} /> <span>Policyme</span>
            </nav>
        )
    }
}



// Active states:

// className={this.props.pathname === '/about' ? 'navbar-item about-link hide-nav active' : 'navbar-item about-link hide-nav'}
