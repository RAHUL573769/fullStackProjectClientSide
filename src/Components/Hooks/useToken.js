import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("user inside usetoken", user);

    const email = user?.user?.email;
    const currentUser = {
      email: email,
    };

    if (email) {
      const url = `http://localhost:5000/user/${email}`;
      fetch(url, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
