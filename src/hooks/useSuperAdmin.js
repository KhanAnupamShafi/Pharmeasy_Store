import { useState, useEffect } from "react";

const useSuperAdminAccess = (user) => {
  const [adminSuper, setAdminSuper] = useState(false);
  const [adminLoaderSuper, setAdminLoaderSuper] = useState(true);
  useEffect(() => {
    const { email } = user;

    if (email) {
      fetch(`https://pharmeasy-store.herokuapp.com/admin/super/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdminSuper(data.superadmin);
          setAdminLoaderSuper(false);
        });
    }
  }, [user]);

  return [adminSuper, adminLoaderSuper];
};

export default useSuperAdminAccess;
