import React from 'react';
import {PromotionsStyles} from "./styles";
import PromotionCard from "../Cards/PromotionCard";
import {PromotionsProps} from "./types";

const Promotions = ({promotions}: PromotionsProps) => {
    const isDataCorrect = promotions && promotions.length >=3

    return (
       <PromotionsStyles>
            {
                isDataCorrect && promotions.slice(0,3).map(promotion => <PromotionCard
                    key={promotion.id}
                    {...promotion}
                />)
            }
        </PromotionsStyles>
    )

};

export default Promotions;