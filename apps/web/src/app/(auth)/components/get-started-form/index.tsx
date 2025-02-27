'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Otp from './Otp';
import PersonalDetails from './PersonalDetails';
import { AppIcon } from '../../../components/app-icon';
import ProfileSetup from './ProfileSetup';

const StartForm = ({ step }: { step?: string | boolean | string[] }) => {
  const { push } = useRouter();
  const currentStep = parseInt((step as string) ?? '0');

  const handleNextStep = () => {
    push(`?step=${currentStep + 1}`);
  };

  const handlePrevStep = () => {
    push(`?step=${currentStep - 1}`);
  };

  return (
    <div className=''>
      <div className='flex justify-between'>
        <div className='logo'>
          <AppIcon/>
        </div>
        <div className='progress-number'>
          <p className='text-base'>  <span className='text-xl font-medium'>{currentStep}</span> / 3</p>
        
        </div>
      </div>
      <div className='mt-6'>
      {step === '1' && (
        <PersonalDetails
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      />
      )}
      {step === '2' && (
        <Otp onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
      )}
      {step === '3' && (
        <ProfileSetup
        />
      )}
      </div>
     
    </div>
  );
};

export default StartForm;
