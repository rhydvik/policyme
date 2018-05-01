import React, { Component } from 'react'

// import styles from './index.sass';

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
            <div className={'hero-head ' + this.props.theme}>
                <nav className={'nav navbar is-relative ' + this.props.theme}>
                    <div className='container'>
                        <div className='navbar-brand'>
                            <a className='navbar-item logo hide-nav hide-nav-mobile' onClick={() => this.changePage('/')}>
                              policy-me
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}



// Active states:

// className={this.props.pathname === '/about' ? 'navbar-item about-link hide-nav active' : 'navbar-item about-link hide-nav'}
