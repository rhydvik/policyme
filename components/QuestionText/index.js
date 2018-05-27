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

    render() {

        return (
            <div >
                <a className={this.props.textStyle} onClick={this.openModal}>{this.props.label}</a>
                {renderIf(this.state.modalIsOpen)(
                    <Modal  isOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
                )}
            </div>
        )
    }
}
