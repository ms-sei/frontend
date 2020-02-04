import React, {Component} from 'react';
import {show} from './api'
class TaskShow extends Component{
    state = {
        task:{
            title: "",
            description: "",
            owner:""
        },
        user:{
            from:"",
            owner:""
        }
    }

    componentDidMount(){
        const user = this.props.user;
        const taskId = this.props.taskId;
        show(user,taskId)
        .then((res) => {
            console.log(res)
            const {title, description,owner} = res.data.task
            const task = {title, description,owner}
            const copyState = {...this.state}
            copyState.task= task
            copyState.user = res.data.user
            this.setState(copyState)
        })
        .catch((error) => console.log(error))
    }
    render(){
        // console.log(this.props.taskId)
        return(
            <div>
                <p>Assigned from: {this.state.user.from}</p>
                <h1>Title:{this.state.task.title}</h1>
                <p>Description: {this.state.task.description}</p>
                <p>Assigned to: {this.state.user.owner}</p>
            </div>
        )
    }
}
export default TaskShow