import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];

    return (
        <div className='my-5'>
            <div className='text-center '>
                <h1 className='text-primary font-bold text-xl  uppercase'>Our Services</h1>
                <h1 className='text-3xt'>Services We Provide </h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
                {/* <Service img={fluoride}></Service>
                <Service img={cavity}></Service>
                <Service img={whitening}></Service> */}
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={treatment} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;