import React from 'react';
import { PageParams } from '../../utils/type';
import StartForm from '../components/get-started-form';

const GetStartedRegisterForm = ({ searchParams }: PageParams) => {
  const step = searchParams.step ?? '1';
  return (
    <div>
      <StartForm step={step} />
    </div>
  );
};

export default GetStartedRegisterForm;
