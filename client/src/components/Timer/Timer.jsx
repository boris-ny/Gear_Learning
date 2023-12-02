/* eslint-disable react/prop-types */
import { useTimer } from "react-timer-hook";
import TimerStyled from "./TimerStyled";

const Timer = (props) => {
  const { seconds, minutes } = useTimer({
    autoStart: props.start,
    expiryTimestamp: props.expiryTimestamp,
    onExpire: props.alert,
  });

  return (
    <>
      <TimerStyled  seconds={seconds} minutes={minutes}/>
    </>
  );
};

export default Timer;
