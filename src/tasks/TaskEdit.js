import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

class TaskEdit extends Component{ 

    state={
        dataForm:{
            title:'',
            description:''
        }

    }
    componentDidMount(){
        const user = this.props.user;
        const taskId = this.props.match.params.id;
        show(user,taskId)
        .then((response) => {
            const task = response.data.task
            console.log(response);
            
            // this.setState({
            //     dataForm:task
            // })
        })
        .catch(error => console.log(error))
    }
    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.props)
        const user = this.props.user;
        const taskId = this.props.match.params.id;
        const updateTask = this.state.dataForm;
        update(user,updateTask,taskId)
        .then(() => this.props.history.push(`/tasks/${taskId}`))
        .catch((error) => console.log(error))
    }
    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input onChange={this.handleChange} type="text" name="title" value={this.state.dataForm.title}/>
                <label>Description</label>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description}/>
                
                 <button type="submit">Update</button>
        </form>
        )
    }
}
export default withRouter(TaskEdit)