import React, { Component } from 'react';
import Todos from './components/Container/Todos';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Container/Footer';
import './css/wraper.css'
import Clock from './components/Clock/Clock';
export default class App extends Component {
    render() {
        // let { user } = this.state;
        // console.log("Render",user);
        
        return (
            <div className="wraper">
                <div className="circle"></div>
                <div className="circle"></div>
                <Clock />
                <div className="container">
                    <div className="row">
                        <TaskList />
                        <Todos />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}