import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContainerProps } from '../../../utils/type';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { TextInput } from '@app/components/lib/form/text-input';

const PersonalDetailSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  phone_number: z.string(),
  legal_business_name: z.string(),
});

export type PersonalDetailData = z.infer<typeof PersonalDetailSchema>;

const PersonalDetails = ({ onNextStep }: ContainerProps) => {
  const handler = useForm<PersonalDetailData>({
    resolver: zodResolver(PersonalDetailSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: PersonalDetailData) => {
    console.log(data);
    onNextStep && onNextStep();
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-[#181E20] lg:text-3xl text-xl font-semibold">
          Your <span className="text-[#006BA6]">Details</span>
        </h1>
        <p className="text-[#676767] text-base py-1">
          Provide your personal details
        </p>
      </div>

      <Form {...handler}>
        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 mt-14 w-[50%] max-w-sm"
        >
          <TextInput
            name={'first_name'}
            label={''}
            placeholder={'First Name'}
          />
          <TextInput name={'last_name'} label={''} placeholder={'Last Name'} />
          <TextInput
            name={'phone_number'}
            label={''}
            placeholder={'Phone Number'}
          />
          <TextInput
            name={'legal_business_name'}
            label={''}
            placeholder={'Legal Business Name'}
          />

          <SubmitButton
            className="text-sm py-2.5 mt-1 rounded-lg w-full"
            type="submit"
          >
            Continue
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default PersonalDetails;
