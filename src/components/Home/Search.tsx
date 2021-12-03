import React, { useEffect, useState } from 'react';
import './Search.css'

const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

const Search = () => {

    const [location, setLocation] = useState(null);
    const [restaurants, setrestaurants] = useState();

    useEffect(() => {

        fetch(cityUrl, { method: 'GET' })
            .then((res) => res.json())
            .then(data => setLocation(data))
    }, [])

    function getLocation(data:any){
        if(data){
            return data.map((item:any) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    function changeLocation (event:any)  {
        fetch(`${restUrl}${event.target.value}`)
        .then((res) => res.json())
        .then(data => setrestaurants(data))
    }

    function getResutarent(data:any) {
        if(data){
            return data.map((item:any) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    return (
        <div id="search">
            <div id="logo">
                <span>JS!</span>
            </div>
            <div id="heading">
                Find The Restaurant
            </div>
            <div id="dropdown">
                <select id="city"
                    onChange={changeLocation}>
                    <option>--- Select Current Loction----</option>
                    {getLocation(location)}
                </select>
                <select id="restaurants">
                    <option>----Select Restaurant---- </option>
                    {getResutarent(restaurants)}
                </select>
            </div>
        </div>
    )
}

export default Search;