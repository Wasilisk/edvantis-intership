import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getProductBySearchName} from "../../store/slices/Products";
import {selectSelectedProduct} from "../../store/slices/Products/selectors";
import {ProductPageStyles} from './styles';
import Tab from "../../components/Tabs/Tab";
import Tabs from "../../components/Tabs";
import TabPanel from "../../components/Tabs/TabPanel";
import Button from "../../components/common/Button";
import NumberInput from "../../components/common/NumberInput";

const Product = () => {
    const dispatch = useAppDispatch();
    const {productName} = useParams<string>();
    const productInfo = useAppSelector(selectSelectedProduct);
    const [value, setValue] = useState<string | null>(null)
    const [productCount, setProductCount] = useState<number>(1)

    useEffect(() => {
        if (productName) {
            dispatch(getProductBySearchName(productName))
        }
    }, [])

    useEffect(() => {
        if(productInfo) {
            setValue(productInfo.additional_info[0].name)
        }
    }, [productInfo])


    return (
        <ProductPageStyles>
            {
                productInfo && <>
                    <div className="product-image">
                        <img src={productInfo.image.url} alt={productInfo.name}/>
                    </div>
                    <div className="product-info">
                        <div className="text-info">
                            <p
                                className={`status ${productInfo.status === "in stock" ? "highlight" : "not-available"}`}
                            >
                                {productInfo.status.charAt(0).toUpperCase() + productInfo.status.slice(1)}
                            </p>
                            <p className="product-name">{productInfo.name}</p>
                            <p className="product-code">Product code {productInfo.id}</p>
                            <p className="price">{productInfo.price.toFixed(2)}USD</p>
                        </div>
                        <div className="actions">
                            <NumberInput min={1} max={10} value={productCount} onChange={setProductCount}/>
                            <Button variant="filled" size="medium" label="Add to card" fullWidth/>
                        </div>
                        <div className="additional-info">
                            <Tabs>
                                {
                                    productInfo.additional_info.map((tab, index) => {
                                        const clickHandler = () => setValue(tab.name);

                                        return <Tab
                                            key={index}
                                            label={tab.name}
                                            isActive={value === tab.name}
                                            onClick={clickHandler}
                                        />
                                    })
                                }
                            </Tabs>
                            {
                                productInfo.additional_info.map((tab, index) => <TabPanel
                                    key={index}
                                    value={value as string}
                                    index={tab.name}
                                >
                                    <pre>{tab.value}</pre>
                                </TabPanel>)
                            }
                        </div>
                    </div>
                </>
            }
        </ProductPageStyles>
    );
};

export default Product;