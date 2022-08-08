import React from 'react';
import { OffersStyles } from './styles';
import {OffersProps} from "./types";
import OfferCard from "../../Cards/OfferCard";

const Offers = ({offers}: OffersProps) => {
    return (
        <OffersStyles id="#collection">
            {
                offers.length >= 2 && <>
                    <OfferCard variant="dark" {...offers[0]}/>
                    <OfferCard variant="light" {...offers[1]}/>
                </>
            }
        </OffersStyles>
    );
};

export default Offers;