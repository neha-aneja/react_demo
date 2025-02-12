import React, { useState, useDeferredValue } from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
} from 'victory';

const ChartDemo = () => {
  const [data, setData] = useState([
    { quarter: 1, earnings: 2000 },
    { quarter: 2, earnings: 3000 },
    { quarter: 3, earnings: 4000 },
    { quarter: 4, earnings: 5000 },
  ]);

  const deferredData = useDeferredValue(data);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Quarterly Earnings</h2>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis tickFormat={['Q1', 'Q2', 'Q3', 'Q4']} />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
        <VictoryBar
          data={deferredData}
          labelComponent={<VictoryTooltip />}
          x='quarter'
          y='earnings'
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
    </div>
  );
};

export default ChartDemo;
