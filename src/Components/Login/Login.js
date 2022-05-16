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
                  required: {
                    value: true,
                    message: "Email Is Required",
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Provide a Valid Email", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label>
                {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}

                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password here"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password Is Required",
                  },

                  minLength: {
                    value: 7,
                    message: "Password must be 7 characters", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label>
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}

                {errors.password?.type === " minLength" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <input
              class="btn first-letter:input input-bordered w-full max-w-xs"
              type="submit"
            />
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
