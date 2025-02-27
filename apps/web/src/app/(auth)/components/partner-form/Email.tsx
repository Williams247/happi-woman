import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContainerProps } from '../../../utils/type';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { TextInput } from '@app/components/lib/form/text-input';

const EmailSchema = z.object({
  email: z.string(),
});

export type EmailData = z.infer<typeof EmailSchema>;

const Email = ({ onNextStep }: ContainerProps) => {
  const handler = useForm<EmailData>({
    resolver: zodResolver(EmailSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: EmailData) => {
    console.log(data);
    onNextStep && onNextStep();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-[#181E20] lg:text-3xl text-xl font-semibold">
          Partner <span className="text-[#006BA6]">sign up</span>
        </h1>
        <p className="text-[#676767] text-base py-1">
          Provide your email first for verification
        </p>
      </div>

      <Form {...handler}>
        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 mt-14 md:w-[50%] md:max-w-sm w-full"
        >
          <TextInput name={'email'} label={''} placeholder={'Email'} />

          <SubmitButton
            className="text-sm py-2.5 rounded-lg w-full"
            type="submit"
          >
            Continue
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default Email;
