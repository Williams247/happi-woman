import React from 'react';
import PartnerForm from '../components/partner-form';
import { PageParams } from '../../utils/type';

const ParterRegisterForm = ({ searchParams }: PageParams) => {
  const step = searchParams.step ?? '1';
  return (
    <div>
      <PartnerForm step={step} />
    </div>
  );
};

export default ParterRegisterForm;
