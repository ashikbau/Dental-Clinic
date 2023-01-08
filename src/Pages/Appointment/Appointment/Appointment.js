import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AviableAppointment from '../AviableAppointment/AviableAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    return (
        <div>
            
            <AppointmentBanner
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            ></AppointmentBanner>
            <AviableAppointment  selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            ></AviableAppointment>
        </div>
    );
};

export default Appointment;