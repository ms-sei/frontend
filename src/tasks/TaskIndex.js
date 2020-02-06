import React from 'react';
import {index,destroy} from './api';
import {Link} from 'react-router-dom';
class TaskIndex extends React.Component {
    state = { 
        tasks: []
     }
     componentDidMount() {
         const user = this.props.user;
         index( user )
         .then( res => {
             const allTasks = res.data.tasks;
             console.log(allTasks)
             this.setState({
                tasks: allTasks
             })
         })
         .catch( error => console.log(error) )
        }
        destroy = (taskId) => {
            const user = this.props.user
            destroy(user,taskId)
            .then( () => alert('Deleted!!'))
            .then( () => {
                
                const newTask = this.state.tasks.filter((task) => task._id != taskId) //check the ID??
                                                                //check the taskDOT
                this.setState({ tasks: newTask
                 }) 
            })
            .catch((error) => console.log(error) )
        }
    render() { 
        // console.log(th)
        return (
            <div className='card'>
               {this.state.tasks.map((task,index) => (
                        <div className="card-container" key={index} >
                        <h1>{task.title}</h1>
                        <button onClick={ () => this.destroy(task._id) } > Delete </button>
                        <Link to = {`/tasks/${task._id}/edit`}> Edit </Link> 
                        <Link to = {`/tasks/${task._id}`}> Show </Link> 
                        </div>
                    ))}
            </div>
        )
        
        
    }
}
 
export default TaskIndex;
