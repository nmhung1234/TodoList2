import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "./../actions/action";
class TaskDones extends Component {
    onDelete = (id) => {
        this.props.onSendDelete(id);
    };
    onUndo = (id) => {
        this.props.onUndo(id);
    };
    render() {
        let {task} = this.props;
        // console.log(task);
        
        return (
            <ul id="done-items"  className="list-unstyled" >
                <li>
                    {task.time} <br/>
                    {task.name}
                    <button
                        className="remove-item btn btn-default btn-xs pull-right"
                        onClick={() => this.onDelete(task.id)}
                    >

                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                    <button
                        className="remove-item btn btn-default btn-xs pull-right mr-20"
                        onClick={() => this.onUndo(task.id)}
                    >

                        <span className="glyphicon glyphicon-repeat "></span>
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
        onUndo: (id) => {
            dispatch(Action.undoTask(id));
        }
        
    };
};
export default connect(null, mapDispatchToProps)(TaskDones);
