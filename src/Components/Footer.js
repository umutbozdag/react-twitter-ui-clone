/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../scss/Components/_Footer.scss';
export default function Footer() {
    return (
        <div className="Footer">
            <div className="footer-container">
                <ul>
                    <li> <a href="#">Terms</a></li>
                    <li> <a href="#">Privacy policy</a></li>
                    <li> <a href="#">Cookies</a></li>
                    <li> <a href="#">Ads info</a></li>
                </ul>

                <ul>
                    <li> <a href="#">More<i className="fas fa-chevron-down"></i></a></li>
                    <li> © 2020 Twitter, Inc.</li>
                </ul>
            </div>

        </div>
    )
}
