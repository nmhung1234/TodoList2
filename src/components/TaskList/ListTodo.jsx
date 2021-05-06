import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./../../actions/action";
import "./../../wraper.css";
class ListTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            important: false,
        };
    }
    onImportant = async (id) => {
        await this.setState({
            id: id,
            important: !this.state.important,
        });

        this.props.onImportantTask(this.state.id);
    };

    onChange = (id) => {
        this.props.onDoneTask(id);
    };
    editTask = (task) => {
        this.props.onEditTask(task);
    };
    render() {
        let { task } = this.props;
        return (
            <li className="list-group-item select animate__animated animate__flipInX">
                <div className="checkbox">
                    <div className="flex">
                        <p className="taskflex">
                            <label className="select">{task.timeadd}</label>{" "}
                            &emsp;
                            <span
                                className={
                                    task.important
                                        ? "fas fa-star star animate__animated animate__tada"
                                        : "far fa-star starDefault"
                                }
                                onClick={() => this.onImportant(task.id)}
                            ></span>
                            <br />
                            &emsp;
                            <label className="select align fw-700">
                                {task.name}
                            </label>{" "}
                            <br />
                            <label className="mt-10 color-orange fw-500">
                                DeadLine: {task.deadline}
                            </label>
                        </p>

                        <div className="flexresponsive">
                            <p
                                className="bi bi-pencil-square select resize"
                                onClick={() => this.editTask(task)}
                            />
                            <p
                                className="bi bi-check2-circle select resize"
                                onClick={() => this.onChange(task.id)}
                            />
                        </div>
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
        },
        onImportantTask: (id) => {
            dispatch(Action.importantTask(id));
        },
    };
};

export default connect(null, mapDispatchToProps)(ListTodo);
