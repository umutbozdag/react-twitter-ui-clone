import React, { Component } from 'react'
import Search from './Search';
import '../scss/Components/_Trends.scss';

export default class Trends extends Component {
    render() {
        return (
            <div className="Trends">
                <Search></Search>
                <div className="trends-container">
                    <div className="header">
                        <h2>Trends for you</h2>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="wrapper"></div>
                    <div className="trendings">
                        <div className="trend">
                            <div className="trend-info-top">
                                <p className="trend-location">Trending in Turkey</p>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <h3 className="trend-title">#mytrend</h3>
                            <p className="tweet-count">57.5K Tweets</p>
                            <div className="wrapper"></div>
                        </div>
                        <div className="trend">
                            <div className="trend-info-top">
                                <p className="trend-location">Trending in Turkey</p>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <h3 className="trend-title">#mytrend</h3>
                            <p className="tweet-count">57.5K Tweets</p>
                            <div className="wrapper"></div>
                        </div>

                        <div className="trend">
                            <div className="trend-info-top">
                                <p className="trend-location">Trending in Turkey</p>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <h3 className="trend-title">#mytrend</h3>
                            <p className="tweet-count">57.5K Tweets</p>
                            <div className="wrapper"></div>
                        </div>

                        <div className="trend">
                            <div className="trend-info-top">
                                <p className="trend-location">Trending in Turkey</p>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <h3 className="trend-title">#mytrend</h3>
                            <p className="tweet-count">57.5K Tweets</p>
                            <div className="wrapper"></div>
                        </div>
                    </div>
                    <button className="show-more-btn">Show more</button>
                </div>
            </div>
        )
    }
}
