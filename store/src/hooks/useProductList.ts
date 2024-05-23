import productsData from '../data/Products.json'
import Product from '../types/Product';
import { useEffect, useState } from 'react';

const useProductList = (setLoading:(loading:boolean)=>void): [
  Product[],] => {
  const [productList, setProductList] = useState<Product[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const data = productsData.map((productData) => ({
          id: productData.id,
          name: productData.name,
          description: productData.description,
          price: productData.price,
          image: productData.image,
          category: productData.category
        }));

        setProductList(data);
        setLoading(false);
      }, 500);
    };
    fetchData();
  });

  return [productList];
};

export default useProductList;
