import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

export default function TiltedCard({
    imageSrc,
    altText = 'Tilted card image',
    captionText = '',
    containerHeight = { base: 'auto', sm: '270px', md: '310px', lg: '350px' },
    containerWidth = { base: '100%', sm: '340px', md: '370px', lg: '400px' },
    imageHeight = { base: '220px', sm: '240px', md: '270px', lg: '300px' },
    imageWidth = { base: '220px', sm: '240px', md: '270px', lg: '300px' },
    scaleOnHover = 1.07,
    rotateAmplitude = 13,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false
}) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 250,
        damping: 20,
        mass: 1
    });
    const [lastY, setLastY] = useState(0);
    // Responsive value helper
    function getResponsive(value) {
        if (typeof value === 'object') {
            // Custom order: base < sm < md < lg; use window width if available
            const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
            if (w >= 1024 && value.lg) return value.lg;
            if (w >= 768 && value.md) return value.md;
            if (w >= 640 && value.sm) return value.sm;
            return value.base || value.sm || value.md || value.lg || 'auto';
        }
        return value;
    }
    // Mobile detection
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    function handleMouse(e) {
        if (isMobile) return;
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
        rotateX.set(rotationX);
        rotateY.set(rotationY);
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }
    function handleMouseEnter() {
        if (isMobile) return;
        scale.set(scaleOnHover);
        opacity.set(1);
    }
    function handleMouseLeave() {
        if (isMobile) return;
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }
    // Responsive style objects
    const containerStyle = {
        height: getResponsive(containerHeight),
        width: getResponsive(containerWidth)
    };
    const imgStyle = {
        width: getResponsive(imageWidth),
        height: getResponsive(imageHeight)
    };
    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center sm:w-[340px] sm:h-[270px] md:w-[370px] md:h-[310px] lg:w-[400px] lg:h-[350px]"
            style={containerStyle}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && isMobile && (
                <div className="absolute top-4 left-0 right-0 mx-auto text-center text-xs sm:text-sm block">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="relative [transform-style:preserve-3d] w-full h-full"
                style={{
                    width: imgStyle.width,
                    height: imgStyle.height,
                    rotateX,
                    rotateY,
                    scale
                }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)] w-full h-full"
                    style={imgStyle}
                />
                {displayOverlayContent && overlayContent && (
                    <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)] bg-light px-[10px] py-[4px] text-[10px] rounded-full border border-dark max-w-full overflow-auto whitespace-nowrap">
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>
            {showTooltip && !isMobile && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-light px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
