import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import Login from "../pages/Login";
import Register from "../pages/Register";
import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";


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
                element:<TaskList/>
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