import React, { Component } from 'react'
import Link from 'next/link'


import Button from '../Button'

export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

      
    }

    componentDidMount() {
       
    }

    toggleMenu = () => {
        if (this.state.isAnimationComplete) {
            this.setState({ isMenuOpen: !this.state.isMenuOpen },
                () => {
                    this.setState({
                        isAnimationComplete: false
                    }, () => {
                        setTimeout(() => {
                            this.setState({ isAnimationComplete: true })
                        }, 1701)
                    })

                    if (this.state.isMenuOpen) {
                        document.querySelector('.navbar-items').classList.add('open')
                        document.querySelector('body').classList.add('menu-open')
                        document.querySelector('body').classList.remove('menu-close')
                        if (window.location.pathname !== '/') {
                            document.querySelector('.toggle-menu span').style.color = '#ffffff'
                            document.querySelector('.logo svg path').style.transitionDelay = '.3s'
                            document.querySelector('.toggle-menu span').style.transitionDelay = '.3s'
                            setTimeout(() => {
                                document.querySelector('.logo svg').classList.add('logo-color')
                            }, 400)
                        }
                    } else {
                        document.querySelector('.navbar-items').classList.add('close')
                        document.querySelector('body').classList.add('menu-close')
                        document.querySelector('body').classList.remove('menu-open')
                        if (window.location.pathname !== '/') {
                            document.querySelector('.toggle-menu span').style.color = '#E26A6A'
                            document.querySelector('.logo svg path').style.transitionDelay = '1.6s'
                            document.querySelector('.toggle-menu span').style.transitionDelay = '1.2s'
                            setTimeout(() => {
                                document.querySelector('.logo svg').classList.remove('logo-color')
                            }, 1300)
                        }
                        setTimeout(() => {
                            // document.querySelector('.logo svg').classList.remove('logo-color')
                            document.querySelector('.navbar-items').classList.remove('open')
                            document.querySelector('.navbar-items').classList.remove('close')
                        }, 1601)
                    }
                })
        }
    }


    render() {
        return (
            <div className={'hero-head ' + this.props.theme}>
                <nav className={'nav navbar is-relative ' + this.props.theme}>
                    <div className='container'>
                        <div className='navbar-brand'>
                            <a className='navbar-item logo hide-nav hide-nav-mobile' onClick={() => this.changePage('/')}>
                                {
                                    this.props.logo
                                        ? (
                                            <ZbodsLogoWhite />
                                        )
                                        : (
                                            <ZbodsLogoColor />
                                        )
                                }
                            </a>
                        </div>
                        <div className='navbar-items'>

                            <a
                                onClick={() => this.changePage('/about')}
                                className={this.props.pathname === '/about' ? 'navbar-item about-link hide-nav active' : 'navbar-item about-link hide-nav'}>
                                <div>About</div>
                            </a>
                            <a
                                onClick={() => this.changePage('/sunless-airbrush-spray-tan')}
                                className={this.props.pathname === '/sunless-airbrush-spray-tan' ? 'navbar-item services-link hide-nav active' : 'navbar-item hide-nav services-link'}>
                                <div>Services</div>
                            </a>
                            <a
                                onClick={() => this.changePage('/mobile-spray-tanning')}
                                className={this.props.pathname === '/mobile-spray-tanning' ? 'navbar-item mobile-link hide-nav active' : 'navbar-item hide-nav mobile-link'}>
                                <div>Mobile</div>
                            </a>
                            <a
                                onClick={() => this.changePage('/spray-tanning-products')}
                                className={this.props.pathname === '/spray-tanning-products' ? 'navbar-item products-link hide-nav active' : 'navbar-item hide-nav products-link'}>
                                <div>Products</div>
                            </a>
                            <a
                                onClick={() => this.changePage('/contact')}
                                className={this.props.pathname === '/contact' ? 'navbar-item contact-link hide-nav active' : 'navbar-item hide-nav contact-link'}>
                                <div>Contact</div>
                            </a>
                            <a className='navbar-item btn nav call-us-btn hide-nav' target='_blank' href='tel:6026892111'>
                                <span>Call Us</span>
                            </a>

                        </div>
                        <div
                            className={'toggle-menu hide-nav-mobile ' + this.props.theme}
                            onClick={this.toggleMenu}
                        >
                            <span>{!this.state.isMenuOpen ? 'Menu' : 'Close'}</span>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}



// Active states: 

// className={this.props.pathname === '/about' ? 'navbar-item about-link hide-nav active' : 'navbar-item about-link hide-nav'}