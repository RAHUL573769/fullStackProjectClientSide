import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../Images/assets/icons/clock.svg";
import image2 from "../../Images/assets/icons/marker.svg";
import image3 from "../../Images/assets/icons/phone.svg";

const Info = () => {
  return (
    <div class="grid  grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        content="Sunday To Saturday"
        bgClass=""
        cardTitle="Opening Hours"
        img={clock}
      ></InfoCard>
      <InfoCard
        content="Bangladesh ,India"
        bgClass=""
        cardTitle="Our Locations"
        img={image2}
      ></InfoCard>
      <InfoCard
        content="12pm-7pm"
        bgClass=""
        cardTitle="Timings"
        img={image3}
      ></InfoCard>
    </div>
  );
};

export default Info;
