import React, { useState, useEffect, Fragment } from "react";

import './style.css'
function formatTimeString(now) {
    let hours = `0${now.getHours()}`.slice(-2);
    let minutes = `0${now.getMinutes()}`.slice(-2);
    let seconds = `0${now.getSeconds()}`.slice(-2);
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    return `${hours}:${minutes}:${seconds} - ${date} / ${month} / ${year}`;
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


