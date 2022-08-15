import React, {useState} from 'react';
import {ProductItemStyles} from "./styles";
import {ProductItemProps} from "./types";
import NumberInput from "../../common/NumberInput";
import {useAppDispatch} from "../../../hooks";
import {removeProduct, setProductCount} from "../../../store/slices/Basket";
import {ReactComponent as DeleteIcon} from "../../../assets/icons/delete.svg";
import {Link} from "react-router-dom";

const ProductItem = ({product, count}: ProductItemProps) => {
    const dispatch = useAppDispatch();
    const [itemCount, setItemCount] = useState<number>(count)
    const {image, name, search_name, price, id} = product;

    const changeHandler = (newCount: number) => {
        dispatch(setProductCount({productId: id, count: newCount}))
        setItemCount(newCount);
    }

    const deleteProduct = () => dispatch(removeProduct({productId: id}));

    return (
        <ProductItemStyles>
            <div className="preview">
                <img src={image.url} alt={name}/>
            </div>
            <div className="product-info">
                <Link className="name" to={`/shop/${search_name}`} target="_blank">
                    <p>{name}</p>
                </Link>
                <div className="price-info">
                    <NumberInput min={1} max={10} value={itemCount} onChange={changeHandler}/>
                    <p className="price">{(count * price).toFixed(2)}USD</p>
                </div>
            </div>
            <div className="delete-button" role="button" onClick={deleteProduct}>
                <DeleteIcon/>
            </div>
        </ProductItemStyles>
    );
};

export default ProductItem;