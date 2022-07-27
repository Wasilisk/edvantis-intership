import React from 'react';
import {useAppSelector} from "../../hooks";
import {selectPromotions} from "../../store/slices/HomePage/selectors";
import {PromotionsStyles} from "./styles";
import PromotionCard from "./PromotionCard";

const Promotions = () => {
    const promotionsData = useAppSelector(selectPromotions);

    return (
       <PromotionsStyles>
            {
                promotionsData && promotionsData.slice(0,3).map(promotion => <PromotionCard
                    key={promotion.id}
                    content={promotion}
                />)
            }
        </PromotionsStyles>
    )

};

export default Promotions;