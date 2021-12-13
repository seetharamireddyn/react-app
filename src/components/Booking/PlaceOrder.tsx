import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './placeOrder.css';

const menu_url = "http://zomatoajulypi.herokuapp.com/menuItem";
const post_url = "http://localhost:3214/booking";

const PlaceOrder = () => {

    let orderIds: any;
    const params = useParams();

    var menuDetails = [{
        name: '',
        img: null
    }]

    var order = {    
        id:Math.floor(Math.random()*100000),
        hotel_name:params.restName,
        name:'Sriram',
        phone:'702600980',
        email:'nsr@gmail.com',
        cost:0,
        address:'#304A',
        details:''
    }

    const [cost, setCost] = useState(0);
    const [details, setDetails] = useState(menuDetails);

    useEffect(() => {

        getOrderIds();

        fetch(menu_url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderIds)
        })
            .then((res) => res.json())
            .then((data) => {

                data.map((item: any) => {

                    setCost(cost + parseInt(item.menu_price))
                    menuDetails.push(item.menu_name, item.menu_image)

                    return 'ok'
                })

                setDetails(menuDetails);
            })
    }, [cost, menuDetails, getOrderIds()])

    function getOrderIds() {
        let menuItems = JSON.parse(sessionStorage.getItem('menu') || '{}');

        return ((menuItems: any) => {
            return menuItems.map((item: any) => {
                return orderIds.push(item);
            })
        })

    };

    function handleChange(event: any) {
        [event.target.name] = event.target.value ;
    }

    function handleSubmit() {
        order.details = sessionStorage.getItem('menu') || '';

        fetch(post_url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(response => console.log(response))
        .catch(error => alert('Error! ' + error.message))
    }

    const renderItems = (data: any) => {
        if (data) {
            return data.map((item: any, index: number) => {
                return (
                    <div className="orderItems" key={index}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                )
            })
        } else {
            return (
                <img src="/images/loader.gif" alt="loader" />
            )
        }
    }

    return (
        <div className="container">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3>
                        Your Order From {params.restName}
                    </h3>
                </div>
                <div className="panel-body">
                    <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name"
                                            value={order.name} onChange={(event) => { handleChange(event) }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email"
                                            value={order.email} onChange={(event) => { handleChange(event) }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control" name="phone"
                                            value={order.phone} onChange={(event) => { handleChange(event) }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" name="address"
                                            value={order.address} onChange={(event) => { handleChange(event) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {renderItems(order.details)}
                        <input type="hidden" name="cost" value={order.cost} />
                        <input type="hidden" name="id" value={order.id} />
                        <input type="hidden" name="hotel_name" value={order.hotel_name} />
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total cost is Rs.{order.cost}</h2>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={() => { handleSubmit() }}
                            type="submit">
                            Checkout
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default PlaceOrder;