import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/Header/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h1 className='text-xl text-primary font-bold'>Appointment</h1>
                <h1 className='text-3xl text-white py-5'>Make an Appointment Today</h1>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quidem. Quibusdam in est dolorum sed? Eum laudantium ipsum natus quo harum quia voluptates animi adipisci repellat nulla eveniet numquam et fugiat obcaecati, aliquam quibusdam soluta vero nam voluptatem quas ab!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;