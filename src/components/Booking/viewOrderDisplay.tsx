import React, { FC } from 'react';

interface IbookedData{
    bookedData:any
}

const ViewOrderDisplay:FC<IbookedData> = (propsdata) => {
    const renderTable = (bookdata: any) => {
        if(bookdata){
            return bookdata.map((item: any) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs.{item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            {/* <center><h3>Orders List</h3></center> */}
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Hotel</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(propsdata.bookedData)}
                </tbody>
            </table>
        </div>
    )
}

export default ViewOrderDisplay;