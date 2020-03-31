import React from 'react';

import { Container, Test, Line, Step, Text, Indicator } from './styles';

import ILabels from '../../interfaces/Labels';

interface IProps {
  percent: number;
  steps: number;
  labels: ILabels[];
}

export default function Progress({ percent, steps, labels }: IProps) {
  return (
    <Container>
      {labels.map(label => (
        <Test key={label.id}>
          <Step>
            <Indicator active={label.active} />
            <Line width={label.lineWidth} />
          </Step>
          <Text>{label.title}</Text>
        </Test>
      ))}
    </Container>
  );
}
