import apiUrl from '../apiConfig';
import Axios from 'axios'



export const index = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/tasks',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}
export const show = (user, taskId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/tasks/${taskId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}
export const create = (user,newTask) => {
    return Axios({
        method:'POST',
        url:apiUrl + `/tasks`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            title: newTask.title,
            description: newTask.description,
            owner: newTask.owner
        }
    })
}
export const update = (user,updateTask,taskId) => {
    return Axios({
        method:'PATCH',
        url:apiUrl + `/tasks/${taskId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            task:updateTask
        }
    })
}
export const destroy = (user,taskId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/tasks/${taskId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const indexUser = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/users',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}