import React from 'react';
import { Component } from 'react';
import '../scss/Components/Home.scss';
const data = require('../db.json');


export default class Home extends Component {

    componentDidMount() {
        this.displayPosts();
        console.log(data);
    }


    displayPosts = () => {
        console.log('data');
    }

    render() {
        return (
            <div className="Home">
                <div className="container">
                    <section className="tweet-section">
                        <div className="header">
                            <h3>Home</h3>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="tweet-input">
                            <i className="fas fa-user-alt user-pic"></i>
                            <input type="text" placeholder="What's happening?" />
                        </div>
                        <div className="social-buttons">
                            <div className="left">
                                <i className="far fa-image"></i>
                                <i className="far fa-image"></i>
                                <i className="fas fa-poll"></i>
                                <i className="far fa-smile"></i>
                            </div>
                            <div className="right">
                                <i className="far fa-circle"></i>
                                <i className="fas fa-plus"></i>
                                <button className="tweet-button">Tweet</button>
                            </div>
                        </div>
                    </section>
                    <div className="wrapper"></div>
                    <section className="tweets">
                        <div className="tweet">
                            <div className="tweet-row">

                                <div className="tweet-column">
                                    <img className="user-photo" src="https://randomuser.me/api/portraits/men/44.jpg" alt="User face" />

                                </div>

                                <div className="tweet-column">
                                    <div className="tweet-user-info">
                                        <a href="#" className="name">Name</a>
                                        <p className="username-time">@Username · 5m</p>
                                        <i className="fas fa-chevron-down"></i>
                                    </div>

                                    <div className="tweet-content">
                                        <p className="tweet-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quae perspiciatis dolorem eaque sint quaerat velit, ullam exercitationem magnam, expedita mollitia qui autem voluptate distinctio totam sed ex reprehenderit aut beatae. Eaque, illo. Nam similique ea veritatis voluptates iste perspiciatis.</p>
                                        <img className="tweet-photo" src="https://www.smartworld.it/wp-content/uploads/2018/07/Facebook-Mark-Zuckerberg.jpg" alt="Tweet img" />


                                        <div className="social-buttons">
                                            <div className="comment">
                                                <i className="far fa-comment"></i>
                                                <p>8</p>
                                            </div>

                                            <div className="retweet">
                                                <i className="fas fa-retweet"></i>
                                                <p>3</p>
                                            </div>

                                            <div className="heart">
                                                <i className="far fa-heart"></i>
                                                <p>235</p>
                                            </div>
                                            <div className="upload">
                                                <i className="fas fa-upload"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }

}
