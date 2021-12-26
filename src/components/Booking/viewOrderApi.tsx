import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderDisplay from './viewOrderDisplay';

const url = "http://localhost:3214/booking";

const ViewOrderApi = () => {

    const [booking, setBooking] = useState();
    //const queryParams = new URLSearchParams(window.location.search)

    useEffect(() => {
        // if(queryParams){
        //     var data = {
        //         "status":params.split('&')[1].split('=')[1],
        //         "date":serachParam.split('&')[2].split('=')[1],
        //         "bank":serachParam.split('&')[3].split('=')[1],
        //     }
        //     var id = serachParam.split('&')[1].split('=')[1].split('_')[1];
        //     fetch(`${url}/${id}`,{
        //         method:'PATCH',
        //         headers: {
        //             'Accept':'application/json',
        //             'Content-Type':'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        // }

        axios.get(`${url}?email=nsr@gmail.com`)
            .then((res: any) => setBooking(res.data));
    })
    return (
        <>
            <OrderDisplay bookedData={booking} />
        </>
    )

}

export default ViewOrderApi;