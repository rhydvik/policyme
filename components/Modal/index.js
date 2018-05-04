import React, { Component } from 'react';
import Modal from 'react-modal';
import Nav from '../Nav/index'
import styles from '../../styles/index.sass';
import Button from '../Button/index';

class PopUp extends Component {
  render() {
    return (
            <Modal  isOpen={this.props.isOpen} onRequestClose={this.props.closeModal} >
              <div className={styles.mainBox}>
                    <Nav showHeader={false} />
                    <div className={styles.popupContainer}>
                        <p>Questions? ... Leave them here. </p>
                        <input
                            className={styles.input}
                            placeholder="Name"
                            onChange={(e) => console.log(e) }/>

                        <input
                        className={styles.input}
                        placeholder="Email"
                        onChange={(e) => console.log(e) }/>

                        <textarea
                            className={styles.input}
                            placeholder="Your Question"
                            placeholder="Your Question..."
                            onChange={(e) => console.log(e) }/>

                        <Button   label='Submit' />
                    </div>           
                </div>
            </Modal>
    );
  }
}


export default PopUp