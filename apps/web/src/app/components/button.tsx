import { twMerge } from 'tailwind-merge';
import { Button } from '../../../../../libs/components/src/lib/widgets/Button/Button';
import { ReactNode } from 'react';

export function ButtonComponent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Button
      className={twMerge(
        'shadow-none bg-[#E83F6F] py-2.5 px-5 font-gotham text-sm text-white',
        className
      )}
    >
      {children}
    </Button>
  );
}
