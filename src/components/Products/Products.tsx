import React, {FC, useEffect, useState} from 'react';
import Product,{IProductTypeProps, IProductProps} from "../product-component/Product";
import product from "../product-component/Product";

const Products:FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([])

   useEffect(()=>{
       fetch('https://dummyjson.com/products')
           .then(value => value.json())
           .then(({products}) => {
               setProducts(products)
               console.log(products)

           })
   },[])

    return (
        <div>
            {
                products
                    .map(({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}:IProductProps)=>
                        (<Product key={id}
                                  id={id}
                                  title={title}
                                  description={description}
                                  price={price}
                                  discountPercentage={discountPercentage}
                                  rating={rating}
                                  stock={stock}
                                  brand={brand}
                                  category={category}
                                  thumbnail={thumbnail}
                                  images={images}/>))
            }
        </div>
    );
};

export default Products;