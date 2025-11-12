import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Transition = ({ children }) => {
    const location = useLocation();
    const pageRef = useRef(null);
    const overlayRef = useRef(null);
    const isFirstRender = useRef(true);
    const previousPath = useRef(location.pathname);

    useEffect(() => {
        const page = pageRef.current;
        const overlay = overlayRef.current;

        if (!page || !overlay) return;

        // On first render, just set initial states without animation
        if (isFirstRender.current) {
            gsap.set(page, { opacity: 1, y: 0, scale: 1, visibility: 'visible' });
            gsap.set(overlay, { scaleX: 0, transformOrigin: 'left center', zIndex: 9999 });
            isFirstRender.current = false;
            previousPath.current = location.pathname;
            return;
        }

        // Only animate if path actually changed
        if (previousPath.current === location.pathname) return;
        previousPath.current = location.pathname;

        // Create timeline for page transition
        const tl = gsap.timeline();

        // Page transition animation sequence
        tl.to(page, {
            opacity: 0,
            y: -30,
            scale: 0.95,
            duration: 0.4,
            ease: 'power3.in'
        })
            .to(overlay, {
                scaleX: 1,
                duration: 0.8,
                ease: 'power3.inOut'
            }, '-=0.2')
            .set(page, {
                visibility: 'visible',
                y: 30,
                scale: 0.95
            }) // Reset position for new page
            .to(page, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.4')
            .to(overlay, {
                scaleX: 0,
                duration: 0.8,
                ease: 'power3.inOut',
                transformOrigin: 'right center'
            }, '-=0.6');

        return () => {
            tl.kill();
        };
    }, [location.pathname]);

    return (
        <>
            {/* Transition overlay with gradient */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[9999] pointer-events-none"
                style={{
                    willChange: 'transform',
                    background: '#222222'
                }}
            />

            {/* Page content */}
            <div
                ref={pageRef}
                className="transition-page"
                style={{ willChange: 'opacity, transform' }}
            >
                {children}
            </div>
        </>
    );
};

export default Transition;