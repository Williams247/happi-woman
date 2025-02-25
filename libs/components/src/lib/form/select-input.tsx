'use client';

import { useController, Control, useFormContext, Path } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { FormLabel, FormMessage } from '../ui/form';

interface Props<T extends Record<string, any>> {
  className?: string;
  formClassName?: string;
  label: string;
  placeholder?: string;
  items: Array<{ text: string; value: string }>;
  control: Control<T>;
  name: Path<T>;
}

export function SelectInput<T extends Record<string, any>>({
  className,
  formClassName,
  label,
  placeholder,
  items,
  name,
  control,
}: Props<T>) {
  const { field } = useController({
    name,
    control,
  });

  const {
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={className}>
      <FormLabel className="font-rethink text-[#191C1F]">{label}</FormLabel>
      <Select onValueChange={field.onChange} value={field.value}>
        <SelectTrigger
          className={twMerge('w-full mt-2', formClassName)}
          aria-label={label}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className="w-full bg-white" style={{ width: "15rem" }}>
          {items.map(({ text, value }) => (
            <SelectItem
              key={value}
              value={value}
              className="w-full bg-white text-black hover:bg-gray-100"
            >
              {text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {errorMessage && (
        <FormMessage className="text-sm mt-3 font-rethink" style={{ color: 'red' }}>
          {errorMessage}
        </FormMessage>
      )}
    </div>
  );
}