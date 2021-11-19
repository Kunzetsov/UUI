import { MutableRefObject, useRef, useState, useEffect } from "react";

interface UseTableShadowsProps {
    root: Element;
}

interface UseTableShadowsApi {
    vertical: boolean;
    horizontal: boolean;
    horizontalRef: MutableRefObject<HTMLDivElement>;
    verticalRef: MutableRefObject<HTMLDivElement>;
};

export function useTableShadows({ root }: UseTableShadowsProps): UseTableShadowsApi {
    const verticalObserver = useRef<IntersectionObserver>();
    const horizontalObserver = useRef<IntersectionObserver>();
    const verticalRef = useRef<HTMLDivElement>();
    const horizontalRef = useRef<HTMLDivElement>();
    const [vertical, setVertical] = useState({ previousY: 0, active: false });
    const [horizontal, setHorizontal] = useState({ previousX: 0, active: false });

    useEffect(() => {
        if (!verticalRef.current) return;

        verticalObserver.current = new IntersectionObserver(([{ isIntersecting, boundingClientRect }]) => {
            setVertical({
                previousY: boundingClientRect.y,
                active: !isIntersecting && boundingClientRect.y >= vertical.previousY
            });
        }, { root });

        verticalObserver.current.observe(verticalRef.current);
        return () => verticalRef.current && verticalObserver.current.unobserve(verticalRef.current);
    }, [verticalRef.current, vertical.previousY, vertical.active, root]);

    useEffect(() => {
        if (!horizontalRef.current) return;

        horizontalObserver.current = new IntersectionObserver(([{ isIntersecting, boundingClientRect }]) => {
            setHorizontal({
                previousX: boundingClientRect.x,
                active: !isIntersecting && boundingClientRect.x >= horizontal.previousX
            });
        }, { root, threshold: [0.99, 1] });

        horizontalObserver.current.observe(horizontalRef.current);
        return () => horizontalRef.current && horizontalObserver.current.unobserve(horizontalRef.current);
    }, [horizontalRef.current, horizontal.previousX, horizontal.active, root]);

    return {
        vertical: vertical.active,
        horizontal: horizontal.active,
        horizontalRef,
        verticalRef
    };
};