import React from 'react';
import Footer from '../../Shared/Header/Footer';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import StayConnected from '../StayConnected/StayConnected';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <StayConnected></StayConnected>
      <Footer></Footer>
    </div>
  );
};

export default Home;