'use client';

import {
  Bar,
  BarChart as ReBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BaseAxisProps } from 'recharts/types/util/types';

import { Props } from './types';
import { useMemo } from 'react';

const defaultColors = ['#E3E8EF', '#006C9E'];

const tickProps: BaseAxisProps = {
  tick: { fill: '#727b8e', fontSize: '0.85rem' },
};

export function BarChart(props: Props) {
  const data = useMemo(() => {
    const formatted: Record<string, Record<string, number>> = {};

    for (const i in props.charts) {
      for (const k in props.charts[i]?.data ?? []) {
        const chart = props.charts[i]?.data?.[k];
        if (!chart) continue;

        formatted[chart.key] = {
          ...(formatted[chart.key] ?? {}),
          [props.charts[i]?.key ?? '']: chart.value,
        };
      }
    }

    return Object.entries(formatted).map(([name, value]) => ({
      name,
      ...value,
    }));
  }, [props.charts]);

  return (
    <ResponsiveContainer
      height={'100%'}
      width={'100%'}
      className={props.className}
    >
      <ReBarChart data={data} barGap={-30} barSize={30}>
        <CartesianGrid vertical={false} stroke={'#F2F4F7'} />
        <XAxis
          dataKey="name"
          textAnchor={'middle'}
          stroke={'#F2F4F7'}
          {...tickProps}
        />
        <YAxis tickLine={false} axisLine={false} {...tickProps} />
        <Tooltip cursor={{ fill: 'transparent' }} />
        {props.charts.map((chart, index) => (
          <Bar
            dataKey={chart.key}
            fill={chart.color ?? defaultColors[index]}
            key={`bar-${chart.key}`}
            radius={[5, 5, 0, 0]}
          />
        ))}
      </ReBarChart>
    </ResponsiveContainer>
  );
}
