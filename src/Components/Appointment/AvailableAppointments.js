import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import MakeAppointment from "./MakeAppointment";

const AvailableAppointments = ({ date, setDate }) => {
  const [services, setServices] = useState([]);

  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    const url = "http://localhost:5000/service";
    fetch(url)
      // fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-secondary text-xl">
        Appointments Available on {format(date, "PP")}
        <h1 className="text-center text-secondary text-xl">
          Total {services.length}
          {console.log(services)}
        </h1>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <MakeAppointment
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></MakeAppointment>
        ))}
      </div>

      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
