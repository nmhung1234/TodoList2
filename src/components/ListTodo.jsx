import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./../actions/action";
import "./../wraper.css";
class ListTodo extends Component {
    onChange = (id) => {
        this.props.onDoneTask(id);
    };
    editTask = (task) => {
        this.props.onEditTask(task);
    };
    render() {
        let task = this.props;
        // console.log(task);
        
        return (
            <li className="list-group-item select">
                <div className="checkbox">
                    <div  className=" flex">
                        <p className="taskflex">
                            <label className="pd-bottom-10 select">
                                {task.time}
                            </label>
                            <br />
                            &emsp;<label className="select align">{task.name}</label>
                        </p>
                        <p className="bi bi-pencil-square select resize" onClick={() => this.editTask(task)}/>
                        <p className="bi bi-check2-circle select resize" onClick={() => this.onChange(task.id)}/>
                    </div>
                </div>
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDoneTask: (id) => {
            dispatch(Action.doneTask(id));
        },
        onEditTask: (task) => {
            dispatch(Action.onEditTask(task));
        }
    };
};

export default connect(null, mapDispatchToProps)(ListTodo);
