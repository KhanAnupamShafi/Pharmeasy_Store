import {
  Button,
  Chip,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiBasket } from "react-icons/bi";
import { toast } from "react-toastify";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery([`users`], () =>
    fetch(`https://pharmeasy-store.herokuapp.com/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <CircularProgress color="success" />
      </Stack>
    );
  }

  const makeAdmin = (user, refetch) => {
    fetch(`https://pharmeasy-store.herokuapp.com/user/admin/${user?.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Forbidden Request`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`${user?.email} is now an Admin!`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const makeAdminSuper = (user, refetch) => {
    fetch(
      `https://pharmeasy-store.herokuapp.com/user/admin/super/${user?.email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Forbidden Request`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`${user?.email} is now an super Admin!`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeAdmin = (user, refetch) => {
    // console.log("clicked");
    fetch(`https://pharmeasy-store.herokuapp.com/user/admin/${user?.email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Forbidden Request`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.warning(`${user?.email} is not an Admin anymore!`);
          // console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Divider sx={{ mb: 3 }}>
        <Button variant="outlined" color="success" disableElevation>
          <Typography color="#67AD63" component="h3">
            <b> Total Users: {users.length}</b>
          </Typography>
        </Button>
      </Divider>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="left">
                <b>User Emails</b>
              </TableCell>
              <TableCell align="left">
                <b>User Role</b>
              </TableCell>

              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length !== 0 ? (
              users.map((user, index) => (
                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    width="5%"
                    component="th"
                    scope="row"
                    align="right"
                  >
                    <Typography fontWeight={"bold"}>{index + 1}.</Typography>
                  </TableCell>
                  <TableCell width="20%" align="left">
                    {user.email}
                  </TableCell>
                  <TableCell align="left">
                    {user.admin ? (
                      <Chip
                        label="Super Admin"
                        variant="outlined"
                        color="warning"
                      />
                    ) : user.role === "admin" ? (
                      <Chip label="Admin" variant="outlined" color="warning" />
                    ) : (
                      <Chip
                        label="Customer"
                        variant="outlined"
                        color="success"
                      />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {user.role !== "admin" ? (
                      <Button
                        onClick={() => makeAdmin(user, refetch)}
                        variant="outlined"
                        size="small"
                        color="success"
                      >
                        Make Admin
                      </Button>
                    ) : (
                      <Button
                        onClick={() => removeAdmin(user, refetch)}
                        variant="outlined"
                        size="small"
                        color="error"
                        startIcon={<BiBasket />}
                        disabled={user.admin ? true : false}
                      >
                        Remove Admin
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                {" "}
                <h3>No Users Yet</h3>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
