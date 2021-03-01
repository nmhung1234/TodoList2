import React, { Component } from "react";
import { connect } from "react-redux";
import "./../App.css";
import FormControl from "./FormControl";
import ListTodo from "./ListTodo";
import CountTodos from "./CountTodos";
import logoIcon from './../image/tick.svg'

class Todos extends Component {
    render() {
        let { todoListAll, search } = this.props;
        // console.log(search);

        let todolist = todoListAll.filter(
            (todo) => !todo.complete && todo.name.toLowerCase().includes(search)
        );

        let tasks = todolist.map((task, index) => {
            return (
                <ListTodo
                    key={index}
                    task={task}
                />
            );
        });

        return (
            <div className="col-md-6">
                <div className="todolist not-done rounded">
                    <h1>
                        {/* <span> */}
                            <img className="logo" src={logoIcon} alt=""/>
                        {/* </span> */}
                        Todo Tasks
                        </h1>
                    <FormControl />
                    <hr />
                    <ul id="sortable" className="list-group">
                        {tasks}
                    </ul>
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
    };
};

export default connect(mapStateToProps, null)(Todos);
