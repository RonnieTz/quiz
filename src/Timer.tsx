import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (time < 20) {
        setTime((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <div className="timer">
      <CircularProgress
        sx={{
          position: 'absolute',
          zIndex: 1,
          color: 'rgb(14, 63, 112)',
        }}
        variant="determinate"
        value={100 - time * 5}
        thickness={2}
      />
      <CircularProgress
        sx={{
          position: 'absolute',
          color: 'rgb(204, 228, 255 )',
        }}
        variant="determinate"
        value={100}
        thickness={2}
      />
      <span style={{ color: 'rgb(26, 26, 26)' }}>{time}</span>
    </div>
  );
};

export default Timer;
