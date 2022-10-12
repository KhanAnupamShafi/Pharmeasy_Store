import { useState, useEffect } from "react";

const UseAdminAccess = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoader, setAdminLoader] = useState(true);
  useEffect(() => {
    const { email } = user;

    if (email) {
      fetch(`https://pharmeasy-store.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoader(false);
        });
    }
  }, [user]);

  return [admin, adminLoader];
};

export default UseAdminAccess;
