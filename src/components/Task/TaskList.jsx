import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContexts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import TaskModalInfo from '../../pages/Modal/TaskModalInfo';
import { FaRegEye } from "react-icons/fa";
import inModal from './inModal';
import { useLoaderData } from 'react-router-dom';
const TaskList = () => {
   const {users}= useContext(AuthContext)
   const [openModal, setOpenModal] = useState({});
    const {data}= useLoaderData()
    console.log(data)
   const {data:tasks=[],refetch} = useQuery({
        queryKey:['tasks',users?.email],
        queryFn: async ()=>{
            const res = await axios.get(`http://localhost:5000/task/tasks?email=${users?.email}`,{withCredentials:true})
            return res.data
            
        }
       
   })
   
    return (
        
        <div className='grid grid-col-1 justify-center items-center gap-20 my-10  '>
            {
                tasks.map(task=><TaskModalInfo
                task={task}
                refetch={refetch}
                
                >

                </TaskModalInfo>)
            }
        </div>
    );
};

export default TaskList;