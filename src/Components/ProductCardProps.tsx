import { Info, ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Product from "../types/Product";
import ProductInfo from "../modals/ProductInfo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/reducers/cart_reducer";

interface ProductCardProps {
  product: Product;
}

const ProductCardProps = (props: ProductCardProps) => {
  const [infoDialogOpen, setInfoDialogOpen] = useState<boolean>(false);
  const dispatch=useDispatch();

  const handleAddToCartClick=()=>{
    dispatch(addToCart(props.product));
  }

  const handleDetailsClick = () => {
    setInfoDialogOpen(true);
  };

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false);
  };

  return (
    <Card sx={{ height: 345, width: 300, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt="Product Image"
        height="140"
        image={props.product.image}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.1 }}>
          {props.product.name}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {props.product.price}₪
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', marginTop: 'auto' }}>
        <Button variant="contained" sx={{ margin: '10px' }} onClick={handleAddToCartClick}>
          הוסף לעגלה
          <ShoppingCart />
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDetailsClick} sx={{ margin: '10px' }} >
          פרטים
          <Info />
        </Button>
      </CardActions>
      <ProductInfo
        isOpen={infoDialogOpen}
        onClose={handleInfoDialogClose}
        product={props.product}
        addToCart={handleAddToCartClick}
      />
    </Card>
  );
};

export default ProductCardProps;
