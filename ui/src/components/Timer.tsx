import React from "react";
import { Button, Modal } from "antd";
import styles from "@/styles/component-styles/timer.module.css";

const Timer = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);

  const deadline = "March, 1, 2023";

  const getTimeLeft = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTimeLeft(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.timer}
      role="timer"
      style={{ display: "flex", justifyContent: "space-between", color:'black' }}
    >
      <div className="col-4" style={{ width: "20%", float: "left" }}>
        <div className="box">
          <span className="text">Days</span>
          <p id="day">{days < 10 ? "0" + days : days}</p>
        </div>
      </div>
      <div className="col-4" style={{ width: "20%", float: "left" }}>
        <div className="box">
          <span className="text">Hours</span>
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        </div>
      </div>
      <div className="col-4" style={{ width: "20%", float: "left" }}>
        <div className="box">
          <span className="text">Minutes</span>
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        </div>
      </div>
      <div className="col-4" style={{ width: "20%", float: "left" }}>
        <div className="box">
          <span className="text">Seconds</span>
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
      </div>
      <div>
        <div
          className="button"
          style={{ alignContent: "center", padding: "10px" }}
        >
          <Button onClick={() => setModalDefaultOpen(true)} type="primary">
            Default
          </Button>
          {newFunction(modalDefaultOpen, setModalDefaultOpen)}
        </div>
      </div>
    </div>
  );
};

export default Timer;

function newFunction(
  modalDefaultOpen: boolean,
  setModalDefaultOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  return (
    <Modal open={modalDefaultOpen} onCancel={() => setModalDefaultOpen(false)}>
      <p>Some contents...</p>
    </Modal>
  );
}
