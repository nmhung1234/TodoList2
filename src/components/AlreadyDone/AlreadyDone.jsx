import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import "./../../App.css";

import { Tooltip } from "antd";
import TaskDones from "./TaskDones";
import * as Action from "../../actions/action";

// AlreadyDone.propTypes = {
//     task: PropTypes.array.isRequired,
//     deleteAll: PropTypes.func.isRequired,
// };

function AlreadyDone(props) {

    let {tasks, deleteAllTask } = props;

    const DeleteAll = () => {
        deleteAllTask();
    };

    let taskDone;

    if (tasks) {
        taskDone = tasks.filter((task) => {
            return task.complete;
        });
    }
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
                    mouseEnterDelay=".5"
                >
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={DeleteAll}
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

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        tasks: state.todoItems,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteAllTask: () => dispatch(Action.deleteAll()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AlreadyDone);
