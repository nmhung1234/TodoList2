import React, { Component } from "react";
import './../App.css'
import TaskDones from "./TaskDones"
import {connect} from "react-redux"

class AlreadyDone extends Component {
    
    render() {
        let {tasks} = this.props;
        let taskDone = tasks.filter(task => {
            return task.complete
        })
        // console.log(taskDone);
        
        let showTaskDones = taskDone.map((task, index) => {
            return <TaskDones key={index} task={task}/>
        })
        
        return (
            <div className="col-md-6">
                <div className="todolist">
                    <h1>Already Done</h1>
                    {showTaskDones}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks : state.todoItems
    }
}

export default connect(mapStateToProps, null)(AlreadyDone)

