import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../Content';
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

            <section id="#categories">
                <div className="container categories__container">
                    <h2>Categories</h2>

                    <div className="categories__left">
                        <h3>Our Categories Content</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatum ab nihil. Illum laboriosam recusandae suscipit voluptatibus facere libero velit.</p>

                        <Link to='/categories'>
                            Learn More
                        </Link>
                    </div>

                    <div className="categories__right">

                        {
                            categories.map(({ icon, name, desc }) => {

                                return (
                                    <article className="category" key={name}>
                                        {icon}
                                        <h4>{name}</h4>
                                        <p>{desc}</p>
                                    </article>
                                )
                            })
                        }

                    </div>

                </div>
            </section>
        </>
    )
}

export default Home