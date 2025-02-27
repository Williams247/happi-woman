import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContainerProps } from '../../../utils/type';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import PinInput from 'react-pin-input';

const OtpSchema = z.object({
  otp: z.string().min(6).max(6),
});
export type OtpData = z.infer<typeof OtpSchema>;
const Otp = ({ onNextStep }: ContainerProps) => {
  const handler = useForm<OtpData>({
    resolver: zodResolver(OtpSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: OtpData) => {
    console.log(data);
    onNextStep && onNextStep();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-[#181E20] lg:text-3xl text-xl font-semibold">
          OTP <span className="text-[#006BA6]">Verification</span>
        </h1>
        <p className="text-[#676767] text-base py-1">
          Enter the 6-digit code sent to your email.
        </p>
      </div>

      <Form {...handler}>
        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 mt-14 md:w-[55%] md:max-w-sm w-full"
        >
          <PinInput
            length={6}
            initialValue=""
            secret
            secretDelay={100}
            onChange={(value) => handler.setValue('otp', value)}
            type="numeric"
            inputMode="number"
            style={{ padding: '10px' }}
            inputStyle={{ borderColor: '#E5E5E5' }}
            inputFocusStyle={{ borderColor: '#7209B7' }}
            onComplete={(value) => handler.setValue('otp', value)}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />

          <SubmitButton
            className="text-sm py-2.5 rounded-lg w-full"
            type="submit"
          >
            Verify
          </SubmitButton>

          <p className='mt-3 text-[#333333] cursor-pointer'>Resend code in <span className='text-[#0496FF] font-medium'>55</span>s</p>
        </form>
      </Form>
    </div>
  );
};

export default Otp;
