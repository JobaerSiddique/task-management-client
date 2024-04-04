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
   const [pageNumber,setPageNumber] = useState(0)
   const [taskPerPage,setTaskPerPage]= useState(10)
    const {data}= useLoaderData()
    console.log(data)
   const {data:tasks=[],refetch} = useQuery({
        queryKey:['tasks',users?.email,pageNumber,taskPerPage],
        queryFn: async ()=>{
            const res = await axios.get(`https://task-management-server-sand-beta.vercel.app/task/tasks?&page=${pageNumber}&size=${taskPerPage}`,{withCredentials:true})
            return res.data
            
        }
       
   })
   console.log('number',pageNumber,taskPerPage)
// pagination

const numberofPages= Math.ceil(data.total / taskPerPage)

const updatePageNumber = (num)=>{
    if((num > (numberofPages - 1)) || (0 > num)){ return setPageNumber(1) }
    setPageNumber(num)
}
 const handleTaskChange = e =>{
    const value = parseInt(e.target.value)
    setTaskPerPage(value)
 }
    return (
        <>
        {tasks.length === 0? <p>You have No Task Add</p>:<div>
        <div className='grid grid-col-1 justify-center items-center gap-20 my-10  '>
            {
                tasks.map(task=><TaskModalInfo
                task={task}
                refetch={refetch}
                
                >

                </TaskModalInfo>)
            }
        </div>
        {/* pagination */}
        <div className='flex justify-center items-center gap-3 bg-white p-2 shadow-lg rounded-md w-fit mx-auto select-none my-5'>
        {/* left arrow */}
        <div onClick={()=>{updatePageNumber(pageNumber - 1)}} className=' hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-sky-100 px-1 py-1 rounded-md'>
          <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
        </div> 
        <div className='flex justify-center items-center gap-2 '>
                 {[...Array(numberofPages).keys()].map((item,ind) => <div onClick={()=>{setPageNumber(item)}} className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${pageNumber === item ? 'bg-sky-500 text-white':'bg-white'} border-sky-300  font-semibold text-gray-700   py-[6px] rounded-md`} key={item}>
                {item + 1}
              </div>)}
        </div>
        {/* right arrow */}
        <div  onClick={()=>{updatePageNumber(pageNumber + 1)}} className=' hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-sky-100 px-1 py-1 rounded-md'>
            <svg className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
        <select value={taskPerPage} onChange={handleTaskChange} className="select select-info w-full ">
  <option value='5' >5</option>
  <option value='10'>10</option>
  <option value='20'>20</option>
  <option value='50'>50</option>
</select>
    </div>
        </div>}
        </>
        
    );
};

export default TaskList;