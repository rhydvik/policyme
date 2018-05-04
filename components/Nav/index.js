import React, {Component} from 'react'
import renderIf from 'render-if';
import styles from './index.sass';

export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {}


    }

    componentDidMount() {

    }

    render() {
        const renderHeader = renderIf(this.props.showHeader);
        return (
            <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src={this.props.usedFor === "questions" ? "static/images/questions/logo_pm.svg" : "static/images/home/logo.svg" }/>
                    </a>
                </div>
                {renderHeader(
                <div className="right-items">
                    <div className='item'>
                        Insurance 101
                    </div>
                    <div className='item'>
                        Blog
                    </div>
                </div>
                )}
            </nav>
        )
    }
}


// Active states:

// className={this.props.pathname === '/about' ? 'navbar-item about-link hide-nav active' : 'navbar-item about-link hide-nav'}
