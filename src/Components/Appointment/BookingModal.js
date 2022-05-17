import React from "react";
import { format } from "date-fns";
import auth from "../Firebase/FirebaseInit";
import { useAuthState } from "react-firebase-hooks/auth";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">{name}</h3>

          <form
            onSubmit={handleBooking}
            action="
                  
                  "
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />

            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              class="input input-bordered w-full max-w-xs"
            />

            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              class=" btn btn-secondary input input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
