import React from 'react'
import './footer.css'
import logosmall from '../../images/navbarlogo.png'


export default function Footer() {
    return (
        <div className='footer'>
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <div className="footer-logo-img">
                            <img src={logosmall} alt="nervis logo" className='footer-img' />
                        </div>
                    </div>
                    <small className="website-rights">2021 by Moises Nervis Quevedo</small>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/moises-nervis123/" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/mossnrv/" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="sidebarIcon fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/moisesnervis/" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="fab fa-instagram"></i>
                        </a>
                        {/* <a href="https://www.pinterest.com/" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="fab fa-pinterest-square"></i>
                        </a>
                        <a href="https://twitter.com/?lang=en" target='_blank' rel="noreferrer" className='social-icon-link'>
                            <i className="fab fa-twitter-square"></i>
                        </a> */}
                    </div>
                </div>

        </div>
    )
}
