import React from 'react';
import { ProductCardStyles } from './styles';
import {ProductCardProps} from "./types";
import Button from "../../common/Button";
import {Link} from "react-router-dom";

const ProductCard = ({search_name, image, name, price, buttonVariant}: ProductCardProps) => {

    const clickHandler = () => console.log(search_name); //ToDo add product card logic

    return (
        <ProductCardStyles>
            <Link className="card-image" to={search_name}>
                <img src={image?.url} alt={name}/>
            </Link>
            <div className="card-text">
                <Link to={search_name}>{name}</Link>
                <p className="highlight">
                    {price.toFixed(2)}USD
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