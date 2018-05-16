import React, {Component} from 'react'
import Link from 'next/link'
import renderIf from 'render-if';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const renderProgressbar = renderIf(this.props.progressBar !== undefined);
        return (
            <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href={{ pathname: '/' }} >
                        <a className="navbar-item" href="#">
                          <img src="../../static/images/home/logo.svg" />
                        </a>
                    </Link>
                    <div className="right-items">
                        <div className='item'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                {renderProgressbar(
                  <div style={{ width: `${this.props.progressBar}%` , border: '1px solid #1bb0db', transition: '.5s', position: 'absolute', bottom: '0' }} />
                )}
            </nav>
        )
    }
}
