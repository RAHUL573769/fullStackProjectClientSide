import React from "react";
import doctor from "../../Images/assets/images/doctor.png";
import picture from "../../Images/assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <div>
      <section
        style={{
          background: `url(${picture})`,
        }}
        className="flex justify-center items-center"
      >
        <div className="flex-1">
          <img className="mt-[-100px]" src={doctor} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-primary">Appointment</h3>
          <h2>Make an Appointment Today</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, non. Quasi assumenda saepe cumque cupiditate
            dignissimos soluta dolorem magni, dolore mollitia distinctio, esse
            voluptas quos vitae ducimus incidunt repellat nisi quaerat quam ipsa
            quod id ipsum aperiam? Aliquam, ipsa laudantium.
          </p>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
