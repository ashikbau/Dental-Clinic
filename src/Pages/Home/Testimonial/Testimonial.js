import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import quote from '../../../assets/icons/quote.svg';

import ReviewShow from './ReviewShow';



const Testimonial = () => {

    const [review,setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review'
    )
    .then(res=>res.json())
    .then(data =>setReview(data))
    },[])

    // const reviews = [
    //     {
    //         _id: 1, 
    //         name: 'Winson Herry',
    //         img: people1,
    //         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    //         location: 'California'
    //     },
    //     {
    //         _id: 2, 
    //         name: 'Winson Herry',
    //         img: people2,
    //         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    //         location: 'California'
    //     },
    //     {
    //         _id: 3, 
    //         name: 'Winson Herry',
    //         img: people3,
    //         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    //         location: 'California'
    //     },
    // ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                 review.length>0?   review.map(rev =><ReviewShow
                    key={rev._id}
                    rev={rev}
                 
                 >
                    

                 </ReviewShow>):"no reviews"
                }
            </div>
        </section>
    );
};

export default Testimonial;