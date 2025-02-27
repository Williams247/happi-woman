import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PasswordInput } from '@app/components/lib/form/password-input';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { TextInput } from '@app/components/lib/form/text-input';
import { SelectInput } from '@app/components/lib/form/select-input';
import { useState, useEffect } from 'react';
import Success from '../modal/Success';

const ProfileSetupSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[\W_]/, 'Password must contain at least one special character'),
  security_question: z.string(),
  security_answer: z.string(),
});

export type ProfileSetupData = z.infer<typeof ProfileSetupSchema>;

const ProfileSetup = () => {
  const [passwordStrength, setPasswordStrength] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handler = useForm<ProfileSetupData>({
    resolver: zodResolver(ProfileSetupSchema),
    mode: 'onChange',
  });

  const password = handler.watch('password');

  const evaluateStrength = (password: string) => {
    if (!password) return null;
    if (password.length < 6) return 'Weak';
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[\W_]/.test(password);
    const hasNumber = /\d/.test(password);

    if (hasUpperCase && hasSpecialChar && hasNumber) return 'Strong';
    if (hasUpperCase || hasSpecialChar || hasNumber) return 'Good';
    return 'Weak';
  };

  useEffect(() => {
    setPasswordStrength(evaluateStrength(password));
  }, [password]);

  const onSubmit = (data: ProfileSetupData) => {
    console.log(data);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-[#181E20] lg:text-3xl text-xl font-semibold">
          Profile <span className="text-[#006BA6]">Setup</span>
        </h1>
        <p className="text-[#676767] text-base py-1">
          Setup your profile
        </p>
      </div>

      <Form {...handler}>
        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-8 md:w-[50%] md:max-w-sm w-full"
        >
          <TextInput name="username" label="" placeholder="Username" />

          <PasswordInput
            name="password"
            label=""
            className="pt-2"
            placeholder="Password"
          />
          <p>
            Strength:{' '}
            <span
              className={`text-sm font-semibold text-black text-left mt-0 pt-0 ${
                passwordStrength === 'Weak'
                  ? 'text-red-500'
                  : passwordStrength === 'Good'
                  ? 'text-blue-500'
                  : passwordStrength === 'Strong'
                  ? 'text-green-500'
                  : 'text-black'
              }`}
            >
              {' '}
              {passwordStrength || 'Nil'}
            </span>
          </p>

          <SelectInput
            name="security_question"
            label=""
            placeholder="Security Question"
            items={[
              {
                label: "Father's Name",
                value: 'father_name',
                keywords: ['father_name'],
              },
              {
                label: "Pet's Name",
                value: 'pets_name',
                keywords: ['pets name'],
              },
            ]}
          />

          <TextInput
            name="security_answer"
            label=""
            placeholder="Security Answer"
          />

          <SubmitButton
            className="text-sm py-2.5 mt-1 rounded-lg w-full"
            type="submit"
          >
            Complete Setup
          </SubmitButton>

          {isModalOpen && <Success />}
        </form>
      </Form>
    </div>
  );
};

export default ProfileSetup;
