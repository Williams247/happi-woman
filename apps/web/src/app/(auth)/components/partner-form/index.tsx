'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Email from './Email';
import Otp from './Otp';
import PersonalDetails from './PersonalDetails';
import BusinessDetails from './BusinessDetails';
import Document from './Document';
import { AppIcon } from '../../../components/app-icon';

const PartnerForm = ({ step }: { step?: string | boolean | string[] }) => {
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
          <p className='text-base'>  <span className='text-xl font-medium'>{currentStep}</span> / 5</p>
        
        </div>
      </div>
      <div className='mt-6'>
      {step === '1' && (
        <Email onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
      )}
      {step === '2' && (
        <Otp onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
      )}
      {step === '3' && (
        <PersonalDetails
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {step === '4' && (
        <BusinessDetails
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {step === '5' && (
        <Document />
      )}
      </div>
     
    </div>
  );
};

export default PartnerForm;
