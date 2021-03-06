import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Components/Firebase/FirebaseInit";

const MyAppointments = () => {
  const [user, loading, error] = useAuthState(auth);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user) {
      let url = `http://localhost:5000/booking?patient=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);

  return (
    <div>
      <h2>Appintmrnt:{appointments.length}</h2>

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
