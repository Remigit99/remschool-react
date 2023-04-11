import { useState } from 'react';
import HeaderSvg from '../assets/header.svg';


const Home = () => {

    return (
        <>
            <header className='pt-24'>
                <div className="container header__container grid grid-cols-2 gap-x-10 place-items-center sm:">

                    <div className="header__left">
                        <h1 className='text-5xl font-bold'>
                            Grow your skills to advance your career path
                        </h1>

                        <p className='mt-8 mb-12'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus magnam, accusamus consequuntur expedita laudantium architecto illum perferendis sed consectetur quaerat
                        </p>
                    </div>

                    <div className="header__right">
                        <img src={HeaderSvg} alt="Girl Studying Image" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home