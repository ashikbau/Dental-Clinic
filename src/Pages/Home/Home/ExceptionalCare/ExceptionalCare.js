import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';
import { HashLink as Link } from 'react-router-hash-link';

const ExceptionalCare = () => {
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} alt='' className=" w-1/2   rounded-lg shadow-2xl "/>
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dentalcare <br />
     on Your terms</h1>
      <p className="py-6">Exceptional Dental provides general dentistry, emergency dental care and specialty procedures across the South Louisiana region.</p>
      <Link  to='#ContactForms'>
      <PrimaryButton>Contact Us</PrimaryButton>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ExceptionalCare;