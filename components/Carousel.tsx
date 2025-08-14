"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "@/styles/components/carousel.module.scss";

type CarouselProps = {
    children: React.ReactNode[] | React.ReactNode;
    /** largeur d’un slide en mobile (ex: "85%") */
    slideSize?: string;
    /** espace entre slides (px) */
    gap?: number;
    /** options Embla (align, loop…) */
    options?: EmblaOptionsType;
    /** autoplay activé + délai ms */
    autoplay?: boolean;
    autoplayDelay?: number;
    /** UI */
    withArrows?: boolean;
    withDots?: boolean;
    className?: string;
};

export default function Carousel({
    children,
    slideSize = "85%",
    gap = 16,
    options = { loop: true, align: "start" },
    autoplay = false,
    autoplayDelay = 3500,
    withArrows = true,
    withDots = true,
    className,
}: CarouselProps) {
    const plugins = autoplay
        ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: true })]
        : [];
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const scrollTo = (index: number) => emblaApi?.scrollTo(index);
    const prev = () => emblaApi?.scrollPrev();
    const next = () => emblaApi?.scrollNext();

    return (
        <div
            className={[styles.embla, className].filter(Boolean).join(" ")}
            style={{
                ["--slide-size" as any]: slideSize,
                ["--gap" as any]: `${gap}px`,
            }}
        >
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {React.Children.map(children, (child, i) => (
                        <div className={styles.slide} key={i}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {withArrows && (
                <div className={styles.arrows}>
                    <button
                        className={styles.arrow}
                        aria-label="Précédent"
                        onClick={prev}
                    >
                        ‹
                    </button>
                    <button
                        className={styles.arrow}
                        aria-label="Suivant"
                        onClick={next}
                    >
                        ›
                    </button>
                </div>
            )}

            {withDots && (
                <div
                    className={styles.dots}
                    role="tablist"
                    aria-label="Carrousel pagination"
                >
                    {scrollSnaps.map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={selectedIndex === i}
                            aria-label={`Aller au slide ${i + 1}`}
                            className={`${styles.dot} ${
                                selectedIndex === i ? styles.dotActive : ""
                            }`}
                            onClick={() => scrollTo(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
