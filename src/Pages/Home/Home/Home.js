import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import ReviewShow from '../Testimonial/ReviewShow';

import Testimonial from '../Testimonial/Testimonial';
import ContactForms from './ContactForms/ContactForms';
import ExceptionalCare from './ExceptionalCare/ExceptionalCare';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ReviewShow></ReviewShow>
            <ContactForms></ContactForms>
        </div>
    );
};

export default Home;