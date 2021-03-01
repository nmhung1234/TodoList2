import React, { Component } from 'react';
import Todos from './components/Todos';
import AlreadyDone from './components/AlreadyDone';
import Footer from './components/Footer';
import './wraper.css'
export default class App extends Component {
    render() {
        return (
            <div className="wraper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="container">
                    <div className="row">
                        <Todos />
                        <AlreadyDone />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}