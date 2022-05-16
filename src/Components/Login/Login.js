import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import auth from "../Firebase/FirebaseInit";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (guser) {
    console.log(guser);
  }
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex  h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class=" text-center text-2xl ">Login!</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email here"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
            </div>
            <input {...register("firstName", { required: true })} />
            {errors.firstName?.type === "required" && "First name is required"}

            <input />
            {errors.lastName && "Last name is required"}

            <input type="submit" />
          </form>

          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-info">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
