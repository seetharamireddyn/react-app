import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RestDetail.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDetail from './MenuDetails';

const url = "https://zomatoajulypi.herokuapp.com/details";
const menu = "https://zomatoajulypi.herokuapp.com/menu";

const RestDetail = () => {

    const params = useParams();
    const [details, setDetails] = useState<any>(null);
    const [menuList, setMenuList] = useState();
    const [userItem, setUserItem] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        (async () => {
            const res = await axios.get(`${url}/${params.restid}`);
            setDetails(res.data[0]);
        })();

        (async () => {
            const res = await axios.get(`${menu}/${params.restid}`);
            setMenuList(res.data);
        })();

    }, [params.restid]);

    function proceed() {
        sessionStorage.setItem('menu', JSON.stringify(userItem));
        //navigate(`/placeOrder/${details.restaurant_name}`);
    }

    function addToCart(data: any) {
        setUserItem(data)
    }

    const restData = (details: any) => {

        if (details != null) {
            return (
                <div className="container">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h2>{details.restaurant_name}</h2>
                        </div>
                        <div className="panel-body">
                            <img src={details.restaurant_thumb} alt={details.restaurant_thumb} className="sliderImage" />
                            <hr />
                            <h2>{details.restaurant_name}</h2>
                            <h2>{details.rating_text}</h2>
                            <h2>{details.average_rating} Stars</h2>
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Contact</Tab>
                                    <Tab>Menu</Tab>
                                </TabList>

                                <TabPanel>
                                    <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Contact Number: {details.contact_number}</h2>
                                    <h2>Address: {details.address}</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Menu</h2>
                                    <MenuDetail menuData={menuList}
                                        finalOrder={(data: any) => { addToCart(data) }} />
                                </TabPanel>
                            </Tabs>
                            <button className="btn btn-success" onClick={() => proceed()}>Proceed</button>
                        </div>
                    </div>
                </div>

            )
        }
    }

    return (
        <>
            {restData(details)}
        </>
    )
}

export default RestDetail;