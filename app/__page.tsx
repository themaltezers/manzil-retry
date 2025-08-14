import ReviewsSection from "@/components/ReviewsSection";
import SpecialtiesSection from "@/components/SpecialitiesSection";
import styles from "@/styles/page/home.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className={styles.banner}>
                <h1>Le Manzil Brunch</h1>
                <p>L’authenticité marocaine, le confort marseillais</p>
                <Link href={"/menu"} className="cta">
                    Découvrir le menu
                </Link>
            </div>

            <section className={styles.about}>
                <div className="section__header">
                    <h4 className="section__header__kicker">
                        AU CŒUR DU MANZIL BRUNCH
                    </h4>
                    <h2>Votre Escapade Gourmande aux Couleurs du Maroc</h2>
                </div>
                <p>
                    Le Manzil Brunch est un cocon chaleureux au cœur de
                    Marseille, pensé pour éveiller tous vos sens. Ici,
                    l’atmosphère marocaine se mêle à l’énergie méditerranéenne :
                    coussins moelleux, mosaïques colorées, vaisselle artisanale
                    et parfums délicats se répondent dans un cadre dépaysant.
                </p>
                <p>
                    Né de l’envie de partager la générosité des tables
                    marocaines, chaque détail de notre décor raconte une
                    histoire. Les lumières douces invitent à la détente, la
                    musique vous transporte, et chaque espace a été pensé pour
                    que vous vous sentiez comme à la maison… mais en voyage.
                </p>
                <p>
                    Que ce soit pour un brunch entre amis, un moment en famille
                    ou une pause gourmande en solo, installez-vous, savourez
                    l’instant et laissez le charme opérer.
                </p>
                <div className={styles.about__image}>
                    <Image
                        src="/meilleur-plat.jpg"
                        alt="intérieur du Manzil Brunch"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>
            <SpecialtiesSection />

            <section className={styles.ambiance}>
                <div className="section__header">
                    <h4>L’ÂME DU MANZIL BRUNCH</h4>
                    <h2>Votre Escapade Gourmande aux Couleurs du Maroc</h2>
                </div>
                <p>
                    {" "}
                    Le Manzil Brunch est un cocon chaleureux au cœur de
                    Marseille, pensé pour éveiller tous vos sens. Ici,
                    l’atmosphère marocaine se mêle à l’énergie méditerranéenne :
                    coussins moelleux, mosaïques colorées, vaisselle artisanale
                    et parfums délicats se répondent dans un cadre dépaysant.
                </p>
                <p>
                    Le Manzil Brunch est un cocon chaleureux au cœur de
                    Marseille, pensé pour éveiller tous vos sens. Ici,
                    l’atmosphère marocaine se mêle à l’énergie méditerranéenne :
                    coussins moelleux, mosaïques colorées, vaisselle artisanale
                    et parfums délicats se répondent dans un cadre dépaysant.
                </p>
                <p>
                    Que ce soit pour un brunch entre amis, un moment en famille
                    ou une pause gourmande en solo, installez-vous, savourez
                    l’instant et laissez le charme opérer.
                </p>
                <ul>
                    <li>carousel image</li>
                </ul>
            </section>
            {/* <section className={styles.avis}>
                <div className="section__header">
                    <h4 className="section__header__kicker">ILS ONT AIMÉ</h4>
                    <h2>Vos mots, notre plus belle récompense</h2>
                </div>
                <p>
                    Chaque visite au Manzil Brunch est unique… et vos retours
                    nous vont droit au cœur. Voici quelques mots qui nous
                    motivent à vous offrir le meilleur, jour après jour.
                </p>
                <ul>
                    <li className="avis__card">
                        <p>avis text</p>
                        <div className="">
                            <p>prénom</p>
                            <p>notes</p>
                        </div>
                    </li>
                </ul>
            </section> */}
            <ReviewsSection />
            {/* <section className={styles.infos}>
                <div className="section__header">
                    <h4>INFOS PRATIQUES</h4>
                    <h2>Retrouvez-nous facilement</h2>
                </div>
                <p>
                    Au cœur de Marseille, Le Manzil Brunch vous accueille dans
                    un cadre chaleureux, à deux pas des spots incontournables du
                    centre. Que vous veniez pour un brunch en famille, entre
                    amis ou en solo, on a tout prévu pour que votre visite soit
                    simple et agréable.
                </p>
            </section> */}
        </main>
    );
}
