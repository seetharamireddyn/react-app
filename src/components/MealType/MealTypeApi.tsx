import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
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
                    <div className="col-md-5 col-md-offset-3">
                        <h1>Filter</h1>
                    </div>
                    {/* <CuisineFilter 
                            mealId={this.state.mealId}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                        <CostFilter mealId={this.state.mealId}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/> */}
                </div>
                <MealType restData={restList} mealId={params.id}/>
            </div>
        </div>
    )
}

export default MealTypeApi;