import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import auth from "../Firebase/FirebaseInit";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  return (
    <div className="flex  h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class=" text-center text-2xl ">Login!</h2>

          <div class="divider">OR</div>
          <button class="btn btn-info">Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
