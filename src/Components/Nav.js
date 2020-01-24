/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Component } from 'react';
import '../scss/Components/_Nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="container">
                    <i className="fab fa-twitter nav-icon"></i>
                    <div className="links">
                        <div className="link">
                            <i className="active fas fa-home"><a className="active" href="#">Home</a></i>
                        </div>
                        <div className="link">
                            <i className="fas fa-hashtag"> <a href="#">Explore</a></i>
                        </div>
                        <div className="link">
                            <i className="far fa-bell"><a href="#">Notifications</a>
                            </i>
                        </div>

                        <div className="link">
                            <i className="far fa-envelope"><a href="#">Messages</a></i>
                        </div>

                        <div className="link">
                            <i className="far fa-bookmark"><a href="#">Bookmarks</a></i>
                        </div>

                        <div className="link">
                            <i className="far fa-list-alt"> <a href="#">Lists</a></i>
                        </div>

                        <div className="link">
                            <i className="far fa-user"><a href="#">Profile</a></i>
                        </div>
                        <div className="link">
                            <i className="far fa-dot-circle"><a href="#">More</a></i>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="tweet-button">Tweet</button>
                        <button className="tweet-button-mobile"><i className="fas fa-pen-alt"></i></button>
                    </div>

                </div>
            </div >
        )
    }

}
