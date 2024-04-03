import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Contexts/AuthContexts';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const {register,formState: { errors },handleSubmit} = useForm()
    const {registers,setUsers}= useContext(AuthContext)
    const navigate= useNavigate()
    const onSubmit = (data) => {
       const name=data.name
       const email=data.email
       const password= data.password
       registers(name,email,password)
       .then(res=>{
        if(res.data){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Registration Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              setUsers(res.data)
              navigate('/')
        }
       })
    }
    return (
        <div className='flex justify-center items-center h-screen '>
             <div className="w-full mx-auto lg:w-[800px] shadow-lg bg-white flex group text-[#0095ff] overflow-hidden">
    <div className="w-1/2 min-h-full bg-[#0095ff] relative overflow-hidden hidden lg:block">
      <h1 className="text-white text-2xl absolute bottom-3 right-3 text-right">Hey! <br /> Welcome to<br /> Task Mangement System</h1>
      <span className="bg-sky-800/20 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
      <span className="bg-sky-800/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex-1">
      <h1 className="text-4xl pb-4 text-center font-mono">Register</h1>
      <div className="space-y-5">
        <label  className="block">Name</label>
        <input 
        
        type="text" 
        placeholder="Enter Your Name" 
        {...register("name", { required:{
            value:true,
            message:"Name must be required"
        } })} 
        className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"/>
        {errors.name?.type === "required" && (
                        <p className='text-red-500 my-2' >{errors.name?.message}</p>
      )}
        <label htmlFor="email_" className="block">Email</label>
        <input 
        id="email_" 
        type="email" 
        placeholder="example@example.com"
        {...register("email", { required:{
            value:true,
            message:"Email must be required"
        } })} 
        className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"/>
        {errors.email?.type === "required" && (
                        <p className='text-red-500 my-2' >{errors.email?.message}</p>
      )}

        <label htmlFor="password_" className="block">Password</label>
        <input 
        id="password_" 
        type="password" 
        placeholder=".............." 
        {...register("password", { required:{
            value:true,
            message:"password must be required"
        }, 
        pattern:{
            value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:"Minimum eight characters, at least one letter and one number"
        }
        })}
        className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#0095ff]"/>
         {errors.password?.type === "required" && (
        <p className='text-red-500 my-2' >{errors.password?.message}</p>
      )}
        {errors.password?.type === "pattern" && (
        <p className='text-red-500 my-2' >{errors.password?.message}</p>
      )}
      </div>
      {/* button type will be submit for handling form submission*/}
      <button type="submit" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50 ">Register</button>
      <p className="text-[14px] text-gray-400">Already have an account ? <Link to='/login' className="text-[#8EA7E9] ">Please Login</Link></p>
    </form>
  </div>
        </div>
    );
};

export default Register;