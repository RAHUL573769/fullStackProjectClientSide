import React, { useState } from "react";
import AppointmrntBanner from "./AppointmrntBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1>Appointment</h1>

      <AppointmrntBanner date={date} setDate={setDate}></AppointmrntBanner>

      <AvailableAppointments
        date={date}
        setDate={setDate}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
