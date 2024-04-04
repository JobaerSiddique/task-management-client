import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContexts';
import Swal from 'sweetalert2';

const Navbar = () => {
    
    const {users,logOut,setUsers}=useContext(AuthContext)
    
    const handleLogOut = ()=>{
      logOut()
      .then(res=>{
       
        Swal.fire({
        position: "top-center",
        icon: "success",
        title: `${res.data}`,
        showConfirmButton: false,
        timer: 1500
});
    setUsers(null)
      })
    }
    
    const menuItem = <>
   
         
          <li className='font-bold'><Link to='addtask'>Add Task</Link></li>
          {users && <>
            <li className='font-bold'><Link to='tasklist'>TaskList</Link></li>
          </>}
          <li className='font-bold'>{users? <button onClick={handleLogOut} >LogOut <span>{users.name}</span></button>:<button><Link to='login'>Login</Link></button>}</li>
    
    </>


    return (
      <div className="navbar bg-cyan-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
            {menuItem}
          </ul>
        </div>
        <Link to="/" className=" text-xl">Task Management</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {menuItem}
        </ul>
      </div>
      
    </div>
    );
};

export default Navbar;