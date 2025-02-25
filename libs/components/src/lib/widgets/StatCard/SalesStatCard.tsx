import { RangeType } from '@kpimanager/types';
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';

import { cn } from '../../../util/cn';
import { Card } from '../../ui/card';

type StatCardProps = {
  title: string;
  value: number;
  percentageChange: number;
  className?: string;
  range: RangeType;
};

const iconProps = {
  width: 20,
  height: 20,
  className: '',
};

export function SalesStatCard(props: StatCardProps) {
  return (
    <Card className={cn('gap-5 flex flex-col p-3', props.className)}>
      <p className='text-[#101828] font-medium text-base mt-2'>{props.title}</p>
     
        <div className={'flex flex-col flex-shrink-0 whitespace-nowrap'}>
          <p className={'text-4xl font-semibold mb-2 text-[#101828]'} style={{fontSize: '36px'}}>{props.value}</p>
          <div className={'whitespace-nowrap flex gap-1 items-center mt-auto mb-2'}>
            {props.percentageChange >= 0 ? (
              <ArrowUpIcon
                {...iconProps}
                className={cn('text-green-500', iconProps.className)}
              />
            ) : (
              <ArrowDownIcon
                {...iconProps}
                className={cn('text-red-500', iconProps.className)}
              />
            )}{' '}
            <p className='text-[#475467] font-medium text-sm'> <span className='text-green-500'>{props.percentageChange}%</span> vs last year</p>
          </div>
        </div>
      
    </Card>
  );
}
