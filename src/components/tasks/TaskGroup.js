import React, { Component } from "react";

export default class TaskGroup extends Component {

    render(){
        return(
            <div>
                <h4 className="text-center">{this.props.title}</h4>
                {this.props.tasksHandler}
            </div>
        )
    }
}