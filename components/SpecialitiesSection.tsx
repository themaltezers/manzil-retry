"use client";
import Image from "next/image";
import Carousel from "@/components/Carousel";

const items = [
    {
        title: "M’semen au Miel",
        desc: "Galettes feuilletées tièdes au miel.",
        img: "/images/msamen.jpg",
    },
    {
        title: "Baghrirs",
        desc: "Crêpes mille-trous légères.",
        img: "/images/baghrir.jpg",
    },
    {
        title: "Tiramisu à l’Amlou",
        desc: "Revisite onctueuse à l’amlou.",
        img: "/images/tiramisu-amlou.jpg",
    },
    {
        title: "Thé à la Menthe",
        desc: "Préparé minute, tradition marocaine.",
        img: "/images/the-menthe.jpg",
    },
];

export default function SpecialtiesSection() {
    return (
        <section>
            <div className="section__header">
                <h4 className="section__header__kicker">
                    LES INCONTOURNABLES DU MANZIL
                </h4>
                <h2>Nos Spécialités Maison</h2>
            </div>

            <Carousel
                autoplay
                autoplayDelay={4000}
                withArrows={false}
                withDots
                slideSize="85%"
                gap={16}
            >
                {items.map((it) => (
                    <article key={it.title} className="card">
                        <div className="media">
                            <Image
                                src={it.img}
                                alt={it.title}
                                fill
                                sizes="(min-width:900px) 25vw, 90vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h3>{it.title}</h3>
                        <p>{it.desc}</p>
                    </article>
                ))}
            </Carousel>

            <button>Voir tout le menu</button>

            <style jsx>{`
                .card {
                    background: #fff;
                    border-radius: 12px;
                    padding: 12px;
                    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
                }
                .media {
                    position: relative;
                    width: 100%;
                    height: 220px;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 10px;
                }
            `}</style>
        </section>
    );
}
