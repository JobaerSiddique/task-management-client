import React from 'react';
import Lottie from "lottie-react";
import loading from '../../../loading.json'
const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
             <Lottie  animationData={loading} loop={true} /> 
        </div>
    );
};

export default Loading;