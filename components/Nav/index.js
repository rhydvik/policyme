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
            <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png"
                             alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                </div>
            </nav>
        )
    }
}



// Active states:

// className={this.props.pathname === '/about' ? 'navbar-item about-link hide-nav active' : 'navbar-item about-link hide-nav'}
