import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderDisplay from './viewOrderDisplay';

const url = "http://localhost:3214/booking";

const ViewOrderApi = () => {

    const [booking, setBooking] = useState();

    useEffect(() => {
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