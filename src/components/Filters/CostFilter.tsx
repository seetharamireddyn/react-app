import React from 'react';

const CostFilter = () => {
    return (
        <>
            <div className="col-md-10 col-md-offset-3">
                <h4>Cost Filter</h4>
            </div>
            <div style={{ marginLeft: '30%' }} >
                <label className="radio">
                    <input type="radio" value="" name="cuisine" />All
                </label>
                <label className="radio">
                    <input type="radio" value="100-300" name="cuisine" />100-300
                </label>
                <label className="radio">
                    <input type="radio" value="301-500" name="cuisine" />301-500
                </label>
                <label className="radio">
                    <input type="radio" value="501-700" name="cuisine" />501-700
                </label>
                <label className="radio">
                    <input type="radio" value="701-1000" name="cuisine" />701-1000
                </label>
                <label className="radio">
                    <input type="radio" value="1001-2000" name="cuisine" />1001-2000
                </label>
            </div>
            <hr />
        </>
    )
}

export default CostFilter;