import React, { Component } from "react";

import "./../../App.css";
import logoIcon from "./../../image/tick.svg";

import AlreadyDone from "../AlreadyDone/AlreadyDone";
import FormControl from "../FormControl/FormControl";
class Todos extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="todolist not-done rounded">
                    <h1>
                        {/* <span> */}
                        <img className="logo" src={logoIcon} alt="" />
                        {/* </span> */}
                        Todo Tasks
                    </h1>
                    <FormControl />
                </div>
                <AlreadyDone />
            </div>
        );
    }
}

export default Todos;
