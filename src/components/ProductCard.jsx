import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.substring(0, 100)}...
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small" variant="contained">
          Buy Now
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default ProductCard;
