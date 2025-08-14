// components/ReviewsSection.tsx
"use client";

import Carousel from "@/components/Carousel";
import { useMessages } from "next-intl";

// --- Types ---
type ReviewItem = {
    rating: number;
    reviewContent: string;
    reviewerName: string;
};

// --- Fallback si pas d'avis dans les messages ---
const defaultReviews: ReviewItem[] = [
    {
        rating: 5,
        reviewContent:
            "Super découverte sur Marseille ! Un brunch très copieux avec un excellent rapport qualité prix, des produits frais et des jus qui vont vous raffiner. Vraiment le petit déjeuner est très très bon, le personnel est très gentil. Le seul petit bémol c’est l’attente Mais qui vaut vraiment le coup. Voulez vous évader allez y les yeux fermés.",
        reviewerName: "R B",
    },
    {
        rating: 5,
        reviewContent:
            "J’ai déjeuné au Manzil à Marseille et j’ai passé un moment absolument parfait ! L’accueil était chaleureux, le service attentionné, et surtout… la cuisine est délicieuse. On sent que tout est fait maison, avec des produits frais et beaucoup de générosité.❤️",
        reviewerName: "Sofia",
    },
    {
        rating: 4,
        reviewContent:
            "Brunch délicieux, les saveurs sont au rendez-vous. Les plats sont servis en bonne quantité. Nous recommandons, l’ambiance est chaleureuse",
        reviewerName: "Romane",
    },
    {
        rating: 5,
        reviewContent:
            "Alors par où commencer… Brunch qualitatif et quantitatif, service au top, brunch de qualité avec des produits frais ! Serveuse au top à l’écoute et super sympa ! Merci on reviendra sans hésiter !!",
        reviewerName: "Ambrine",
    },
    {
        rating: 5,
        reviewContent:
            "✨ Une merveilleuse découverte ! ✨ J’ai testé un brunch marocain à Marseille pour la première fois, et c’était un véritable délice ! Chaque plat était savoureux, bien présenté, et les saveurs m’ont totalement fait voyager! Le service a été rapide, attentionné et souriant, ce qui a rendu l’expérience encore plus agréable ! Une adresse que je recommande les yeux fermés pour un moment gourmand et chaleureux. J’y reviendrai sans hésiter !",
        reviewerName: "Mégane",
    },
    {
        rating: 4,
        reviewContent:
            "De passage à Marseille. Très bonne découverte. Les plats sont excellents ni trop gras ni trop sucrée. Petit clin d’œil au msemen salé au poulet cheddar et au service sympathique",
        reviewerName: "Alvine",
    },
    {
        rating: 5,
        reviewContent:
            "Ambiance conviviale, cuisine excellente et accueil parfait ! Une adresse à ne pas manquer si vous venez sur Marseille !",
        reviewerName: "Mailis",
    },
    {
        rating: 4,
        reviewContent:
            "Parking vieux port, sortie lacydon et nous voilà devant! Petit brunch en famille bien bon et bien sympathique. Ce jour là, peu d attente donc nous étions ravis",
        reviewerName: "Cédric",
    },
    {
        rating: 5,
        reviewContent:
            "Un brunch marocain tout simplement excellent ! Des saveurs authentiques, des produits frais et un large choix de spécialités généreusement servies. L’ambiance est chaleureuse et l’accueil parfait. Un vrai moment de plaisir, je recommande sans hésiter !",
        reviewerName: "Meriem",
    },
];

function Stars({ rating }: { rating: number }) {
    return (
        <div className="stars" aria-label={`${rating} / 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? "star filled" : "star"}>
                    ★
                </span>
            ))}
        </div>
    );
}

export default function ReviewsSection() {
    const messages = useMessages() as any;

    // Récupère "HomePage.reviews" du JSON de langue
    const m = messages?.HomePage?.reviews as {
        kicker?: string;
        title?: string;
        intro?: string;
        items?: ReviewItem[];
    };

    // Avis localisés si fournis, sinon fallback
    const items: ReviewItem[] =
        m?.items && Array.isArray(m.items) && m.items.length > 0
            ? m.items
            : defaultReviews;

    // Kicker / Titre / Intro localisés avec fallback FR
    const kicker = m?.kicker ?? "ILS ONT AIMÉ";
    const title = m?.title ?? "Vos mots, notre plus belle récompense";
    const intro = m?.intro ?? "";

    return (
        <section aria-labelledby="reviews-title">
            <div className="section__header">
                <h4 className="section__header__kicker">{kicker}</h4>
                <h2 id="reviews-title">{title}</h2>
            </div>

            {intro && <p className="section__intro">{intro}</p>}

            <Carousel
                slideSize="85%"
                gap={16}
                autoplay
                autoplayDelay={4500}
                withArrows
                withDots={false}
            >
                {items.map((r, i) => (
                    <figure className="card" key={i}>
                        <Stars rating={r.rating} />
                        <p className="content">{r.reviewContent}</p>
                        <figcaption className="author">
                            — {r.reviewerName}
                        </figcaption>
                    </figure>
                ))}
            </Carousel>

            <style jsx>{`
                .kicker {
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    opacity: 0.7;
                    margin-bottom: 0.25rem;
                }
                h2 {
                    margin-bottom: 0.75rem;
                }
                .section__intro {
                    margin: 0 0 1rem;
                    opacity: 0.85;
                }
                .card {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 10px;
                    background: #fff;
                    border-radius: 12px;
                    padding: 14px 16px;
                    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
                    height: 260px;
                }
                .stars {
                    display: flex;
                    gap: 2px;
                    font-size: 1rem;
                    color: #ffd700;
                }
                .star {
                    opacity: 0.3;
                }
                .star.filled {
                    opacity: 1;
                }
                .content {
                    margin: 0;
                    font-size: 0.9375rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 6;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .author {
                    font-weight: 600;
                    opacity: 0.9;
                }
            `}</style>
        </section>
    );
}
