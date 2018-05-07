import React, { Component } from 'react';
import Modal from 'react-modal';
import Radium from 'radium';
import Nav from '../Nav/index'
import styles from './index.sass';
import Button from '../Button/index';

class PopUp extends Component {
  render() {
  const modalStyle = {
      overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
      content: {
          background: 'none',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          minHeight: '300px',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          borderRadius: '0',
          padding: '0',
          width: '100vw',
          height: '100vh',
          overflow: 'initial',
      },
  };
    return (
            <Modal style={modalStyle} isOpen={this.props.isOpen} onRequestClose={this.props.closeModal} >
              <div className={styles.modalBox}>
                  <div className={styles.modalNav}>
                      <Nav usedFor="questions" >
                         <img src="/static/images/close.svg" onClick={this.props.closeModal} />
                      </Nav>
                  </div>
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
                            placeholder="Your Question..."
                            onChange={(e) => console.log(e) }/>

                        <Button   label='Submit' />
                    </div>
                </div>
            </Modal>
    );
  }
}


export default Radium(PopUp);
