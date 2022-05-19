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
    </div>
  );
};

export default MyAppointments;
