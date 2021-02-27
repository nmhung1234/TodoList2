import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./../actions/action";
class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            complete: false,
            search: ''
        };
    }

    onAddTask = async (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        await this.setState({
            [name]: value,
        });
        // console.log(this.state);
    };

    onClear = () => {
        this.setState({
            name: "",
            complete: false,
        });
    };

    onSubmitHandle = async (event) => {
        event.preventDefault();
        await this.props.onSaveTask(this.state);
        this.onClear();
    };

    makeAllDone = () => {
        this.props.makeAllDone();
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

    render() {
        return (
            <form className="form-group" onSubmit={this.onSubmitHandle}>
                <label htmlFor="name" className="label label label-info">
                    Add Todo
                </label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className="form-control add-todo mb-10"
                    placeholder="Add todo"
                    onChange={this.onAddTask}
                />
                <button
                    type="button"
                    id="checkAll"
                    className="btn btn-success"
                    onClick={this.makeAllDone}
                >
                    Mark all as done
                </button>
                <button
                    type="submit"
                    className="btn btn-primary mt-10 ml-10"
                    onClick={this.onAddTask}
                >
                    Add
                </button>
                <div className="mt-20">
                    <label htmlFor="search" className="label label label-info">
                        Search
                    </label>
                    <input
                        type="text"
                        name="search"
                        value={this.state.search}
                        className="form-control add-todo"
                        placeholder="Search your todo..."
                        onChange={this.onSearch}
                    />
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(Action.addTodoItems(task));
        },
        makeAllDone: () => {
            dispatch(Action.makeAllDone());
        },
        onSearch: (item) => {
            dispatch(Action.search(item));
        },
    };
};
export default connect(null, mapDispatchToProps)(FormControl);
