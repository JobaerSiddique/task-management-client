import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../Animation - 1712253486149.json";
const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen p-4 my-10'>
           <Lottie className='w-[90%] lg:w-[60%]' animationData={groovyWalkAnimation} loop={true} /> 
           <p className='text-xl lg:text-5xl'>Task Management Web Application</p>
        </div>
    );
};

export default Home;