import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { AiFillMedicineBox } from "react-icons/ai";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { ImUndo } from "react-icons/im";
import { BiImageAlt } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AllProduct = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["Products"], () =>
    fetch(`https://pharmeasy-store.herokuapp.com/product/`).then((res) =>
      res.json()
    )
  );

  // console.log(products);

  if (isLoading) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <CircularProgress color="success" />
      </Stack>
    );
  }

  const handleDeleteProduct = (id, title, refetch) => {
    fetch(`https://pharmeasy-store.herokuapp.com/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`cant delete`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.warning(`${title} is deleted`);
        }
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Divider sx={{ mb: 5 }}>
        <Button variant="outlined" color="success" disableElevation>
          <Avatar sx={{ bgcolor: green[500], mr: 1 }} variant="rounded">
            <AiFillMedicineBox fontSize="large" />
          </Avatar>
          <Typography>{products?.length} Products</Typography>
        </Button>
      </Divider>

      <TableContainer component={Paper}>
        <Box
          title="Manage Product"
          icon={
            <Avatar
              sx={{ bgcolor: red[500], color: "#ff4" }}
              variant="rounded"
            ></Avatar>
          }
        />
        <Divider />
        <Table
          sx={{ width: "100%", overflow: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Index&nbsp;No.</TableCell>
              <TableCell align="left">Product&nbsp;Info</TableCell>
              <TableCell align="left">Made&nbsp;By</TableCell>

              <TableCell align="left">Price Unit</TableCell>
              <TableCell align="right">Action&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length !== 0 ? (
              products.map((row, index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell width="5%" align="center">
                    {index + 1}.
                  </TableCell>

                  <TableCell align="center">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          src={row.imgFile || row.img}
                          sx={{ width: 88, height: 88, mr: 2 }}
                        >
                          <BiImageAlt size={30} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${row.title}`}
                        secondary={`Product Id: ${row._id}`}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "bold",
                          letterSpacing: 0,
                        }}
                      />
                    </ListItem>
                  </TableCell>

                  <TableCell width="20%" align="left">
                    <Typography variant="subtitle2" color="info.light">
                      {row.brand}&nbsp;
                    </Typography>
                  </TableCell>

                  <TableCell width="10%" align="left">
                    {row.price} &#2547;
                  </TableCell>

                  <TableCell align="left">
                    <Stack
                      direction="row"
                      justifyContent="right"
                      alignItems="center"
                      wrap="wrap"
                      spacing={1}
                    >
                      <Tooltip
                        title="Delete product"
                        sx={{
                          mr: 1,
                        }}
                      >
                        <Chip
                          icon={<MdDeleteForever fontSize="large" />}
                          label="Delete"
                          color="error"
                          sx={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleDeleteProduct(row._id, row.title, refetch);
                          }}
                        />
                      </Tooltip>
                      <Tooltip
                        title="Update product"
                        sx={{
                          mr: 1,
                          cursor: "pointer",
                        }}
                      >
                        <Link
                          to={`/dashboard/update/${row?._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Chip
                            icon={<ImUndo />}
                            label="Update"
                            color="warning"
                            sx={{
                              cursor: "pointer",
                            }}
                          />
                        </Link>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                {" "}
                <h3>No Product data exist</h3>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllProduct;
