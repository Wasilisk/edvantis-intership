import React from 'react';
import {ShoppingCartStyles} from "./styles";
import {useAppSelector} from "../../hooks";
import {selectBasketProducts, selectTotalPrice} from "../../store/slices/Basket/selectors";
import ProductItem from "./ProductItem";
import CartForm from "../Forms/CartForm";
import {ShoppingCartProps} from "./types";

const ShoppingCart = ({closeModal}: ShoppingCartProps) => {
    const basketProducts = useAppSelector(selectBasketProducts);
    const totalPrice = useAppSelector(selectTotalPrice);

    const productsList = Object.entries(basketProducts)
        .map(([key, value]) => <ProductItem key={key} {...value}/>);

    const orderProducts = Object.entries(basketProducts)
        .map(([_, value]) => ({
                id: value.product.id,
                count: value.count
            })
        );

    return (
        <ShoppingCartStyles>
            {
                Object.keys(basketProducts).length > 0
                    ? <>
                        <div>
                            <h6 className="section-title">Products</h6>
                            <div className="products-list">
                                {productsList}
                                <div className="total-price">
                                    <p>Total: {totalPrice.toFixed(2)}USD</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 className="section-title">Place and order</h6>
                            <CartForm products={orderProducts} onClose={closeModal}/>
                        </div>
                    </>
                    : <div className="empty-cart">
                        <p className="title">Shopping cart is empty</p>
                        <p className="description">Continue shopping to add product to your cart</p>
                    </div>
            }
        </ShoppingCartStyles>
    );
};

export default ShoppingCart;