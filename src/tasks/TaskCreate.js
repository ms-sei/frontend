import React,{Component} from 'react'
import {create,indexUser} from './api'
import {withRouter} from 'react-router-dom'

class TaskCreate extends Component{
    state = {
        dataForm:{
            title:"",
            description:'',
            owner:''
        },
        users:[]
    }

    componentDidMount() {
        const user = this.props.user;
        indexUser(user)
        .then((res)=>{

         const users = res.data.users; 
         let copyUser = [...this.state.users] // copy all users from the array 
         copyUser = users
         this.setState({
             users: copyUser 
         })

        })
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
                <br/>
                <input onChange={this.handleChange} type="text" name="title" value={this.state.dataForm.title}/>
                <br/>
                <label>Description</label>
                <br/>
                <textarea onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description}/>
                <br/>
                <label>Owner</label>             
                <br/>
                <select  name="owner" onChange={this.handleChange} value={this.state.dataForm.owner} > 
                <option ></option>             
                {this.state.users.map( (user) => (
                            <option name="owner" value={user._id}> {user.email}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <button type="submit">Create</button>
            </form>
        )
    }
}
export default withRouter(TaskCreate)