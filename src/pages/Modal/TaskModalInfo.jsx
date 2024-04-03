import React, { useContext } from 'react';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
const TaskModalInfo = ({task,openModal,setOpenModal}) => {
    
    
    const {title,description,email} = task
    return (
        <div>
         
              <div className="card w-full bg-base-100 shadow-xl overflow-hidden  ">
  <div className="card-body">
  <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default TaskModalInfo;