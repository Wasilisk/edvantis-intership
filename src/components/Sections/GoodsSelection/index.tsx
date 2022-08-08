import React from 'react';
import { GoodsSelectionStyles } from './styles';
import ProductCard from "../../Cards/ProductCard";
import {GoodsSelectionType} from "../../../models";

const GoodsSelection = ({title, description, products, id_name}: GoodsSelectionType) => {

    return (
        <GoodsSelectionStyles id={id_name}>
            <div className="text-info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="products-block">
                {
                    products.slice(0,3).map(product => {
                        return (
                            <ProductCard
                                key={product.id}
                                {...product}
                                buttonVariant="filled"
                            />
                        )
                    })
                }
            </div>
        </GoodsSelectionStyles>
    );
};

export default GoodsSelection;