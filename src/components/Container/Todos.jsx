import React from "react";

import "./../../App.css";
import logoIcon from "./../../image/tick.svg";

import AlreadyDone from "../AlreadyDone/AlreadyDone";
import FormControl from "../FormControl/FormControl";

export default function Todos() {
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
