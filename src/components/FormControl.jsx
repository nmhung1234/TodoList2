import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./../actions/action";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";

class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            complete: false,
            search: "",
            timeadd: "",
            deadline: "",
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(nextProps.editTask);
        this.setState({
            id: nextProps.editTask.id,
            name: nextProps.editTask.name,
            deadline: nextProps.editTask.deadline,
        });
    }

    onAddTask = async (event) => {
        let date = new Date();
        let fulldateString = `${date
            .getHours()
            .toString()}:${date
            .getMinutes()
            .toString()} - ${date.getDate().toString()}/ ${(
            date.getMonth() + 1
        ).toString()}/ ${date.getFullYear().toString()}`;
        // console.log(fulldateString);

        let target = event.target;
        let name = target.name;
        let value = target.value;
        await this.setState({
            [name]: value,
            timeadd: fulldateString,
        });
        // console.log(this.state);
    };

    onClear = () => {
        this.setState({
            id: "",
            name: "",
            complete: false,
        });
    };

    onSubmitHandle = async (event) => {
        event.preventDefault();
        await this.props.onSaveTask(this.state);
        // console.log(this.state);
        this.onClear();
    };

    // ant
    onChange = (value, dateString) => {
        let deadline = dateString.replace(" ", " - ");
        this.setState({
            deadline: deadline,
        });
    };
    range = (start, end) => {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    };
    disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().startOf("day");
    };

    render() {
        let date = new Date();
        let dateNow;
        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();
        let year = date.getFullYear().toString();

        // validate date
        if (day < 10 && month > 10) {
            dateNow = `${year}-${month}-${"0" + (day - 1)}`;
        } else if (day > 10 && month < 10) {
            dateNow = `${year}-${"0" + month}-${day - 1}`;
        } else if (day < 10 && month < 10) {
            dateNow = `${year}-${0 + month}-${"0" + (day - 1)}`;
        } else {
            dateNow = `${year}-${day}-${month}`;
        }
        // console.log(dateNow);

        let { id } = this.state;
        return (
            <form className="form-group" onSubmit={this.onSubmitHandle}>
                {/* content */}
                <label htmlFor="name" className="badge badge-primary">
                    Add Todo
                </label>
                <textarea
                    className="form-control add-todo rounded mb-10"
                    name="name"
                    value={this.state.name}
                    placeholder="📝 Add todo"
                    onChange={this.onAddTask}
                    rows="3"
                />
                {/* deadline */}
                <label htmlFor="date" className="badge badge-warning">
                    Deadline
                </label>
                <br />
                {/* ant */}
                
                <DatePicker
                    name="date"
                    className="form-control rounded mb-10"
                    defaultValue={moment({ dateNow })}
                    disabledDate={this.disabledDate}
                    showTime
                    onChange={this.onChange}
                />
                
                <br />
                {/* button */}
                <button
                    type="submit"
                    className="btn btn-primary mt-10"
                    onClick={this.onAddTask}
                >
                    {id ? "Update" : "Add"}
                </button>
                {/* ant */}
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        editTask: state.editTask,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(Action.addTodoItems(task));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormControl);
