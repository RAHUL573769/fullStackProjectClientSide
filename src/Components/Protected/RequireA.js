import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase/FirebaseInit";

const RequireA = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (loading) {
    return <button class="btn loading">loading</button>;
  }
  return children;
};

export default RequireA;
