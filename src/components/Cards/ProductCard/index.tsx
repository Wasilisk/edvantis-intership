import React from 'react';
import { ProductCardStyles } from './styles';
import {ProductCardProps} from "./types";
import Button from "../../common/Button";
import {Link} from "react-router-dom";

const ProductCard = ({search_name, image, name, price, buttonVariant, status}: ProductCardProps) => {

    const clickHandler = () => console.log(search_name); //ToDo add product card logic

    return (
        <ProductCardStyles data-testid="product-card">
            <Link className="card-image" to={`shop/${search_name}`}>
                <img src={image?.url} alt={name}/>
                {
                    status === "out of stock" && <div className="out-of-stock">Out of stock</div>
                }
            </Link>
            <div className="card-text">
                <Link to={`shop/${search_name}`}>{name}</Link>
                <p className="highlight">
                    {price.toFixed(2)}USD
                </p>
            </div>
            <Button
                variant={buttonVariant}
                size="small"
                label="Order Now"
                onClick={clickHandler}
                disabled={status === "out of stock"}
            />
        </ProductCardStyles>
    );
};

export default ProductCard;