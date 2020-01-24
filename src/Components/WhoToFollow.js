import React, { Component } from 'react'
import '../scss/Components/_WhoToFollow.scss'
export default class WhoToFollow extends Component {
    render() {
        const MAX_PEOPLE = 3
        const tweets = this.props.tweets;
        tweets.length = MAX_PEOPLE;
        return (
            <div className="WhoToFollow">
                <div className="container">

                    <h2 className="title">Who to follow</h2>
                    <div className="wrapper"></div>

                    <div className="follow-suggestions">
                        {tweets.map((tweet, index) => (
                            <div key={tweet.id} className="suggestion">
                                <div className="img-container">
                                    <img className="person-img" src={tweet.profile_img} alt="" />
                                </div>

                                <div className="person-info-container">
                                    <p className="person-name">{tweet.author}</p>
                                    <p className="person-username">@{tweet.nick}</p>
                                </div>

                                <div className="btn-container">
                                    <button className="follow-btn">Follow</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="wrapper"></div>
                    <button className="show-more-btn">Show more</button>
                </div>
            </div>
        )
    }
}
