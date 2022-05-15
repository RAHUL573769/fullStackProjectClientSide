import React from "react";

const InfoCard = ({ img, cardTitle, bgClass, content }) => {
  return (
    <div>
      <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
