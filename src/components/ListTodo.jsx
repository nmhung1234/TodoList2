import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./../actions/action";
class ListTodo extends Component {
    onChange = (id) => {
        this.props.onDoneTask(id);
    };

    render() {
        let task = this.props;
        // console.log(task);

        return (
            <ul id="sortable" className="list-unstyled">
                <li className="ui-state-default">
                    <div className="checkbox">
                        <p onClick={() => this.onChange(task.id)}>
                            <label>
                                {/* <input
                                    type="checkbox"
                                    onClick={() => this.onChange(task.id)}
                                /> */}
                                {task.name}
                            </label>
                        </p>
                    </div>
                </li>
            </ul>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDoneTask: (id) => {
            dispatch(Action.doneTask(id));
        },
    };
};

export default connect(null, mapDispatchToProps)(ListTodo);
