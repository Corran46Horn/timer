import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  function formatTime(time) {
    var milliseconds = parseInt((time % 1000) / 100),
      seconds = parseInt((time / 1000) % 60),
      minutes = parseInt((time / (1000 * 60)) % 60),
      hours = parseInt((time / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  }
  return <div className={styles.timer}>{formatTime(time)}</div>;
};

export default Timer;
