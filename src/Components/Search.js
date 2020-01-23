import React from 'react'
import '../scss/Components/_Search.scss';
export default function Search() {
    const searchText = "Search Twitter";
    return (
        <div className="Search">
            <div className="container">

                <div className="search-input">
                    <i className="fas fa-search"></i>
                    <input placeholder={searchText} type="text" />
                </div>
            </div>
        </div>
    )
}
