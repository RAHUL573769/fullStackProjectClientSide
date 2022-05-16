import React from "react";

const MakeAppointment = ({ service }) => {
  const { slots } = service;
  return (
    <div>
      <div class="card card-compact w-96 bg-base-100 shadow-xl lg:max-w-lg">
        <div class="card-body">
          <h2 class="card-title">{service.name}</h2>

          <p>
            {slots.length > 0 ? (
              <span>{slots[0]} </span>
            ) : (
              <span className="text-red-500">No slots Available</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "slots" : "slot"} available
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
