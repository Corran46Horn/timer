import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';
import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return (
    <Container>
      <Timer time={time} />
      <Button action={() => setStart(true)}>Start</Button>
      <Button action={() => setStart(false)}>Stop</Button>
      <Button
        action={() => {
          setTime(0);
          setStart(false);
        }}
      >
        Reset
      </Button>
    </Container>
  );
};

export default App;
