import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {selectAllProducts} from "../../store/slices/Products/selectors";
import {getAllProducts} from "../../store/slices/Products";
import ProductCard from "../../components/Cards/ProductCard";
import {ShopStyles} from "./styles";

const Shop = () => {
    const dispatch = useAppDispatch();
    const allProducts = useAppSelector(selectAllProducts);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <ShopStyles>
            <h4 className="title">Products ({allProducts?.length})</h4>
            <div className="product-grid">
                {
                    allProducts && allProducts.map(product => <ProductCard
                            key={product.id}
                            buttonVariant="filled"
                            {...product}
                        />
                    )
                }
            </div>
        </ShopStyles>
    );
};

export default Shop;