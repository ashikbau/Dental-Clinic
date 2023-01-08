import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Flouride Treatment',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. ',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: ' Amalgam has been used by dental professionals for more than a century; it is the most researched material used for filling cavities.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening involves bleaching your teeth to make them lighter.',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services we provide</h2>

            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service=><Service
                    key={service.id}
                    service={service}
                    
                    >

                    </Service>)
                }

            </div>
            
        </div>
    );
};

export default Services;