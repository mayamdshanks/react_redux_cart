import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import "../App.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card
        xs={4}
        sx={{
          maxWidth: 345,
          marginTop: "2rem",
          justifyContent: "space-between",
          marginBottom: "2rem",
          display: "inline-grid",
          gridTemplateRows: "repeat(3, 1fr)",
          // gridTemplateColumns: 'repeat(3, 1fr)',
          flexDirection: "column",
          // height: "100%",
          marginRight: "2rem",
          alignItems: "stretch",
          height: " -webkit-fill-available",
          rowGap: 1,
          gridTemplateColumns: "repeat(1.5, 1fr)",
          
        }}
        key={id}
      >
        <CardMedia sx={{ height: 140 }} image={image} title={title}
         />
         <Link to= {`/product/${id}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Add to cart</Button>
        </CardActions>
        </Link>
      </Card>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
