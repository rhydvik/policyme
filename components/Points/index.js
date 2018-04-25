// Libraries
import React, { Component } from 'react'

// Styles
import styles from './index.sass'

import Container from '../Container'

export default class Points extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  // {`${styles.cta} ${this.props.className}`}
  // {`${styles.}`}
  // ${this.props.className ? this.props.className : ''}
  // `${this.props.className}`

  render() {
    return (
      <section className={`${styles.points} ${this.props.className ? this.props.className : ''}`}>
        <Container>
          <div className={`${styles.heading} ${this.props.headingColor ? this.props.headingColor : ''}`}>
            <h2>{this.props.headingText}</h2>
          </div>
          <div className='columns'>
            <div className='column is-4'>
              <div className={`${styles.content}`}>
                <div className={`${styles.visual}`}>
                  {this.props.visualOne}
                </div>
                <div className={`${styles.info}`}>
                  <h3>{this.props.subHeadingOne}</h3>
                  <p>{this.props.paraOne}</p>
                </div>
              </div>
            </div>
            <div className='column is-4'>
              <div className={`${styles.content}`}>
                <div className={`${styles.visual}`}>
                  {this.props.visualTwo}
                </div>
                <div className={`${styles.info}`}>
                  <h3>{this.props.subHeadingTwo}</h3>
                  <p>{this.props.paraTwo}</p>
                </div>
              </div>
            </div>
            <div className='column is-4'>
              <div className={`${styles.content}`}>
                <div className={`${styles.visual}`}>
                  {this.props.visualThree}
                </div>
                <div className={`${styles.info}`}>
                  <h3>{this.props.subHeadingThree}</h3>
                  <p>{this.props.paraThree}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }
}


