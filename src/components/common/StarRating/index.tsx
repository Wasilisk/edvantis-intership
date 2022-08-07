import React, {useRef, useState} from 'react';
import {StarBlock, StarRatingStyles} from './styles';
import {ReactComponent as EmptyStar} from "../../../assets/icons/empty-star.svg";
import {ReactComponent as FilledStar} from "../../../assets/icons/filled-star.svg";
import {StarRatingProps} from "./types";

const StarRating = ({activeStar, onChange, precision, readonly = false}: StarRatingProps) => {
    const [hoverActiveStar, setHoverActiveStar] = useState<number>(-1);
    const [isHovered, setIsHovered] = useState(false);
    const ratingContainerRef = useRef<HTMLDivElement>(null);

    const calculateRating = (event: React.MouseEvent<HTMLElement>) => {
        const {width, left} = ratingContainerRef.current!.getBoundingClientRect();
        let percent = (event.clientX - left) / width;
        const numberInStars = percent * 5;
        const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;

        return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setIsHovered(false);
        const value = calculateRating(event)
        onChange && onChange(value);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        setIsHovered(true);
        setHoverActiveStar(calculateRating(event));
    };

    const handleMouseLeave = () => {
        setHoverActiveStar(-1);
        setIsHovered(false);
    };

    return (
        <StarRatingStyles
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            readonly={readonly}
            ref={ratingContainerRef}
        >
            {[...new Array(5)].map((_, index) => {
                const activeState = isHovered ? hoverActiveStar : activeStar;

                const showEmptyIcon = activeState === -1 || activeState < index + 1;

                const isActiveRating = activeState !== 1;
                const isRatingWithPrecision = activeState % 1 !== 0;
                const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
                const showRatingWithPrecision =
                    isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

                return (
                    <StarBlock
                        activeState={activeState}
                        showRatingWithPrecision={showRatingWithPrecision}
                        key={index}
                    >
                        <div className="filled">
                            <FilledStar/>
                        </div>
                        <div className="empty">
                            {showEmptyIcon ? <EmptyStar/> : <FilledStar/>}
                        </div>
                    </StarBlock>
                )
            })}
        </StarRatingStyles>
    );
};

export default StarRating;