import React , { Component} from 'react';
import Nav from 'components/Nav';
import Button from 'components/Button';
import styles from '../styles/index.sass';

class Popup extends  Component {

    state = {
        name: '',
        email: '',
        yourQuestion: ''
    }

    render(){
        return(
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

        );
    }
}


export default Popup;