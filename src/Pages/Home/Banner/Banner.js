import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { HashLink as Link } from 'react-router-hash-link';

const Banner = () => {
    return (
        <section
        style ={
            {
                background : `url(${bg})`
            }
        }>
            <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <Link to='#service'
                  > 
                  <PrimaryButton>Getting Started</PrimaryButton>
                  </Link>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;