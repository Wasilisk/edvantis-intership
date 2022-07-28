import React from 'react';
import { GoodsSelectionStyles } from './styles';
import {useAppSelector} from "../../hooks";
import {selectGoodsSelection} from "../../store/slices/HomePage/selectors";
import ProductCard from "../ProductCard";

const GoodsSelection = () => {
    const goodsSelectionData = useAppSelector(selectGoodsSelection);

    return (
        goodsSelectionData && <GoodsSelectionStyles>
            <div className="text-info">
                <h4>{goodsSelectionData.title}</h4>
                <p>{goodsSelectionData.description}</p>
            </div>
            <div className="products-block">
                {
                    goodsSelectionData.products.slice(0,3).map(product => {
                        return (
                            <ProductCard
                                key={product.id}
                                content={product}
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