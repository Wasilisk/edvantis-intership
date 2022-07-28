import React from 'react';
import { ProductCardStyles } from './styles';
import {ProductCardProps} from "./types";
import Button from "../common/Button";
import {Link} from "react-router-dom";

const ProductCard = ({content, buttonVariant}: ProductCardProps) => {

    const clickHandler = () => console.log(content.search_name);

    return (
        <ProductCardStyles>
            <Link className="card-image" to={content.search_name}>
                <img src={content.image.url} alt={content.name}/>
            </Link>
            <div className="card-text">
                <Link to={content.search_name}>{content.name}</Link>
                <p className="highlight">
                    {content.price.toFixed(2)}USD
                </p>
            </div>
            <Button
                variant={buttonVariant}
                size="small"
                label="Order Now"
                onClick={clickHandler}
            />
        </ProductCardStyles>
    );
};

export default ProductCard;