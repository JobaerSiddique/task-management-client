import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import Login from "../pages/Login";
import Register from "../pages/Register";
import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";
import axios from "axios";
import UpdateTask from "../components/Task/UpdateTask";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContexts";


const router = createBrowserRouter([
    
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'addtask',
                element:<TaskForm/>
            },
            {
                path:'tasklist',
                element:<TaskList/>,
                loader:()=> axios.get(`https://task-management-server-sand-beta.vercel.app/task/taskcount`,{withCredentials:true})
            },
            {
                path:'updatetask/:id',
                element:<UpdateTask/>,
                loader:  ({params})=> axios.get(`https://task-management-server-sand-beta.vercel.app/task/tasks/${params.id}`,{withCredentials:true})
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            }
        ]
    }
])

export default router;