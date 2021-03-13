import React, { Component } from "react";
import { Tooltip } from "antd";
import "./../App.css";
import TaskDones from "./TaskDones";
import { connect } from "react-redux";
import * as Action from "./../actions/action";
class AlreadyDone extends Component {
    DeleteAll = () => {
        this.props.deleteAll();
    };
    render() {
        let { tasks } = this.props;
        let taskDone;
        if (tasks) {
            taskDone = tasks.filter((task) => {
                return task.complete;
            });
        }
        // console.log(taskDone);

        let showTaskDones = taskDone.map((task, index) => {
            return <TaskDones key={index} task={task} />;
        });

        return (
            <div className="todolist rounded">
                <h1>Already Done</h1>
                <p>
                    <Tooltip
                        placement="bottomLeft"
                        title="Delete all task done"
                        color="orange"
                        mouseEnterDelay='.5'
                    >
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.DeleteAll}
                        >
                            <span className="bi bi-trash mr-10"></span>
                            Delete All
                        </button>
                    </Tooltip>
                </p>
                <ul id="done-items" className="list-unstyled">
                    {showTaskDones}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.todoItems,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteAll: () => dispatch(Action.deleteAll()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AlreadyDone);
