import React, {Component} from 'react';
import {show} from './api'
class TaskShow extends Component{
    state = {
        task:{
            title: "",
            description: ""
        }
    }
    componentDidMount(){
        const user = this.props.user;
        const taskId = this.props.taskId;
        show(user,taskId)
        .then((res) => {
            const {title, description} = res.data
            const task = {title, description}
            this.setState({
                task
            })
        })
        .catch((error) => console.log(error))
    }
    render(){
        // console.log(this.props.taskId)
        return(
            <div>
                <h1>{this.state.task.title}</h1>
                <p>{this.state.task.description}</p>
            </div>
        )
    }
}
export default TaskShow