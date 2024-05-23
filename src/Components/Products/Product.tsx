import React, {FC} from 'react';
import styles from "./Product.module.css";
export interface IProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export type IProductTypeProps = IProductProps & { children?: React.ReactNode };
const Product: FC<IProductTypeProps> = ({
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
                                        }) => {
    return <>
        <div className={styles.cardWrapper}>
            <p><i>id#{id}</i></p>
            <p><b>Brand: {brand}</b></p>
            <h2>{title}</h2>
            <h3>Price: {price} Euro</h3>
            <p><i>Rating: {rating}</i></p>
            <p><i>{description}</i></p>
            <div>
                {images.map((img, index) => <img className={styles.image} key={index} src={img} alt={title}/>)}
            </div>
            <h3><i>DiscountPercentage: {discountPercentage}%</i></h3>
            <p><b>Stock: {stock}</b></p>
            <p><b>Category: {category}</b></p>
            <a href={thumbnail} className={styles.thumbnail}>{thumbnail}</a>
            {/*<img className={styles.image} src={thumbnail} alt={title}/>*/}
        </div>
    </>
};
export default Product;