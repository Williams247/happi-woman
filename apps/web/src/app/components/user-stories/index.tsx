import Image from 'next/image';
import React from 'react';
import UserReviews from './UserReviews';

const UserStories = () => {
  return (
    <div className="pt-16">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <p className="text-[#5603AD] font-gotham bg-[#6767671A] rounded-3xl text-[1rem] px-5 py-2 text-sm">
          Real User Stories
        </p>
        <h1 className="lg:text-4xl md:text-3xl 2xl font-semibold">
          What do they say about{' '}
          <span className="text-[#006BA6]">HappyWoman?</span>{' '}
        </h1>
        <p className="text-[#676767]">
          Pizza ipsum dolor meat lovers buffalo. Bbq pesto tossed ham <br />{' '}
          onions pineapple. Bacon personal lot bell lot pizza Chicago spinach.{' '}
        </p>
      </div>
      <div className="flex overflow-x-hidden">
        <Image src="/user-stories.png" width={400} height={500} alt="image" className="object-cont h-[520px]" />
        <div className=''>
          <UserReviews />
        </div>
      </div>
    </div>
  );
};

export default UserStories;
