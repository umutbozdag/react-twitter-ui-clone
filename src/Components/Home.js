import React from 'react';
import { Component } from 'react';
import '../scss/Components/_Home.scss';


export default class Home extends Component {

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
                        {this.props.tweets.map((tweet, index) => (
                            <div key={tweet.id} className="tweet">
                                <div className="tweet-row">

                                    <div className="tweet-column">
                                        <img className="user-photo" src={tweet.profile_img} alt="User face" />

                                    </div>

                                    <div className="tweet-column">
                                        <div className="tweet-user-info">
                                            <a href={tweet.author} className="name">{tweet.author}</a>
                                            <p className="username-time">@{tweet.nick} · {tweet.time}</p>
                                            <i className="fas fa-chevron-down"></i>
                                        </div>

                                        <div className="tweet-content">
                                            <p className="tweet-desc">{tweet.message}</p>
                                            <img className="tweet-photo" src={tweet.image} alt="Tweet img" />


                                            <div className="social-buttons">
                                                <div className="comment">
                                                    <i className="far fa-comment"></i>
                                                    <p>{tweet.comments.length}</p>
                                                </div>

                                                <div className="retweet">
                                                    <i className="fas fa-retweet"></i>
                                                    <p>{tweet.retweets.length}</p>
                                                </div>

                                                <div className="heart">
                                                    <i onClick={() => this.likeTweet(index, tweet)} className="far fa-heart"></i>
                                                    <p>{tweet.likes.length}</p>
                                                </div>
                                                <div className="upload">
                                                    <i className="fas fa-upload"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </section>
                </div>
            </div>
        )
    }

}
