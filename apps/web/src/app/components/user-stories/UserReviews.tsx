import React from 'react';
import { reviews } from './data';
import Image from 'next/image';

const UserReviews = () => {
  return (
    <div className="pt-32 pb-24 flex justify-center gap-6">
      {reviews.map((review) => (
        <div 
          key={review.id} 
          className="bg-white p-5 rounded-lg shadow-md w-[350px] min-h-[200px]  flex flex-col justify-between bg-[#006BA60D]"
        >
          <p className="text-gray-700 font-medium">{review.review}</p>
          <div className="flex items-center gap-3 mt-4">
            <div className='rounded-full w-10 h-10'>
            <Image src={review.image} width={45} height={45} alt="user" className="rounded-full" />
            </div>
          
            <div>
              <p className="text-[#333] font-medium">{review.user}</p>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserReviews;
