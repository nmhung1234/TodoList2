import React, { Component } from 'react';
import Todos from './components/Todos';
import AlreadyDone from './components/AlreadyDone';
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Todos />
                        <AlreadyDone />
                    </div>
                </div>
            </div>
        )
    }
}