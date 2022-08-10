import React, {useState} from 'react';
import {TabsSectionStyles} from "./styles";
import {ProductType, TabsSectionType} from "../../../models";
import Tabs from "../../Tabs";
import Tab from "../../Tabs/Tab";
import TabPanel from "../../Tabs/TabPanel";
import ProductCard from "../../Cards/ProductCard";

const TabsSection = ({title, description, tabs}: TabsSectionType) => {
    const [value, setValue] = useState<number | string>(tabs[0].id)

    return (
        <TabsSectionStyles id="#favourites">
            <div className="text-info">
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
            </div>
            <Tabs>
                {
                    tabs.map(tab => {
                        const clickHandler = () => setValue(tab.id);

                        return <Tab
                            key={tab.id}
                            label={tab.label}
                            isActive={value === tab.id}
                            onClick={clickHandler}
                        />
                    })
                }
            </Tabs>
            {
                tabs.map(tab => <TabPanel key={tab.id} value={value} index={tab.id}>
                    {
                        Array.isArray(tab.items) && tab.items.map((item: ProductType) => <ProductCard
                                {...item}
                                key={item.id}
                                buttonVariant="outlined"
                            />
                        )
                    }
                </TabPanel>)
            }
        </TabsSectionStyles>
    );
};

export default TabsSection;