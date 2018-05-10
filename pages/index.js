// Libraries
import React, {Component} from 'react'
import Link from 'next/link'

// Components

import CTA from 'components/CTA'
import DetailedCTA from 'components/DetailedCTA'
import Points from 'components/Points'
import Button from 'components/Button'

import {PointsCircle} from 'components/SVG/PointsCircle'
import Nav from "../components/Nav";
import styles from '../styles/index.sass'

export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("Index Component mounted.")
    }

    render() {
        return (
            <div className='home-wrapper'>
                <Nav>
                    <div className='item'>
                        Insurance 101
                    </div>
                    <div className='item'>
                        Blog
                    </div>
                </Nav>
                <div className="columns row-about-us">
                    <div className="column">
                        <div className='main-text'>
                            We are on a mission to simplify life insurance.
                        </div>
                        <div className='hint-text show-for-large-only'>
                            We offer customized and automated advice on your life insurance needs.
                        </div>
                        <div className='hint-text show-for-small-only'>
                            Get your customized advice on your life insurance needs.
                        </div>
                        <div className='action'>
                            <Link href={{ pathname: '/questions' }}>
                               <button className="action-button button is-primary">GET ADVICE</button>
                            </Link>
                        </div>
                    </div>
                    <div className="column" id='column-image-1'>
                            <div id='image-1-background' className='image-background'></div>
                            <img id='image-1' src="static/images/home/home-image-1.jpg" className='image' />
                    </div>
                </div>
                <hr className='show-for-large-only'/>
                <div className="columns row-about-us second">
                    <div className="column show-for-large-only">
                        <div>
                            <div id='image-2-background' className='image-background'></div>
                            <img id='image-2' className='image' src="static/images/home/home-image-2.jpg"/>
                        </div>
                    </div>
                    <div className="column">
                        <div className='main-text'>
                            The guidance you need without the pressure you don’t.
                        </div>
                        <div className='hint-text'>
                            You tell us a little about your family, health and financial situation and we recommend a
                            life insurance policy customized for you.
                        </div>
                    </div>
                </div>
                <hr className='show-for-large-only'/>
                <div className="columns row-about-us third">
                    <div className="column">
                        <img src="static/images/home/chat-icon.svg"/>
                        <div>
                            You tell us a little about your family, health and financial situation.
                        </div>
                    </div>
                    <div className="column">
                        <img src="static/images/home/report-icon.svg"/>
                        <div>
                            You tell us a little about your family, health and financial situation.
                        </div>
                    </div>
                    <div className="column">
                        <img src="static/images/home/shape-icon.svg"/>
                        <div>
                            You tell us a little about your family, health and financial situation.
                        </div>
                    </div>
                </div>

                <div className="row-about-us forth">
                    <div className='columns'>
                        <div className="column">
                            <div className='main-text'>
                                Real quotes from the insurers you know.
                            </div>
                            <div className='hint-text'>
                                We have built a proprietary life insurance algorithm that assesses your needs and
                                recommends the best product for you – regardless of commission structure. Life insurance
                                is complicated, and our advice engine can help you find the the best protection in the
                                most cost-effective way.
                            </div>
                            <div className='action'>
                                <Link href={{ pathname: '/questions' }}>
                                 <button className="action-button button invert">GET ADVICE</button>
                                </Link>
                            </div>
                        </div>
                        <div className="column image-column show-for-large-only">
                            <img src="static/images/home/image-tilt.svg"/>
                        </div>
                        <div className="column image-column show-for-small-only">
                            <img src="static/images/home/phone.svg"/>
                        </div>
                    </div>
                </div>
                <div className="columns row-about-us second fifth">
                    <div className="column image-column">
                        <div>
                            <div id='image-3-background' className='image-background'></div>
                            <img id='image-3' className='image' src="static/images/home/home-image-3.jpg"/>
                        </div>
                    </div>
                    <div className="column">
                        <div className='main-text'>
                            Not your typical insurance salesman.
                        </div>
                        <div className='hint-text'>
                            <p>We know that life insurance is fundamental to a sound financial plan. That is why we
                                believe
                                life insurance advice should be transparent, customized and most importantly,
                                convenient.
                            </p>

                            <p>We are an experienced team trying to change the insurance industry with a customer first
                                approach. We have built an advice engine that looks at your needs and recommends the
                                best
                                product for you – regardless of commission structure. Let us help you find the the best
                                protection in the most cost-effective way.</p>
                        </div>
                    </div>
                </div>
                <hr className='show-for-large-only'/>
                <div className="row-about-us sixth">
                    <div className='main-text'>
                        Answers to all of your life insurance questions every step of the way.
                    </div>
                    <div className='action'>
                        <button className="action-button button is-primary">LEARN MORE</button>
                    </div>
                </div>
                <div className="row-about-us forth seventh">
                    <div className='columns text-center'>
                        <div className="column cards-column">
                            <div className="cards">
                                <img src="static/images/home/card-image3.jpg"/>
                                <div className='text'>
                                    Life Insurance 101
                                </div>
                            </div>
                        </div>
                        <div className="column cards-column">
                            <div className="cards">
                                <img src="static/images/home/card-image1.jpg"/>
                                <div className='text'>
                                    The truth about guaranteed issue life insurance
                                </div>
                            </div>
                        </div>
                        <div className="column cards-column">
                            <div className="cards">
                                <img src="static/images/home/card-image2.jpg"/>
                                <div className='text'>
                                    Why term life insurance makes sense for most people
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-about-us eight">
                    <div className='main-text'>
                        <div>
                            <img src="static/images/home/question-icon.svg"/>
                        </div>
                        <div className='text'>
                            Questions?<br/>
                            Reach us here
                        </div>
                    </div>
                    <div className='link-section columns'>
                        <div className='links column'>
                            <img src="static/images/home/phone-icon.svg"/>
                            <div>
                                647-355-0909
                            </div>
                        </div>
                        <div className='links column'>
                            <img src="static/images/home/message-icon.svg"/>
                            <div>
                                info@policyme.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-about-us forth ninth">
                    <div className='main-text'>
                        Don’t wait.<br/>
                        Get the advice you need.
                    </div>
                    <div className='action'>
                        <Link href={{ pathname: '/questions' }}>
                           <button className="action-button button invert">GET ADVICE</button>
                        </Link>
                    </div>
                </div>
                <div className="row-about-us tenth">
                    <div className='columns footer-links'>
                        <div className="column link">
                            <div className="header">
                                POLICYME
                            </div>
                            <div className="item">
                                Who We Are
                            </div>
                            <div className="item">
                                Contact Us
                            </div>
                        </div>
                        <div className="column link">
                            <div className="header">
                                LEARN MORE
                            </div>
                            <div className="item">
                                Life Insurance 101
                            </div>
                            <div className="item">
                                Blog
                            </div>
                        </div>
                        <div className="column link">
                            <div className="header">
                                LEGAL
                            </div>
                            <div className="item">
                                Terms of Use
                            </div>
                            <div className="item">
                                Privacy
                            </div>
                            <div className="item">
                                Disclosure
                            </div>
                            <div className="item">
                                File a complaint
                            </div>
                        </div>
                        <div className="column link">
                            <div className="header">
                                SOCIAL
                            </div>
                            <div className="item">
                                <img src='static/images/home/fb.svg'/>
                                <img src='static/images/home/linked-in.svg'/>
                                <img src='static/images/home/instagram.svg'/>
                            </div>
                        </div>
                    </div>
                    <div className='copyright-links'>
                        <div>© 2018 PolicyMe Corp</div>
                        <div>60 Adelaide St E Toronto, ON, M5C 3E4</div>
                    </div>
                </div>
            </div>
        )
    }
}
