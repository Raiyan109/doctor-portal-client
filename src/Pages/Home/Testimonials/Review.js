import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi corrupti tenetur, tempore sit quaerat vel!</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl'>{review.name}</h1>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;