import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sed
            labore sapiente iste ex omnis reiciendis exercitationem! Commodi,
            maxime exercitationem.
          </p>
          <h2 class="card-title">{review.name}</h2>
          <div class="avatar">
            <div class="w-24 mask mask-hexagon">
              <img src={review.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
