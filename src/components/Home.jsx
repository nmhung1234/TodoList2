import React, { Component } from "react";

import Todos from "./Todos";
import TaskList from "./TaskList";
import Footer from "./Footer";
import "./../css/wraper.css";

import fire from "./../config/fire";

export default class Home extends Component {
    logOut = () => {
        fire.auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                console.log('out');
                
            })
            .catch((error) => {
                // An error happened.
            });
    };

    componentDidMount() {
        this.authListener();
    };

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (!user) {
                this.props.history.push('/login')
            }
        });
    }

    render() {
        console.log('Home')
        return (
            <div className="wraper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="container">
                    <div className="row">
                        <TaskList />
                        <Todos />
                            <button
                                className="btn btn-warning"
                                onClick={this.logOut}
                            >
                                Log Out
                            </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
