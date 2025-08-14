// app/[locale]/page.tsx
import ReviewsSection from "@/components/ReviewsSection";
import SpecialtiesSection from "@/components/SpecialitiesSection";
import styles from "@/styles/page/home.module.scss";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getMessages } from "next-intl/server";
import type { HomePageMessages } from "@/types/home";

export default async function Home() {
    const messages = await getMessages();
    const m = (messages as any).HomePage as HomePageMessages;

    return (
        <main>
            <div className={styles.banner}>
                <h1>{m.banner.title}</h1>
                <p>{m.banner.subtitle}</p>
                <Link href="/menu" className="cta">
                    {m.banner.cta}
                </Link>
            </div>

            <section className={styles.about}>
                <div className="section__header">
                    <h4 className="section__header__kicker">
                        {m.about.kicker}
                    </h4>
                    <h2>{m.about.title}</h2>
                </div>

                {m.about.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}

                <div className={styles.about__image}>
                    <Image
                        src="/meilleur-plat.jpg"
                        alt={m.about.imageAlt}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </section>

            <SpecialtiesSection />

            <section className={styles.ambiance}>
                <div className="section__header">
                    <h4>{m.ambiance.kicker}</h4>
                    <h2>{m.ambiance.title}</h2>
                </div>

                {m.ambiance.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}

                <ul>
                    <li>{m.ambiance.carouselPlaceholder}</li>
                </ul>
            </section>

            {/* Si tu veux localiser ces sections, lis m.reviews/m.infos ici et
          passe les props traduites à tes composants. */}
            <ReviewsSection />
        </main>
    );
}
