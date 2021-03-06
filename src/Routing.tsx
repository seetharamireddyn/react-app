import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import MealTypeApi from "./components/MealType/MealTypeApi";
import RestDetail from "./components/RestDetails/RestDetail";
import PlaceOrder from "./components/Booking/PlaceOrder";
import ViewOrder from "./components/Booking/viewOrderApi";

const Routing = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mealid" element={<MealTypeApi />}>
                    <Route path=":id" element={<MealTypeApi />} />
                </Route>
                <Route path="/details" element={<RestDetail />}>
                    <Route path=":restid" element={<RestDetail />} />
                </Route>
                <Route path="/placeOrder" element={<PlaceOrder />}>
                    <Route path=":restName" element={<PlaceOrder />} />
                </Route>
                <Route path="/viewBooking" element={<ViewOrder/>} /> 
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}

export default Routing;