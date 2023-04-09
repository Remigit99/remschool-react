import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {



    return (
        <nav className='w-full grid place-items-center bg-amber-100'>
            <div className="container nav__container mx-auto py-4 flex justify-between align-middle ">

                <div className="logo">
                    <Link to='/'>
                        <h3 className='text-3xl text-blue-600'>RemSchool</h3>
                    </Link>
                </div>

                <ul className='flex gap-14'>

                    <NavLink to='/' className='text-blue-500'>Home</NavLink>
                    <NavLink to='/about' className='text-blue-500'>About</NavLink>
                    <NavLink to='/courses' className='text-blue-500'>Courses</NavLink>
                    <NavLink to='/contact' className='text-blue-500'>Contact</NavLink>

                </ul>

                <button>
                    <CiMenuFries />
                </button>
            </div>
        </nav>
    )
}

export default Navbar;