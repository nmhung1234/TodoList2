import React, { Component } from 'react';
import Todos from './components/Container/Todos';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Container/Footer';
import './wraper.css'
import Clock from './components/Clock/Clock';
export default class App extends Component {
    render() {
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