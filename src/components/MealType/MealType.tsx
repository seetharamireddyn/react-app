import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import './MealType.css';

interface IrestDataProps {
    restData?: any,
    mealId?: string
}

const MealType: FC<IrestDataProps> = (restDataProps: any) => {

    const restDetail = (restData: any, mealId: string) => {
        if(restData){
             if(restData != null){
                return restData.map((rest:any) => {
                    return (
                        <div className="item" key={rest._id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img className="Image" alt={rest.restaurant_name} src={rest.restaurant_thumb} />
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${rest.restaurant_id}`}>{rest.restaurant_name}</Link>
                                        <div className="city_name">{rest.address}</div>
                                        <div className="city_name">{rest.rating_text}</div>
                                        <div className="city_name">Rs. {rest.cost}</div>
                                        <div className="labelDiv" >
                                            {rest.mealTypes.map(function (mealType:any) {
                                                return (
                                                    <span className={ mealType.mealtype_id === Number(mealId) ? "label label-success" : "label label-primary"}
                                                        key={mealType.mealtype_id}>
                                                        {mealType.mealtype_name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                        <div className="labelDiv">
                                            {rest.cuisines.map(function (cuisine:any, index:number) {
                                                return (
                                                    <span className={index === 1 ? "label label-danger" : "label label-info"}
                                                        key={cuisine.cuisine_id}>
                                                        {cuisine.cuisine_name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
            else{
                <div className="item">No Data</div>
            }
        }
        else{
            <div className="item"> 
                <img src="/images/loader.gif" alt="loader" />
            </div>
        }
    }

    return (
        <div id="content">
            {restDetail(restDataProps.restData, restDataProps.mealId)}
        </div>
    )
}

export default MealType;