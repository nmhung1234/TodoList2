import React, { Component } from "react";
import { Tooltip } from "antd";
import { connect } from "react-redux";
import * as Action from "../../actions/action";
import './../../css/wraper.css';
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
            <div className="taskDoneColorText">
                <li className="flexdone animate__animated animate__flipInX">
                    {task.timeadd} <br />
                    <span className="animate__bounceOutRight taskflex align">
                        {task.name} <br />
                        Deadline: {task.deadline}
                    </span>
                    <span className="mt-10 align-self">
                    <Tooltip
                            placement="bottomLeft"
                            title="Return task"
                            color="#6c5ce7"
                            mouseEnterDelay=".5"
                        >
                            <button
                                className="remove-item btn btn-primary btn-sm float-right"
                                onClick={() => this.onUndo(task.id)}
                            >
                                <span className="bi bi-arrow-counterclockwise"></span>
                            </button>
                            </Tooltip>
                        <Tooltip
                            placement="bottomRight"
                            title="Permanently delete task"
                            color="red"
                            mouseEnterDelay=".5"
                        >
                        <button
                            className="remove-item btn btn-danger btn-sm float-right mr-20"
                            onClick={() => this.onDelete(task.id)}
                        >
                            <span className="bi bi-x-circle"></span>
                        </button>
                        </Tooltip>
                    </span>
                </li>

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
