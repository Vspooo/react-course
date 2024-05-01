import React, {FC} from 'react';


export interface IProductProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock:number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export type IProductTypeProps = IProductProps & {children?:React.ReactNode}

const Product:FC<IProductTypeProps> = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {

    return (
        <div>
         <h2>{id}. {title}</h2>
            <p>{description}</p>
            <h3>{price}-{discountPercentage}</h3>
            <p>{rating}. {brand}. {category}</p>
            <p>{thumbnail}</p>
            <img src={images[0]} alt={title}/>
        </div>
    );
};

export default Product;