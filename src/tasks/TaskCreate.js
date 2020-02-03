import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'
class TaskCreate extends Component{
    state = {
        dataForm:{
            title:"",
            description:''
        }
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
    handleSubmit = (event) => {
        event.preventDefault();
        const newTask = this.state.dataForm
        const user = this.props.user
        console.log(newTask)
        create(user,newTask)
        .then(() => alert('created'))
        .then(() => this.props.history.push('/tasks'))
        .catch((error) => console.log(error))
    }
    render(){
        console.log(this.state.dataForm)
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input onChange={this.handleChange} type="text" name="title" value={this.state.dataForm.title}/>
                <label>Description</label>
                <br/>
                <textarea onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description}/>
                <br/>
                <button type="submit">Create</button>
            </form>
        )
    }
}
export default withRouter(TaskCreate)