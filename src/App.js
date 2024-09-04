import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';

const generateRandomCandlestick = (lastClose, makeGreen) => {
  const open = lastClose || Math.random() * 100;
  let close = makeGreen ? open + Math.random() * 10 : open - Math.random() * 5;
  const high = Math.max(open, close, open + Math.random() * 10);
  const low = Math.min(open, close, close - Math.random() * 10);
  return { open, close, high, low };
};

const generateInitialCandlesticks = (count = 20) => {
  let candlesticks = [];
  let lastClose = Math.random() * 100;
  for (let i = 0; i < count; i++) {
    const newCandlestick = generateRandomCandlestick(lastClose, false);
    candlesticks.push({ ...newCandlestick, isGreen: false });
    lastClose = newCandlestick.close;
  }
  return candlesticks;
};

function App() {
  const [candlesticks, setCandlesticks] = useState(generateInitialCandlesticks());
  const [makeGreen, setMakeGreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCandlesticks((prevCandlesticks) => {
        const lastClose = prevCandlesticks.length ? prevCandlesticks[prevCandlesticks.length - 1].close : undefined;
        const newCandlestick = generateRandomCandlestick(lastClose, makeGreen);
        return [
          ...prevCandlesticks.slice(-19),
          { ...newCandlestick, isGreen: makeGreen },
        ];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [makeGreen]);

  const data = {
    labels: candlesticks.map((_, index) => index.toString()),
    datasets: [
      {
        label: 'Price',
        data: candlesticks.map(c => c.high),
        backgroundColor: candlesticks.map(c => c.isGreen ? 'green' : 'red'),
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleScreenTap = () => {
    setMakeGreen(true);
  };

  return (
    <div onClick={handleScreenTap} className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}

export default App;
