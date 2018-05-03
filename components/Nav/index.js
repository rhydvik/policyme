import React, {Component} from 'react'

import styles from './index.sass';

export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {}


    }

    componentDidMount() {

    }

    render() {
        return (
            <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src="static/images/home/logo.svg"/>
                    </a>
                </div>
                <div className="right-items">
                    <div className='item'>
                        Insurance 101
                    </div>
                    <div className='item'>
                        Blog
                    </div>
                </div>
            </nav>
        )
    }
}


// Active states:

// className={this.props.pathname === '/about' ? 'navbar-item about-link hide-nav active' : 'navbar-item about-link hide-nav'}
