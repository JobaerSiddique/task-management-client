import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import Login from "../pages/Login";
import Register from "../pages/Register";
import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";
import axios from "axios";
import UpdateTask from "../components/Task/UpdateTask";


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
                loader:()=> axios.get('http://localhost:5000/task/taskcount',{withCredentials:true})
            },
            {
                path:'updatetask/:id',
                element:<UpdateTask/>,
                loader:  ({params})=> axios.get(`http://localhost:5000/task/tasks/${params.id}`,{withCredentials:true})
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