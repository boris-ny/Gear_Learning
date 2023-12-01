/* eslint-disable react/prop-types */
import { useTimer } from "react-timer-hook";

const Timer = (props) => {
  const { seconds, minutes } = useTimer({
    autoStart: props.start,
    expiryTimestamp: props.expiryTimestamp,
    onExpire: props.alert,
  });

  return (
    <>
      <div><span>{minutes}</span><span>{seconds}</span></div>
    </>
  );
};

export default Timer;
