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
            deadline: "",
            sort: false
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

    sortByDeadLine = async () => {
        await this.setState({
            sort: !this.state.sort
        })
        // console.log(this.state.sort);
        
        this.props.onSort(this.state.sort);
    }
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
                            className="form-control add-todo rounded"
                            placeholder="🔍 Search your todo..."
                            onChange={this.onSearch}
                        />

                        {/* button */}
                        <button
                            type="button"
                            id="checkAll"
                            className="btn btn-success mb-10"
                            onClick={this.makeAllDone}
                        >
                            <span className="bi bi-check-all mr-10"></span>
                            Mark all as done
                        </button>

                        <button
                            type="button"
                            id="checkAll"
                            className="btn btn-primary ml-10 mb-10"
                            onClick={this.sortByDeadLine}
                        >
                            <span className="bi bi-filter-left mr-10"></span>
                            Sort by DeadLine 
                            
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
        onSort: (value) => {
            dispatch(Action.sort(value));
        }
    };

};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
