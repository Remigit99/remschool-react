import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, courses } from '../Content';
import HeaderSvg from '../assets/header.svg';
import { BsPlusLg } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { faqs } from '../Content';


const Home = () => {

    const [showAnswer, setShowAnswer] = useState(false);

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

                <h2 className='align-center text-2xl'>Categories</h2>

                <div className="container categories__container grid lg:grid-cols-[1fr_1.8fr] gap-12 sm:grid sm:grid-cols-[1fr]">

                    <div className="categories__left">
                        <h3 className='text-xl'>Our Categories Content</h3>
                        <p className='text-gray-400 mt-6 mb-10 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatum ab nihil. Illum laboriosam recusandae suscipit voluptatibus facere libero velit.</p>

                        <Link to='/categories'>
                            Learn More
                        </Link>
                    </div>

                    <div className="categories__right grid grid-cols-3 gap-6">

                        {
                            categories.map(({ icon, name, desc }) => {

                                return (
                                    <article className="category  bg-cyan-800 p-4 rounded-lg" key={name}>
                                        <span className='mt-4 text-2xl'>{icon}</span>
                                        <h4 className='mt-4'>{name}</h4>
                                        <p className='mt-4 text-[0.95rem] text-gray-400' >{desc}</p>
                                    </article>
                                )
                            })
                        }

                    </div>

                </div>
            </section>

            <section id="courses">
                <h2 className="text-3xl" >Our Courses</h2>
                <div className="container courses__container grid lg:grid-cols-3 gap-12">

                    {
                        courses.map(({ id, img, title, desc }) => {

                            courses.length = 9;

                            return (
                                <article className="course bg-cyan-800 rouned-lg" key={id}>
                                    <div className="course__shot">
                                        <img src={img} alt={title} />
                                    </div>

                                    <div className="course__info p-4 text-center">
                                        <h4 className='text-xl mb-3'>{title}</h4>
                                        <p className='text-gray-400'>{desc}</p>

                                    </div>

                                </article>
                            )
                        })

                    }
                </div>
            </section>

            <section id="faqs">
                <h2>Frequently Asked Questions</h2>

                <div className="container faqs__container grid lg:grid-cols-2 sm:grid-cols-1 gap-12">
                    {
                        faqs.map(({ id, question, answer }) => {
                            return (
                                <article className="faq flex gap-4 p-4" key={id}>
                                    <span>
                                        {
                                            showAnswer ? <FiMinus className='cursor-pointer' /> :
                                                <BsPlusLg className='cursor-pointer text-white' />

                                        }
                                    </span>
                                    <div className="question__answer">
                                        <h5>{question}</h5>
                                        <p className='text-gray-400 py-4 show__ans'>{answer}</p>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Home