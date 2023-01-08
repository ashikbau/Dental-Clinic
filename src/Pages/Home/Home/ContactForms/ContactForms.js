import React from 'react';

import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Result =()=>{
  return(
    <p> Your message has been successfully sent. I will contact you soon.</p>
  )
}

const ContactForms = (props) => {
 const [result, setResult] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault();
console.log('clicked')

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
         

      }, (error) => {
          console.log(error.text);
          
      });
      e.target.reset();
      setResult(true)
  };
setTimeout(()=>{
  setResult(false)
},3000)
  
    return (
      <section>
          <div className="hero min-h-screen  bg-base-400 " id='ContactForms'>
        <div className="hero-content">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <div className='text-center'>
                    <h3 className='text-lg text-primary font-bold'>Contact Us</h3>
                    <p className='text-xl font-bold'>Stay Connected With Us</p>
                </div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" name='fullName' required placeholder="Full Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="text" name='phone' required placeholder="Phone" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' required placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
              <label className="label">
                <textarea type='text' name='message' required className="textarea textarea-primary w-full" placeholder="Your Message">

                </textarea>
                </label>
              </div>
              <div className="form-control mt-6">
                <PrimaryButton>Submit</PrimaryButton>
              </div>
              <div>
                {
                  result ? <Result/> : null
                }
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>
    );
};

export default ContactForms;