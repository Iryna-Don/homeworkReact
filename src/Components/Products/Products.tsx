import React, {FC, useEffect, useState} from 'react'
import Product, {IProductProps} from "./Product";
import styles from "./Products.module.css";

const Products: FC<any> = () => {
    const [products, setProducts] = useState<IProductProps[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products);
            });
    }, [])
    return (
        <div className={styles.generalDiv}>
            {products.map(({
                               id,
                               title,
                               description,
                               price,
                               discountPercentage,
                               rating,
                               stock,
                               brand,
                               category,
                               thumbnail,
                               images
                           }: IProductProps) => <Product key={id} id={id}
                                                         title={title}
                                                         description={description}
                                                         price={price}
                                                         discountPercentage={discountPercentage}
                                                         rating={rating}
                                                         stock={stock}
                                                         brand={brand}
                                                         category={category}
                                                         thumbnail={thumbnail}
                                                         images={images}
            />)}
        </div>
    );
};
export default Products;