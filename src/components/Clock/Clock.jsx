import React, { useState, useEffect, Fragment } from "react";

import "./style.css";

function formatTimeString(now) {
    let hours = `0${now.getHours()}`.slice(-2);
    let minutes = `0${now.getMinutes()}`.slice(-2);
    let seconds = `0${now.getSeconds()}`.slice(-2);
    let date = `0${now.getDate()}`.slice(-2);
    let month = `0${now.getMonth() + 1}`.slice(-2);
    let year = now.getFullYear();
    let current_day = now.getDay();
    function convertDay(current_day) {
        switch (current_day) {
            case 0:
                current_day = "Sunday";
                break;
            case 1:
                current_day = "Monday";
                break;
            case 2:
                current_day = "Tuesday";
                break;
            case 3:
                current_day = "Wednesday";
                break;
            case 4:
                current_day = "Thursday";
                break;
            case 5:
                current_day = "Friday";
                break;
            case 6:
                current_day = "Saturday";
        }
        return current_day;
    }
    let day = convertDay(current_day);
    return `${hours}:${minutes}:${seconds} - ${day},  ${month}/${date}/${year}`;
}

function Clock() {
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        let timeInterval = setInterval(() => {
            const now = new Date();
            const timeString = formatTimeString(now);
            setTimeString(timeString);
        }, 1000);
        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    return (
        <Fragment>
            <p className="Clock">{timeString}</p>
        </Fragment>
    );
}

export default Clock;
