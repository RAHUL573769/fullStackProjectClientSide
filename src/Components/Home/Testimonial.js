import React from "react";
import qoute from "../../Images/assets/icons/quote.svg";
import people1 from "../../Images/assets/images/people1.png";
import people2 from "../../Images/assets/images/people2.png";
import people3 from "../../Images/assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "wILSON hARRY",
      review: "Nice Fcailitis",
      img: people1,
    },
    {
      _id: 2,
      name: " hARRY",
      review: "Nice Fcailitis",
      img: people2,
    },
    {
      _id: 3,
      name: "Rahul",
      review: "Nice Fcailitis",
      img: people3,
    },
  ];

  return (
    <div>
      <section className="my-28">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl text-primary font-bold ">Testimonials</h4>
            <h2 className="text-3xl ">What our patients has to say</h2>
          </div>
          <div>
            <img className="w-24 lg:w-48" src={qoute} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
