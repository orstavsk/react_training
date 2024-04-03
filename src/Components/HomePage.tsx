import ProductCardProps from "./ProductCardProps";
import useproductList from "../hooks/useProductList";
import { Grid, LinearProgress } from "@mui/material";
import Product from "../types/Product";
import { useState } from "react";

const HomePage = () => {
    const [loading,setLoading]=useState<boolean>(true);
    const [products]= useproductList(setLoading);
    return (
        <div>
          {loading ? (
            <LinearProgress sx={{ width: '100%', marginTop: '250px' }} />
          ) : (
            <Grid container rowSpacing={3} columnSpacing={2} justifyContent={'center'}>
              {products.map((p: Product) => (
                <Grid item key={p.id}>
                  <ProductCardProps
                    product={p}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      );
    };
    
    export default HomePage;