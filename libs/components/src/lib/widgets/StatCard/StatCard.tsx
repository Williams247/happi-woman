import { RangeType } from '@kpimanager/types';
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import React from 'react';

import { cn } from '../../../util/cn';
import { Card } from '../../ui/card';
import { DownChart } from './icons/DownChart';
import { UpChart } from './icons/UpChart';

type StatCardProps = {
  title: string;
  value: number;
  percentageChange: number;
  className?: string;
  range: RangeType;
};

const chartProps = {
  className: 'w-[50%] ml-auto mt-auto',
};

const iconProps = {
  width: 20,
  height: 20,
  className: '',
};

export function StatCard(props: StatCardProps) {
  return (
    <Card className={cn('gap-5 flex flex-col p-3', props.className)}>
      <p>{props.title}</p>
      <div className={'flex gap-2'}>
        <div className={'flex flex-col flex-shrink-0 whitespace-nowrap'}>
          <p className={'text-4xl font-semibold mb-2'}>{props.value}</p>
          <div className={'whitespace-nowrap flex gap-1 items-center mt-auto'}>
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
            <p>{props.percentageChange}% vs last year</p>
          </div>
        </div>
        {props.percentageChange >= 0 ? (
          <UpChart {...chartProps} />
        ) : (
          <DownChart {...chartProps} />
        )}
      </div>
    </Card>
  );
}
