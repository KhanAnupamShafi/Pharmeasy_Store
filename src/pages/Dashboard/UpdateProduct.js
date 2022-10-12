import {
  Avatar,
  Button,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  LinearProgress,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
// import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlinePhotoAlbum, MdUpdate } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { MuiButton } from "../Authentication/SignIn";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  //   const [title, setTitle] = useState("");
  //   const [type, setType] = useState(null);
  //   const [price, setPrice] = useState(0);
  //   const [discount, setDiscount] = React.useState(0);
  //   const [productInfo, setProductInfo] = useState({});
  //   const [originalPrice, setOriginalPrice] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery(
    ["ProductUpdate", id],
    () =>
      fetch(`https://pharmeasy-store.herokuapp.com/product/${id}`).then((res) =>
        res.json()
      ),
    { refetchOnMount: true, refetchOnWindowFocus: true }
  );

  if (isLoading) {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <LinearProgress color="success" />
      </Stack>
    );
  }
  const imgAPIKey = "271c9489ae5aa7d1092687fcd00d617b";
  const onSubmit = (data, refetch) => {
    console.log(data);
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

            const updatedProduct = {
              title: data.title,
              brand: data.manufacturer,
              price: parseInt(data.price),
              desc: data.description,
              stock: parseInt(data.stock),
              discount: parseInt(data.discount),
              category: data.type,
              imgFile: img,
            };
            fetch(
              `https://pharmeasy-store.herokuapp.com/product/${product?._id}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount > 0) {
                  refetch();

                  toast.success(`updated successfully`);
                  navigate("/dashboard/all");
                  reset();
                  // window.location.reload();
                }
              });
          }
        });
    } else {
      const updatedProduct = {
        title: data.title,
        brand: data.manufacturer,
        price: parseInt(data.price),
        desc: data.description,
        stock: parseInt(data.stock),
        discount: parseInt(data.discount),
        category: data.type,
        imgFile: product.imgFile ? product.imgFile : "",
      };
      fetch(`https://pharmeasy-store.herokuapp.com/product/${product?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch();

            toast.success(`updated successfully`);
            navigate("/dashboard/all");
            reset();
            // window.location.reload();
          }
        });
    }

    // const updatedProduct = {
    //   title: data.title,
    //   brand: data.manufacturer,
    //   price: parseInt(data.price),
    //   desc: data.description,
    //   stock: parseInt(data.stock),
    //   discount: parseInt(data.discount),
    //   category: data.type,
    //   img: data.image,
    // };
    // fetch(`https://pharmeasy-store.herokuapp.com/product/${product?._id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(updatedProduct),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       refetch();

    //       toast.success(`updated successfully`);
    //       navigate("/dashboard/all");

    //       // window.location.reload();
    //     }
    //   });
  };

  return (
    <>
      <Divider sx={{ mb: 5 }}>
        <Button variant="outlined" color="success" disableElevation>
          <Avatar sx={{ bgcolor: green[500], mr: 1 }} variant="rounded">
            <MdUpdate fontSize="large" />
          </Avatar>
          <Typography variant="outline">Update Product ID: {id}</Typography>
        </Button>
      </Divider>

      <Paper
        component="form"
        onSubmit={handleSubmit((data) => onSubmit(data, refetch))}
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
              defaultValue={product.title}
              name="title"
              required
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
              defaultValue={product.price}
              //   onChange={handlePriceChange}

              name="price"
              required
              label="Price"
              className={classes.root}
              InputProps={{
                className: classes.input,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              //   autoFocus
              //   onBlur={handlePriceChange}
            />

            <TextField
              {...register("manufacturer")}
              defaultValue={product.brand}
              name="manufacturer"
              required
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
              defaultValue={product.stock}
              inputProps={{ step: 1, min: 0 }}
              name="stock"
              required
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
              defaultValue={product.discount}
              //   onChange={handleChangeDisc}
              inputProps={{ step: 0.5, min: 0, max: 100 }}
              name="discount"
              required
              label="Discount (%)"
              className={classes.root}
              type="number"
              InputProps={{
                className: classes.input,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              //   onBlur={handleChangeDisc}
              //   autoFocus
            />

            <FormControl sx={{ p: 2 }}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                {...register("type")}
                defaultValue={product.category}
                label="Type"
                // onChange={handleChange}
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
              defaultValue={product.desc}
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

            {/* <FormControl
              sx={{ width: "70%", m: "auto", pb: 5 }}
              variant="standard"
            >
              <InputLabel htmlFor="input-with-icon-adornment">
                Image Url
              </InputLabel>
              <Input
                type="url"
                {...register("image")}
                defaultValue={product.img}
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <BiPhotoAlbum color="error" />
                  </InputAdornment>
                }
              />
            </FormControl> */}

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
                    <MdOutlinePhotoAlbum color="#04626c" size={30} />
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

export default UpdateProduct;

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
