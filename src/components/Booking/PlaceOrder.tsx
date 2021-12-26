import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './placeOrder.css';

const menu_url = "http://zomatoajulypi.herokuapp.com/menuItem";
const post_url = "http://localhost:3214/booking";

const PlaceOrder = () => {

    var orderIds: any | undefined = [];

    const params = useParams();

    var order = {
        id: Math.floor(Math.random() * 100000),
        hotel_name: params.restName,
        name: 'Sriram',
        phone: '702600980',
        email: 'nsr@gmail.com',
        cost: 0,
        address: '#304A',
        details: []
    }

    const orderDet = [{
        name: null,
        image: null,
        price: null
    }]

    const [cost, setCost] = useState(0);
    const [menuDetails, setMenuDetail] = useState(orderDet);

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
                    order.cost = order.cost + parseInt(item.menu_price);
                    orderDet.push({ name: item.menu_name, image: item.menu_image, price: item.menu_price})
                    return 'ok'
                })

                setMenuDetail(orderDet);
                setCost(order.cost);
            })
    }, [])

    function getOrderIds() {
        const menuItems = JSON.parse(window.sessionStorage.getItem('menu') || '[]');
        debugger;
        return menuItems.map((item: any) => {
            return orderIds.push(parseInt(item));
        })

    };

    function handleChange(event: any) {
        [event.target.name] = event.target.value;
    }

    function handleSubmit() {
        order.details = JSON.parse(window.sessionStorage.getItem('menu') || '[]');

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

    const orderDetails = (data: any) => {
        console.log(data);
        if (data) {
            return data.map((item: any, index: number) => {
                if (item.name !== null) {
                    return (
                        <div className="orderItems" key={index}>
                            <img src={item.image} alt={item.name} />
                            <span>
                                <h5>{item.name}</h5>
                                <h4>Rs. {item.price}</h4>
                            </span>
                        </div>
                    )
                }
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
                        {orderDetails(menuDetails)}
                        <input type="hidden" name="cost" value={cost} />
                        <input type="hidden" name="id" value={order.id} />
                        <input type="hidden" name="hotel_name" value={order.hotel_name} />
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total cost is Rs.{cost}</h2>
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