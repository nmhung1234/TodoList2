import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./../actions/action";
class TaskDones extends Component {
    onDelete = (id) => {
        this.props.onSendDelete(id);
    };
    render() {
        let {task} = this.props;
        // console.log(task);
        
        return (
            <ul id="done-items" className="list-unstyled">
                <li>
                    {task.name}
                    <button
                        className="remove-item btn btn-default btn-xs pull-right"
                        onClick={() => this.onDelete(task.id)}
                    >
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </li>
            </ul>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSendDelete: (id) => {
            dispatch(Action.deleteTask(id));
        },
    };
};
export default connect(null, mapDispatchToProps)(TaskDones);
