import React from 'react';
import Navbar from '../../pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
           <div className='min-h-screen '>
           <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default Main;