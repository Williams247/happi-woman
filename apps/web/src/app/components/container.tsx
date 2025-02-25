import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return (
    <div className={twMerge('px-5 mx-auto md:w-[1250px]', className)}>
      {children}
    </div>
  );
}
