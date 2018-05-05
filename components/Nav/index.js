import React, {Component} from 'react'
import Link from 'next/link'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href={{ pathname: '/' }} >
                        <a className="navbar-item" href="#">
                          <img src={this.props.usedFor === "questions" ? "static/images/questions/logo_pm.svg" : "static/images/home/logo.svg" }/>
                        </a>
                    </Link>
                    <div className="right-items">
                        <div className='item'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
