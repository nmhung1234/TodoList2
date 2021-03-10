import React from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
let token = JSON.parse(localStorage.getItem("token"));

const route = () => {
    if (token) {
        return <Route path="/home" component={Home} />;
    } else {
        <Route path="/login" component={Login} />;
    }
};

export default route;
