import React, { Component } from 'react';
import Todos from './components/Todos';
import TaskList from './/components/TaskList';
import Footer from './components/Footer';
import './css/wraper.css'
export default class App extends Component {
    render() {
        return (
            <div className="wraper">
                <div className="circle"></div>
                <div className="circle"></div>
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