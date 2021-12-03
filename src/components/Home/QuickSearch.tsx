import React, {useEffect, useState} from 'react';
import QuickDetail from './QuickDetail';
import './QuickSearch.css'

const quickUrl = 'https://zomatoajulypi.herokuapp.com/quicksearch';

const QuickSearch = () => {

    const [quickData, setQuickdData] = useState();

    useEffect(() => {
        fetch(quickUrl,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => setQuickdData(data))
    }, [])

    return (
        <div id="QuickSearch">
            <QuickDetail quickRestData={quickData} />
        </div>
    )
}

export default QuickSearch;