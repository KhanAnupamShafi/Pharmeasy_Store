import {
  Button,
  CircularProgress,
  Divider,
  Paper,
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

const Users = () => {
  const { data: users, isLoading } = useQuery([`users`], () =>
    fetch(`http://localhost:5000/user`).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }
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
                <b>User Stats</b>
              </TableCell>

              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width="5%" component="th" scope="row" align="right">
                  <b>{index + 1}.</b>
                </TableCell>
                <TableCell width="20%" align="left">
                  {user.email}
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">3</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
