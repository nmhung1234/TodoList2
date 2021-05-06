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

(function () {
    Notification.requestPermission();
    let noti = new Notification(
        'Thông báo',
        {
           body: 'Task bạn vẫn chưa hoàn thành',
           icon: 'https://picsum.photos/50/50',
        //    tag: 'https://www.youtube.com/'
        }
    );
    // noti.onclick = function(){
    //     window.location.href = this.tag
    // }
})();


      