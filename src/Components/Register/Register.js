import React from "react";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../Firebase/FirebaseInit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import useToken from "../Hooks/useToken";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let signInError;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (gUser || user) {
    console.log(gUser || user);
  }

  const [token] = useToken(gUser || user);

  if (token) {
    navigate("/appointment");
  }

  if (loading || gLoading || updating) {
    return <button class="btn loading">loading</button>;
  }

  if (gError || error || updatingError) {
    signInError = <p>{gError?.message || error?.message}</p>;
  }
  const onSubmit = async (data) => {
    console.log(data);

    await createUserWithEmailAndPassword(data.email, data.password);

    await updateProfile({ displayName: data.name });

    console.log("done");
  };

  return (
    <div>
      <h1 className="text-secondary">This is Register</h1>

      <div className="flex  h-screen justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class=" text-center text-2xl ">Register!</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name Is Required",
                    },
                  })}
                />
                <label>
                  {errors.name?.type === "required" && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </label>
              </div>
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
                value="Register"
              />
            </form>

            {signInError}
            <p>
              Already Have An Account?<Link to="/login">Login</Link>
            </p>
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle()} class="btn btn-info">
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
