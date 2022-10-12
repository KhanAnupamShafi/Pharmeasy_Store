import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiAddToQueue, BiPhotoAlbum } from "react-icons/bi";
import { MuiButton } from "../Authentication/SignIn";
import { toast } from "react-toastify";
import { Stack } from "@mui/system";
import { MdPhotoAlbum } from "react-icons/md";

const AddProduct = () => {
  const classes = useStyles();
  const [type, setType] = React.useState("Health Condition");
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const { register, handleSubmit, reset } = useForm();
  const [originalPrice, setOriginalPrice] = useState(price);

  const imgAPIKey = "271c9489ae5aa7d1092687fcd00d617b";

  const onSubmit = (data) => {
    // console.log(data);

    if (data.img[0]) {
      const image = data.img[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imgAPIKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            const img = result.data.url;
            const product = {
              title: data.title,
              brand: data.manufacturer,
              price: parseInt(data.price),
              desc: data.description,
              stock: parseInt(data.stock),
              discount: parseInt(data.discount),
              originalPrice: parseInt(originalPrice),
              category: data.type,
              img: data.image,
              imgFile: img,
              sku:
                "sku_" +
                Date.now().toString(36) +
                Math.random().toString(36).substring(2),
            };

            fetch("https://pharmeasy-store.herokuapp.com/product", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(product),
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log(data);

                if (data.success) {
                  toast.success(`Product Added Successfully`);
                  reset();
                } else {
                  toast.error(`Failed to add the product`);
                }
              })
              .catch((error) => {
                toast.error(`Error adding product`);
                console.log(error);
              });
          }
        });
    } else {
      const product = {
        title: data.title,
        brand: data.manufacturer,
        price: parseInt(data.price),
        desc: data.description,
        stock: parseInt(data.stock),
        discount: parseInt(data.discount),
        originalPrice: parseInt(originalPrice),
        category: data.type,
        img: data.image,
        imgFile: "",
        sku:
          "sku_" +
          Date.now().toString(36) +
          Math.random().toString(36).substring(2),
      };

      // console.log(product);
      fetch("https://pharmeasy-store.herokuapp.com/product", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);

          if (data.success) {
            toast.success(`Product Added Successfully`);
            reset();
          } else {
            toast.error(`Failed to add the product`);
          }
        })
        .catch((error) => {
          toast.error(`Error adding product`);
          console.log(error);
        });
    }
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    const salePrice = event.target.value / (1 - discount / 100);
    setOriginalPrice(Math.ceil(salePrice));
  };
  const handleChangeDisc = (event) => {
    setDiscount(event.target.value);
    const salePrice = price / (1 - event.target.value / 100);
    setOriginalPrice(Math.ceil(salePrice));
  };
  return (
    <>
      <Divider sx={{ mb: 5 }}>
        <Button variant="outlined" color="success" disableElevation>
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            <BiAddToQueue fontSize="large" />
          </Avatar>
        </Button>
      </Divider>

      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: 850,
          m: "auto",
          "& .MuiTextField-root": { m: 1, mb: 5, width: "90%" },
        }}
      >
        <Grid2
          container
          spacing={1}
          justifyContent="center"
          sx={{ textAlign: "center" }}
        >
          <Grid2 item xs={12} sm={12} md={6}>
            <TextField
              {...register("title")}
              autoComplete="Title"
              name="title"
              required
              id="title"
              label="Title"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              autoFocus
            />
            <TextField
              type="number"
              inputProps={{ step: 0.01, min: 0 }}
              {...register("price")}
              autoComplete="Price"
              name="price"
              required
              id="price"
              label="Price"
              className={classes.root}
              InputProps={{
                className: classes.input,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              //   autoFocus
              onChange={handlePriceChange}
            />

            <TextField
              {...register("manufacturer")}
              autoComplete="Manufacturer"
              name="manufacturer"
              required
              id="manufacturer"
              label="Manufacturer"
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
              //   autoFocus
            />
          </Grid2>

          <Grid2 item xs={12} sm={12} md={6}>
            <TextField
              {...register("stock")}
              autoComplete="Stock"
              inputProps={{ step: 1, min: 0 }}
              name="stock"
              required
              id="Stock"
              label="Stock"
              type="number"
              InputProps={{
                className: classes.input,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              //   autoFocus
            />

            <TextField
              {...register("discount", { max: 100, min: 0 })}
              autoComplete="Discount"
              inputProps={{ step: 0.5, min: 0, max: 100 }}
              name="discount"
              required
              id="Discount"
              label="Discount (%)"
              className={classes.root}
              type="number"
              InputProps={{
                className: classes.input,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              onChange={handleChangeDisc}
              //   autoFocus
            />

            <FormControl sx={{ p: 2 }}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                {...register("type")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={handleChange}
              >
                <MenuItem selected value={"Health Condition"}>
                  Health Condition
                </MenuItem>
                <MenuItem value={"Covid Essentital"}>Covid Essentital</MenuItem>
                <MenuItem value={"Health-Care Devices"}>
                  Health-Care Devices
                </MenuItem>
                <MenuItem value={"Skin Care"}>Skin Care</MenuItem>
                <MenuItem value={"Personal Care"}>Personal Care</MenuItem>
                <MenuItem value={"Elderly Care"}>Elderly Care</MenuItem>
                <MenuItem value={"Accessories"}>Accessories</MenuItem>
                <MenuItem value={"Diabetic Care"}>Diabetic Care</MenuItem>
                <MenuItem value={"Vitamins & Supplements"}>
                  Vitamins & Supplements
                </MenuItem>
                <MenuItem value={"Mother & Baby"}>Mother & Baby</MenuItem>
                <MenuItem value={"Medicines"}>Medicines</MenuItem>
                <MenuItem value={"Diet & Nutrition"}>Diet & Nutrition</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          <Grid2 item xs={12} sm={12} md={12} justifyContent="center">
            <TextField
              {...register("description")}
              required
              label="Description"
              placeholder="Write Product Description"
              multiline
              minRows={3}
              maxRows={6}
              className={classes.root}
              InputProps={{
                className: classes.input,
              }}
            />

            <FormControl
              sx={{ width: "70%", m: "auto", pb: 5 }}
              variant="standard"
            >
              <InputLabel htmlFor="input-with-icon-adornment">
                Image Url
              </InputLabel>
              <Input
                type="url"
                {...register("image")}
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <BiPhotoAlbum color="#04626c" size={30} />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl
              sx={{ width: "70%", m: "auto", pb: 5 }}
              variant="standard"
            >
              <InputLabel htmlFor="input-with-file">Image Url</InputLabel>
              <Input
                type="file"
                {...register("img")}
                id="input-with-file"
                startAdornment={
                  <InputAdornment position="start">
                    <MdPhotoAlbum color="#04626c" size={30} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid2>
        </Grid2>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button
            color="error"
            onClick={() => reset()}
            sx={{ display: "inline", maxWidth: 250, m: 1 }}
          >
            Reset
          </Button>
          <MuiButton
            type="submit"
            sx={{ display: "inline", maxWidth: 250, m: 1 }}
          >
            Submit
          </MuiButton>
        </Stack>
      </Paper>
    </>
  );
};

export default AddProduct;

const useStyles = makeStyles((theme) => ({
  root: {
    p: 1,
    mb: 5,
  },
  input: {
    color: green[900],
    fontWeight: 600,
  },
}));
