import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi'
// import { IoCloseOutline } from 'react-icons/io'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <nav className='w-full grid place-items-center'>
            <div className="container nav__container mx-auto py-4 flex justify-between ">

                <div className="logo">
                    <Link to='/' onClick={handleShowNav}>
                        <h3 className='text-3xl text-white'>RemSchool</h3>
                    </Link>
                </div>

                <ul className={` nav__links flex gap-14 ${showNav ? 'nav__show' : 'nav__hide'}`}>

                    <li>
                        <NavLink to='/' className='text-white' onClick={() => setShowNav((prev) => !prev)}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/about' className='text-white' onClick={() => setShowNav((prev) => !prev)} >About</NavLink>
                    </li>

                    <li>
                        <NavLink to='/courses' className='text-white' onClick={() => setShowNav((prev) => !prev)}>Courses</NavLink>
                    </li>

                    <li>
                        <NavLink to='/contact' className='text-white' onClick={() => setShowNav((prev) => !prev)}>Contact</NavLink>
                    </li>

                </ul>

                <button>
                    {
                        showNav ?
                            <TfiClose className=' text-3xl lg:hidden md:block sm:block close__btn' onClick={() => setShowNav((prev) => !prev)} /> :

                            <CiMenuFries className='text-white text-3xl lg:hidden md:block sm:block ' onClick={() => setShowNav((prev) => !prev)} />

                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar;