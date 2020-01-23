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
                        <i className="far fa-bell"><a href="#">Notifications</a>
                        </i>
                        <i className="far fa-envelope"><a href="#">Messages</a></i>
                        <i className="far fa-bookmark"><a href="#">Bookmarks</a></i>
                        <i className="far fa-list-alt"> <a href="#">Lists</a></i>
                        <i className="far fa-user"><a href="#">Profile</a>
                        </i>
                        <i className="far fa-dot-circle"><a href="#">More</a></i>
                    </div>
                    <button className="tweet-button">Tweet</button>
                </div>
            </div >
        )
    }

}
