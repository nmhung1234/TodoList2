import React, { Component } from "react";
import { Tooltip } from "antd";
import { connect } from "react-redux";
import ListTodo from "./ListTodo";
import CountTodos from "./CountTodos";
import * as Action from "./../actions/action";
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            complete: false,
            search: "",
            timeadd: "",
            deadline: "",
            sort: "",
        };
    }

    onSearch = async (event) => {
        event.preventDefault();
        let target = event.target;
        let name = target.name;
        let value = target.value;
        await this.setState({
            [name]: value,
        });
        this.props.onSearch(this.state.search);
    };

    sort = async (value) => {
        if (value) {
            await this.setState({
                sort: value,
            });
            // console.log(this.state.sort);

            this.props.onSort(this.state.sort);
        }
    };
    makeAllDone = () => {
        this.props.makeAllDone();
    };
    render() {
        let { todoListAll, search } = this.props;
        //  for show list
        let todolist = todoListAll.filter(
            (todo) => !todo.complete && todo.name.toLowerCase().includes(search)
        );
        let tasksList = todolist.map((task, index) => {
            return <ListTodo key={index} task={task} />;
        });
        //----------------------

        // for sortByDeadLine

        return (
            <div className="col-md-6">
                <div className="todolist not-done rounded">
                    {/* search */}
                    <div className="mt-20">
                        <label htmlFor="search" className="badge badge-primary">
                            Search
                        </label>
                        <input
                            type="text"
                            name="search"
                            value={this.state.search}
                            className="form-control add-todo rounded mb-10"
                            placeholder="🔍 Search your todo..."
                            onChange={this.onSearch}
                        />

                        {/* button */}
                        <Tooltip
                            placement="bottomLeft"
                            title="Make all as done"
                            color="magenta"
                            mouseEnterDelay='.5'
                        >
                            <button
                                type="button"
                                className="btn btn-success mr-10 mb-10"
                                onClick={this.makeAllDone}
                            >
                                <span className="bi bi-check-all mr-10"></span>
                                Done All
                            </button>
                        </Tooltip>
                        {/* <div className="dropdown"> */}
                        <Tooltip
                            placement="bottomLeft"
                            title="Sort task"
                            color="gold"
                            mouseEnterDelay='1.5'
                        >
                            <button
                                className="btn btn-primary dropdown-toggle mb-10"
                                type="button"
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className="bi bi-filter-left mr-10"></span>
                                Sort By &nbsp;
                            </button>
                        </Tooltip>
                        <div
                            className="dropdown-menu sorttask"
                            aria-labelledby="dropdownMenu2"
                        >
                            <button
                                className={
                                    this.state.sort === 1
                                        ? "dropdown-item active"
                                        : "dropdown-item"
                                }
                                type="button"
                                onClick={() => this.sort(1)}
                            >
                                DeadLine
                            </button>
                            <button
                                className={
                                    this.state.sort === 2
                                        ? "dropdown-item active"
                                        : "dropdown-item"
                                }
                                type="button"
                                onClick={() => this.sort(2)}
                            >
                                Importance
                            </button>
                        </div>
                        {/* </div> */}

                        {/* ------------------- */}
                    </div>
                    {tasksList}
                    <CountTodos />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoListAll: state.todoItems,
        search: state.search,
        editTask: state.editTask,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (item) => {
            dispatch(Action.search(item));
        },
        makeAllDone: () => {
            dispatch(Action.makeAllDone());
        },
        onSort: (value) => {
            dispatch(Action.sort(value));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
