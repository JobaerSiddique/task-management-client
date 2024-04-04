import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col">
            <div className="flex flex-col items-center justify-around gap-5 bg-sky-50 p-10 py-10 md:flex-row md:gap-0 md:items-center">
                <aside className="text-xl">
                    
                    <Link to='/'>Task Managment Web Application</Link>
                </aside>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <Link to='/addtask' className="cursor-pointer hover:underline">Add Task</Link>
                        </li>
                        
                    </ul>
                </nav>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <Link to='/tasklist' className="cursor-pointer hover:underline">Task List</Link>
                        </li>
                        
                        
                    </ul>
                </nav>
            </div>
            <aside className="bg-sky-100 py-5 text-center text-sm">
                <p>&copy; 2024 Task Managment Web Application . All Rights Reserved.</p>
            </aside>
        </footer>
        </div>
    );
};

export default Footer;