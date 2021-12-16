import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CostFilter from '../Filters/CostFilter';
import CuisineFilter from '../Filters/CuisineFilter';
import MealType from './MealType';
import './MealType.css'

const mealTypeUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

const MealTypeApi = () => {
    const params = useParams();
    const [restList, setRestList] = useState();

    useEffect(() => {
        axios.get(`${mealTypeUrl}${params.id}`)
        .then((res:any) => setRestList(res.data));
    },[params.id]);

    return (
        <div className="row">
            <div id="mainListing">
                <div id="filter">
                    <div className="col-md-10 col-md-offset-4">
                        <h2>Filter</h2>
                    </div>
                    <CostFilter />
                    <CuisineFilter />
                </div>
                <MealType restData={restList} mealId={params.id}/>
            </div>
        </div>
    )
}

export default MealTypeApi;