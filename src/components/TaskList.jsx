import React, { Component } from "react";
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
            timedeadline: "",
            datedeadline: "",
        };
    }

    onSubmitHandle = async (event) => {
        event.preventDefault();
        await this.props.onSaveTask(this.state);
        this.onClear();
    };
    onSearch = async (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        await this.setState({
            [name]: value,
        });

        this.props.onSearch(this.state.search);
    };
    makeAllDone = () => {
        this.props.makeAllDone();
    };
    render() {
        let { todoListAll, search } = this.props;
        let todolist = todoListAll.filter(
            (todo) => !todo.complete && todo.name.toLowerCase().includes(search)
        );

        let tasksList = todolist.map((task, index) => {
            return <ListTodo key={index} task={task} />;
        });
        return (
            <div className="col-md-6">
                <div className="todolist not-done rounded">
                    {/* search */}
                    <div className="mt-20">
                        <form
                            className="form-group"
                            onSubmit={this.onSubmitHandle}
                        >
                            <label
                                htmlFor="search"
                                className="badge badge-primary"
                            >
                                Search
                            </label>
                            <input
                                type="text"
                                name="search"
                                value={this.state.search}
                                className="form-control add-todo rounded"
                                placeholder="🔍 Search your todo..."
                                onChange={this.onSearch}
                            />
                        </form>
                        {/* button */}
                        <button
                            type="button"
                            id="checkAll"
                            className="btn btn-success mb-10"
                            onClick={this.makeAllDone}
                        >
                            Mark all as done
                        </button>
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
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
