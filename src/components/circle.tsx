'use client';
import React, { useEffect, useRef } from 'react';
import { cubicBezier, motion, useMotionValue } from 'framer-motion';

const Circle = ({
    startPositionX,
    startPositionY,
    endPositionX,
    endPositionY,
    className,
    duration
}: {
    startPositionX: number;
    startPositionY: number;
    endPositionX: number;
    endPositionY: number;
    className: string;
    duration: number;
}) => {
    const easing = cubicBezier(0.05, 0.99, 0.01, 0.99);
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className={className}
            animate={{ x: [`${startPositionX}vw`, `${endPositionX}vw`], y: [`${startPositionY}vh`, `${endPositionY}vh`] }}
            translate="yes"
            transition={{ ease: easing, duration: duration }}
        />
    );
};

export default Circle;
