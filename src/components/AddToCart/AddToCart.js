import { Button } from "@mui/material";
import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import { useShoppingCart } from "use-shopping-cart";

const AddToCart = ({ product }) => {
  const { addItem } = useShoppingCart();
  const handleAddItem = () => {
    addItem(product);
    toast.success(`${product.title} has been added to cart`);
  };
  return (
    <>
      <Button
        color="success"
        variant="contained"
        endIcon={<BiCartAlt size={20} />}
        onClick={handleAddItem}
      >
        Add to basket
      </Button>
    </>
  );
};

export default AddToCart;
