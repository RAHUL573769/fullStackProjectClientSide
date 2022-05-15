import React from "react";
import chair from "../../Images/assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Dentist Office</h1>
            <p class="py-6">Your Smile Starts Here.</p>
            <button class="btn btn-primary uppercase  text-white bg-gradient-to-r from-cyan-500 to-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
