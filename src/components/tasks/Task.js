import React from "react";

class Task extends React.Component {
    render(){
        return(
            <div className="card">
                <div className="card-body row">
                    <div className="col-md-10">
                        {this.props.task}
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-danger mr-2" type="button" onClick={this.props.deleteTask}>Delete</button>
                        <button className="btn btn-primary mr-2" type="button" onClick={this.props.editTask}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Task;