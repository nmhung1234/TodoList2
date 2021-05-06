import React from "react";
import { connect } from "react-redux";
function CountTodos(props) {
    let { items, search } = props;
    let listTodos = items.filter((task) => {
        return !task.complete && task.name.toLowerCase().includes(search);
    });
    let count = listTodos.length;
    return (
        <div className="todo-footer rounded-bottom mt-10">
            <strong>
                <span className="count-todos"></span>
            </strong>
            {count > 1 ? count + " Items Left" : count + " Item Left"}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.todoItems,
        search: state.search,
    };
};

export default connect(mapStateToProps, null)(CountTodos);
