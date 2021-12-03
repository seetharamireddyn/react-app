import React, {FC} from 'react';
import {Link} from 'react-router-dom';

interface IquickRestDataProps {
    quickRestData?:[]
}

const QuickDetail : FC<IquickRestDataProps> = ({quickRestData}) => {

    const quickMeal = (quickData:any) => {
        if(quickData){
            return quickData.map((item:any) => {
                return(
                    <Link to={`/mealid/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt=""/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }         

    return(
        <div className="quickSearchContainer">
        <p className="quickSearchHeading">
            Quick Search
        </p>
        <p className="quickSearchSubHeading">
            Discover Restaurant By Meal Type
        </p>
        <br/>
        {quickMeal(quickRestData)}
    </div>
    )
}

export default QuickDetail;