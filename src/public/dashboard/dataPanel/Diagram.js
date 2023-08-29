import * as React from 'react';
import Stack from '@mui/material/Stack';
import {PieChart} from '@mui/x-charts/PieChart';


const data = [
  {label: 'Complete', value: 617, color: 'green'},
  {label: 'Under review', value: 96, color: 'orange'},
  {label: 'Unacceptable', value: 76, color: 'red'},
];

export default function Diagram() {
  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 2,
            innerRadius: 100,
            outerRadius: 85,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={300}
        height={300}
        legend={{ hidden: true }}
      />
    </Stack>
  );
}
