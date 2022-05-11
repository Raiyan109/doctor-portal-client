import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className="w-45 h-20 rounded-lg shadow-md lg:flex md:flex shadow-sky-600 bg-gradient-to-r from-secondary to-primary">
                <img
                    className="object-cover w-full md:w-1/2 lg:w-1/3"
                    src={clock}
                    alt="image"
                />
                <div className="px-6 py-4">
                    <h4 className="mb-3 text-base font-semibold tracking-tight text-white">
                        Opening Hours
                    </h4>
                    <p className="mb-2 text-sm leading-normal text-justify text-white">
                        Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
                        quibusdam facere quo laborum maiores sequi nam tenetur laud.
                    </p>
                    {/* <button
                        className="
                        px-4
                        py-2
                        text-sm
                        shadow
                        bg-sky-100
                        shadow-sky-600
                        text-sky-700
                        hover:bg-sky-600 hover:text-sky-100">
                        Read more
                    </button> */}
                </div>
            </div>
            <div className="max-w-xl rounded-lg shadow-md lg:flex md:flex shadow-sky-600 bg-accent">
                <img
                    className="object-cover w-full md:w-1/2 lg:w-1/3"
                    src={marker}
                    alt="image"
                />
                <div className="px-6 py-4">
                    <h4 className="mb-3 text-base font-semibold tracking-tight text-white">
                        Visit Our Loacation
                    </h4>
                    <p className="mb-2 text-sm leading-normal text-justify text-white">
                        44/2 vuter goli, mainkar chipa, dhaka.
                    </p>
                    {/* <button
                        className="
        px-4
        py-2
        text-sm
        shadow
        bg-sky-100
        shadow-sky-600
        text-sky-700
        hover:bg-sky-600 hover:text-sky-100">
                        Read more
                    </button> */}
                </div>
            </div>
            <div className="max-w-xl rounded-lg shadow-md lg:flex md:flex shadow-sky-600 bg-gradient-to-r from-secondary to-primary">
                <img
                    className="object-cover w-full md:w-1/2 lg:w-1/3"
                    src={phone}
                    alt="image"
                />
                <div className="px-6 py-4">
                    <h4 className="mb-3 text-base font-semibold tracking-tight text-white">
                        Contact Us Now
                    </h4>
                    <p className="mb-2 text-sm leading-normal text-justify text-white">
                        0884536788
                    </p>
                    {/* <button
                        className="
        px-4
        py-2
        text-sm
        shadow
        bg-sky-100
        shadow-sky-600
        text-sky-700
        hover:bg-sky-600 hover:text-sky-100">
                        Read more
                    </button> */}
                </div>
            </div>

        </div>
    );
};

export default Info;