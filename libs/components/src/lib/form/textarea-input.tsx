'use client';
import { useController, Control, useFormContext } from 'react-hook-form';
import { FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
interface InputProps {
  name: string;
  label: string;
  control: Control<any>;
  placeholder?: string;
  className?: string;
  formClassName?: string;
}

export function TextareaInput({
  name,
  label,
  control,
  placeholder,
  className,
  formClassName,
}: InputProps) {
  const { field } = useController({
    name,
    control,
  });

  const {
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
    <FormItem className={className}>
      <FormLabel className="font-rethink text-[#191C1F]">{label}</FormLabel>
      <FormControl>
        <Textarea className={formClassName} placeholder={placeholder} {...field} />
      </FormControl>
      {errorMessage && (
        <FormMessage
          className="text-sm mt-3 font-rethink"
          style={{ color: 'red' }}
        >
          {String(errorMessage)}
        </FormMessage>
      )}
    </FormItem>
  );
}
