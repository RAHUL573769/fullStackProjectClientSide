import React from "react";
import floride from "../../Images/assets/images/fluoride.png";
import floride1 from "../../Images/assets/images/cavity.png";
import floride2 from "../../Images/assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Floride  Treatment",
      description: "Good Traement",
      img: floride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "Good Traement",
      img: floride1,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "Good Traement",
      img: floride2,
    },
  ];

  return (
    <div className="my-28">
      <div className="text-center text-xl font-bold uppercase">
        <h3>Our Services</h3>
        <p>Services We Provide</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <Service></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
