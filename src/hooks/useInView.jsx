import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1, ...options }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        let doo = ref.current;

        return () => {
            if (doo) {
                observer.unobserve(doo);
            }
        };
    }, [ref, options]);

    return [ref, isInView];
}
