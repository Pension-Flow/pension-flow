import Head from "next/head";
import React from "react";
import { Button, Modal, Col } from "reactstrap";
function CompanyDashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "50px",
          }}
        >
          <Timer />
        </div>
      </main>
    </>
  );
}

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
      className="timer"
      role="timer"
      style={{ display: "flex", justifyContent: "space-between" }}
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
      <div
        className="col-4"
        style={{
          width: "20%",
          float: "left",
          margin: "auto",
          border: "3px solid green",
          textAlign: "center",
        }}
      >
        <div
          className="button"
          style={{ alignContent: "center", padding: "10px" }}
        >
          <Button
            block
            className=" mb-3"
            color="primary"
            onClick={() => setModalDefaultOpen(true)}
            type="button"
          >
            Default
          </Button>
          {newFunction(modalDefaultOpen, setModalDefaultOpen)}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
function newFunction(
  modalDefaultOpen: boolean,
  setModalDefaultOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  return (
    <Modal
      isOpen={modalDefaultOpen}
      toggle={() => setModalDefaultOpen(false)}
      style={{ backgroundColor: "black" }}
    >
      <div className=" modal-header">
        <h6 className=" modal-title" id="modal-title-default">
          Type your modal title
        </h6>
        <button
          aria-label="Close"
          className=" close"
          onClick={() => setModalDefaultOpen(false)}
          type="button"
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className=" modal-body">
        <p>This is a Modal whose content I have to edit</p>
        <p>Description give little</p>
      </div>
      <div className=" modal-footer">
        <Button color="primary" type="button">
          Save changes
        </Button>
        <Button
          className=" ml-auto"
          color="link"
          onClick={() => setModalDefaultOpen(false)}
          type="button"
        >
          Close
        </Button>
      </div>
    </Modal>
  );
}
