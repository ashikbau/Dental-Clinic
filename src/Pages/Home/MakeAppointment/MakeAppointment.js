import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='mt-16'  style ={
            {
                background : `url(${appointment})`
            }
        }>
           
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} alt="" className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
    <div className=''>
        <h4 className='text-lg text-primary text-center font-bold'>Appointment</h4>
      <h1 className="text-4xl  text-white font-bold">Make An appointment Today</h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
<Link to="/appointment"><PrimaryButton >Appionment</PrimaryButton></Link>
    </div>
  </div>
</div>
            
        </section>
    );
};

export default MakeAppointment;