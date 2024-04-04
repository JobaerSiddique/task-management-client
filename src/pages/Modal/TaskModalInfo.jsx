import React, { useContext } from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const TaskModalInfo = ({task,refetch}) => {
    
    
    const {_id,title,description,email} = task

   
    const handleDeleteTask = (id)=>{
      Swal.fire({
        title: "Are you delete this Task?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/task/tasks/${id}`,{withCredentials:true})
          .then(res=>{
            if(res.data){
              Swal.fire({
                title: "Deleted!",
                text: "Your Task has been deleted.",
                icon: "success"
              });
              refetch()
            }
          })
          
        }
      });
    }
    return (
        <div>
         
              {/* <div className="card w-full bg-base-100 shadow-xl overflow-hidden  ">
  <div className="card-body">
    <div className='flex justify-between items-center gap-52'>
    <div className="grid gap-2 ">
                <h1 className="text-lg font-semibold ">{title}</h1>
                <p className="text-sm    list-none text-gray-500 dark:text-gray-400">{description}</p>
                
            </div>
      <div className='flex justify-items-center' >
      <Link to={`/updatetask/${_id}`} className=' btn btn-success'><GrUpdate />Update</Link>
      <button onClick={()=>handleDeleteTask(_id)} className='btn btn-error ml-5'><RiDeleteBin5Fill />Delete</button>
      </div>
    </div>
  </div>
</div> */}
<div className="card w-96 bg-base-200 ">
  <div className="card-body items-center ">
    <h2 className="card-title ">{title}</h2>
    
        <p  className="text-gray-800 w-full p-4 overflow-x-clip text-justify te">
          {description}
        </p>
   
    <div className="card-actions justify-end">
      <Link to={`/updatetask/${_id}`} className="btn btn-success"><GrUpdate/> Accept</Link>
      <button onClick={()=>handleDeleteTask(_id)} className="btn btn-error"><RiDeleteBin5Fill/>Deny</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TaskModalInfo;