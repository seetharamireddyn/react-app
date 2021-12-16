import React from 'react';

const CuisineFilter = () => {
    return (
        <>
            <div className="col-md-10 col-md-offset-3">
                <h4>Cuisine Filter</h4>
            </div>
            <div style={{ marginLeft: '30%' }}>
                <label className="radio">
                    <input type="radio" value="" name="cuisine" />All
                </label>
                <label className="radio">
                    <input type="radio" value="1" name="cuisine" />North Indian
                </label>
                <label className="radio">
                    <input type="radio" value="2" name="cuisine" />South Indian
                </label>
                <label className="radio">
                    <input type="radio" value="3" name="cuisine" />Chinese
                </label>
                <label className="radio">
                    <input type="radio" value="4" name="cuisine" />Fast Food
                </label>
                <label className="radio">
                    <input type="radio" value="5" name="cuisine" />Street Food
                </label>
            </div>
            <hr />
        </>
    )
}

export default CuisineFilter;