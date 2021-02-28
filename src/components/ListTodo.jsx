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
            <li className="list-group-item">
                <div className="checkbox">
                    
                    <p onClick={() => this.onChange(task.id)}>
                        {/* <input type="checkbox" /> */}
                        <label className="pd-bottom-10">{task.time}</label><br/>
                        &emsp;<label>{task.name}</label>
                    </p>
                </div>
            </li>
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
