import React, { Component } from "react";
import { connect } from "react-redux";
class CountTodos extends Component {
    render() {
        let { items, search } = this.props;
        let listTodos = items.filter((task) => {
            return !task.complete && task.name.toLowerCase().includes(search);
        });
        let count = listTodos.length;
        return (
            <div className="todo-footer rounded-bottom">
                <strong>
                    <span className="count-todos"></span>
                </strong>
                {count} Items Left
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.todoItems,
        search: state.search,
    };
};

export default connect(mapStateToProps, null)(CountTodos);
