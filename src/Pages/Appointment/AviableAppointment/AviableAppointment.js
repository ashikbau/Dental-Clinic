// import React, { useEffect, useState } from 'react';
import{format } from 'date-fns'
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading'

const AviableAppointment = ({selectedDate}) => {
    // const [appiontmentOptions,setAppiontmentOptions]= useState([]);
    const [treatment,setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    // react query diye data load kora hoyse

    const {data:appointmentOptions=[],refetch,isLoading} = useQuery({
        queryKey:['appointmentOptions',date],
        queryFn:()=>fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })
    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppiontmentOptions(data))
    // },[])

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <section className='my-16'>
            <p className='text-center text-primary font-bold'>Availabe appiontment on {format(selectedDate,'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                  appointmentOptions.map(option => <AppointmentOption
                  key={option._id}
                  appiontmentOption={option}
                  setTreatment={setTreatment}
                  >

                  </AppointmentOption>)  
                }
            </div>
            
            {
                treatment &&
                <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch = {refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AviableAppointment;