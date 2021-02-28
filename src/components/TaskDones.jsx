import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./../actions/action";
class TaskDones extends Component {
    onDelete = (id) => {
        this.props.onSendDelete(id);
    };
    onUndo = (id) => {
        this.props.onUndo(id);
    };
    render() {
        let { task } = this.props;
        // console.log(task);

        return (
            <div>
                <ul id="done-items" className="list-unstyled">
                    <li className="flex">
                        {task.time} <br />
                        <span className="taskflex align">{task.name}</span>
                        <span className="mt-10">
                            <button
                                className="remove-item btn btn-primary btn-sm float-right "
                                onClick={() => this.onUndo(task.id)}
                            >
                                <span className="bi bi-arrow-counterclockwise"></span>
                            </button>
                            <button
                                className="remove-item btn btn-danger btn-sm float-right mr-20"
                                onClick={() => this.onDelete(task.id)}
                            >
                                <span className="bi bi-x-circle"></span>
                            </button>
                        </span>
                    </li>
                </ul>
                <hr />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSendDelete: (id) => {
            dispatch(Action.deleteTask(id));
        },
        onUndo: (id) => {
            dispatch(Action.undoTask(id));
        },
    };
};
export default connect(null, mapDispatchToProps)(TaskDones);
