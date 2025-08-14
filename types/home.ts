export type HomePageMessages = {
    banner: { title: string; subtitle: string; cta: string };
    about: {
        kicker: string;
        title: string;
        paragraphs: string[];
        imageAlt: string;
    };
    ambiance: {
        kicker: string;
        title: string;
        paragraphs: string[];
        carouselPlaceholder?: string;
    };
    reviews?: { kicker: string; title: string; intro: string };
    infos?: { kicker: string; title: string; intro: string };
};
