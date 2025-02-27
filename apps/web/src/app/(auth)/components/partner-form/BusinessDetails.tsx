import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContainerProps } from '../../../utils/type';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { TextInput } from '@app/components/lib/form/text-input';
import { SelectInput } from '@app/components/lib/form/select-input';

const BusinessDetailSchema = z.object({
  reg_number: z.string(),
  tax_number: z.string(),
  business_email: z.string(),
  website_address: z.string(),
  industry: z.string(),
});

export type BusinessDetailData = z.infer<typeof BusinessDetailSchema>;

const BusinessDetails = ({ onNextStep }: ContainerProps) => {
  const handler = useForm<BusinessDetailData>({
    resolver: zodResolver(BusinessDetailSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: BusinessDetailData) => {
    console.log(data);
    onNextStep && onNextStep();
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-[#181E20] lg:text-3xl text-xl font-semibold">
          About Your <span className="text-[#006BA6]">Business</span>
        </h1>
        <p className="text-[#676767] text-base py-1">
          Provide your business details
        </p>
      </div>

      <Form {...handler}>
        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 mt-8 md:w-[50%] md:max-w-sm w-full"
        >
          <TextInput
            name={'reg_number'}
            label={''}
            placeholder={'Registration Number'}
          />
          <TextInput
            name={'tax_number'}
            label={''}
            placeholder={'Tax Number'}
          />
          <TextInput
            name={'business_email'}
            label={''}
            placeholder={'Business Email'}
          />
          <TextInput
            name={'website_address'}
            label={''}
            placeholder={'Website Address'}
          />

          <SelectInput
            name="industry"
            label=""
            placeholder="Industry/Category"
            items={[
              {
                label: 'Construction',
                value: 'construction',
                keywords: ['construction'],
              },
              {
                label: 'Health',
                value: 'Health',
                keywords: ['Health'],
              },
            ]}
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

export default BusinessDetails;
