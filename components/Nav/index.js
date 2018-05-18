import React, {Component} from 'react';
import Link from 'next/link';
import renderIf from 'render-if';
import Modal from '../../components/Modal/index';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        }
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };


    closeModal = () => {
        this.setState({modalIsOpen: false});
    };
    parseInt(num) {
        return parseInt(num);
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
                        <div className='item' onClick={this.openModal}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                {renderIf(this.state.modalIsOpen)(
                    <Modal  isOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
                )}
                {renderProgressbar(
                    <div style={{ width: `${this.props.progressBar}%` , border: '1px solid #1bb0db', transition: '.5s', position: 'absolute', bottom: '0' }} >
                        <div style={{position: 'absolute', right: '-15px', fontSize: '14px', paddingTop: '2px', color: '#1bb0db'}}>{this.parseInt(this.props.progressBar)}%</div>
                    </div>
                )}
            </nav>
        )
    }
}
