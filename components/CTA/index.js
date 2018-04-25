// Libraries
import React, { Component } from 'react'

// Styles
import styles from './index.sass'

import Button from '../Button'


export default class CTA extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }
    // {`${styles.cta} ${this.props.className}`}
    // ${this.props.className ? this.props.className : ''}

    render() {
        return (
            this.props.position == 'left'
                ? (
                    <section className={`${styles.cta} ${this.props.position} ${this.props.className ? this.props.className : ''}`}>
                        <div className={`${styles.container}`}>
                            <div className='columns'>
                                <div className='column is-6'>
                                    <div className={`${styles.content}`}>
                                        <div className={`${styles.visual} ${styles.right}`}>
                                            <img src={`${this.props.image}`} />
                                        </div>
                                    </div>
                                </div>
                                <div className='column is-6'>
                                    <div className={`${styles.content}`}>
                                        <h2 className={`${this.props.headingColor ? this.props.headingColor : ''}`}>
                                            {this.props.headingText}
                                        </h2>
                                        <p className={`${this.props.paraColor ? this.props.paraColor : ''}`}>
                                            {this.props.paraText}
                                        </p>
                                        <div className={`${styles.actions}`}>
                                            <Button
                                                className='background-primary color-white'
                                                link='/about'
                                                text='Get in Touch'
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                ) : 
                
                this.props.position == 'right' ? (

                    <section className={`${styles.cta} ${this.props.position} ${this.props.className ? this.props.className : ''}`}>
                        <div className={`${styles.container}`}>
                            <div className='columns'>
                                <div className='column is-6'>
                                    <div className={`${styles.content}`}>
                                        <div className={`${styles.visual} ${styles.right}`}>
                                            <img src={`${this.props.image}`} />
                                        </div>
                                    </div>
                                </div>
                                <div className='column is-6'>
                                    <div className={`${styles.content}`}>
                                        <h2 className={`${this.props.headingColor ? this.props.headingColor : ''}`}>
                                            {this.props.headingText}
                                        </h2>
                                        <p className={`${this.props.paraColor ? this.props.paraColor : ''}`}>
                                            {this.props.paraText}
                                        </p>
                                        <div className={`${styles.actions}`}>
                                            <Button
                                                className='background-primary color-white'
                                                link='/about'
                                                text='Get in Touch'
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    

                ) : (
                        <section className={`${styles.cta} ${this.props.position} ${this.props.className ? this.props.className : ''}`}>
                            <div className={`${styles.container}`}>
                            <div className='columns'>
                                <div className='column'>
                                    <div className={`${styles.content}`}>
                                        <h2 className={`${this.props.headingColor ? this.props.headingColor : ''}`}>
                                            {this.props.headingText}
                                        </h2>
                                        <p className={`${this.props.paraColor ? this.props.paraColor : ''}`}>
                                            {this.props.paraText}
                                        </p>
                                        <div className={`${styles.actions}`}>
                                            <Button
                                                className='background-primary color-white'
                                                link='/about'
                                                text='Get in Touch'
                                            />
                                            {/* <Button
                                                className='background-primary color-white'
                                                link='/about'
                                                text='Get in Touch'
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>
                )
        )
    }
}

