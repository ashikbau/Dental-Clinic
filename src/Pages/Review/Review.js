import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const Review = () => {
    const {user}= useContext(AuthContext);
    

    const handleReviewItems =(event)=>{
        event.preventDefault();

        const form = event.target;
        const displayName= form.displayName.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const message = form.message.value;
        


        const review ={
             displayName,
            email,
            photoUrl,
            message
        }
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                event.target.reset();
            toast.success('review confirmed');
            

            }
            else{
                toast.error(data.message)
            }
            
        })
    }


    return (
        <div className="hero ">
  <div className="hero-content ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please give a feedback!</h1>
      <p className="py-6">In order to improve our clinic service its important to us what our customer think about our services.</p>
    </div>
    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
      <form onSubmit={handleReviewItems} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='displayName' defaultValue={user?.displayName} required disabled placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' defaultValue={user?.email} required disabled placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" name='photoUrl' required placeholder="PhotoUrl" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="text" name='message' required placeholder="Message" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Review;