import React, {FC, useEffect, useState} from 'react'
import Product, {IProductProps} from "./Product";
import styles from "./Products.module.css";

const Products: FC<any> = () => {
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(30);
    let linkText = 'https://dummyjson.com/products?limit=' + limit + '&skip=' + skip;
    const [link, setLink] = useState(linkText);
    const [products, setProducts] = useState<IProductProps[]>([]);
    const [total, setTotal] = useState<number>(0);
    useEffect(() => {
        fetch(link)
            .then(value => value.json())
            .then(({products, total}) => {
                setProducts(products);
                setTotal(total);
            });
    }, [link])
    return (
        <>
            <button disabled={skip <= 0}
                    onClick={() => {
                        setSkip(skip - limit);
                        setLink(linkText);
                    }}>Previous {limit} Cards
            </button>

            <button disabled={skip >= total-skip}
                    onClick={() => {
                        setSkip(skip + limit);
                        setLink(linkText);
                    }}>Next {limit} Cards
            </button>

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
        </>
    );
};
export default Products;