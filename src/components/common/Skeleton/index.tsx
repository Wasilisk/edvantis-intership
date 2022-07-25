import React from 'react';
import { SkeletonStyles } from './styles';
import {SkeletonProps} from "./types";

const Skeleton = (props: SkeletonProps) => <SkeletonStyles {...props}/>

export default Skeleton;