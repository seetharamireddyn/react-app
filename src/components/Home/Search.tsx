import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div id="search">
            <div id="logo">
                <span>JS!</span>
            </div>
            <div id="heading">
                Find The Restaurant
            </div>
            <div id="dropdown">
                {/* <select id="city" 
                onChange={changeLocation}>
                    <option>--- Select Current Loction----</option>
                    {getLocation(location)}
                </select>
                <select id="restaurants">
                    <option>----Select Restaurant---- </option>
                    {getRestutarent(restaurants)}
                </select> */}
            </div>
        </div>
    )
}

export default Search;