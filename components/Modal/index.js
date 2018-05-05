import React, { Component } from 'react';
import Modal from 'react-modal';
import Nav from '../Nav/index'
import styles from '../../styles/index.sass';
import Button from '../Button/index';

class PopUp extends Component {
  render() {
  const modalStyle = {
      overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
      content: {
          backgroundColor: 'white',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          minHeight: '300px',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          borderRadius: '30px',
          padding: '0',
          width: '100%',
          overflow: 'initial',
      },
  };
    return (
            <Modal style={modalStyle} isOpen={this.props.isOpen} onRequestClose={this.props.closeModal} >
              <div className={styles.mainBox}>
                  <div className={styles.modalNav}>
                    <Nav usedFor="questions" showQuestionMark={true} showHeader={false} />
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
