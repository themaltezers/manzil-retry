"use client";

import styles from "@/styles/components/footer.module.scss";
import { FaSquareInstagram, FaTiktok } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { useMessages, useTranslations } from "next-intl";

type NavItem = { label: string; href: string };
type HoursItem = { day: string; hours: string };

type FooterMessages = {
    brand: { title: string; tagline: string };
    social: { instagram: string; tiktok: string };
    map: { aria: string; title: string };
    info: {
        title: string;
        address: string;
        hoursAria: string;
        hours: HoursItem[];
        contactTitle: string;
        phone: string;
        email: string;
    };
    nav: {
        titlePrimary: string;
        primary: NavItem[];
        titleSecondary: string;
        secondary: NavItem[];
    };
    bottom: {
        copyright: string; // "© {year} ..."
        legal: NavItem[];
        toTopAria: string;
    };
};

export default function Footer() {
    const year = new Date().getFullYear();
    const messages = useMessages() as any;
    const t = useTranslations("Footer");
    const m = (messages?.Footer ?? {}) as FooterMessages;

    return (
        <footer className={styles.footer}>
            <div>
                <h2>{m.brand?.title ?? "Le Manzil Brunch"}</h2>
                <p>{m.brand?.tagline}</p>

                <ul className={styles.socials}>
                    <li>
                        <a
                            href="https://www.instagram.com/manzil.brunch/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label={m.social?.instagram ?? "Instagram"}
                            title={m.social?.instagram ?? "Instagram"}
                        >
                            <FaSquareInstagram />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.tiktok.com/@manzil.brunch"
                            target="_blank"
                            rel="noreferrer"
                            aria-label={m.social?.tiktok ?? "TikTok"}
                            title={m.social?.tiktok ?? "TikTok"}
                        >
                            <FaTiktok />
                        </a>
                    </li>
                </ul>

                <div className={styles.map__container} aria-label={m.map?.aria}>
                    <iframe
                        className={styles.map}
                        title={m.map?.title}
                        src="https://www.google.com/maps?q=48%20Rue%20du%20Lacydon%2013002%20Marseille&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Infos pratiques */}
            <div className={styles.info}>
                <h3>{m.info?.title}</h3>

                <address>
                    <p>{m.info?.address}</p>
                </address>

                <ul className={styles.hours} aria-label={m.info?.hoursAria}>
                    {(m.info?.hours ?? []).map((h, i) => (
                        <li key={`${h.day}-${i}`}>
                            <p>{h.day}</p>
                            <p>{h.hours}</p>
                        </li>
                    ))}
                </ul>

                <ul className={styles.contact}>
                    <h4>{m.info?.contactTitle}</h4>
                    <li>
                        <a href={`tel:${m.info?.phone?.replace(/\s+/g, "")}`}>
                            {m.info?.phone}
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${m.info?.email}`}>{m.info?.email}</a>
                    </li>
                </ul>
            </div>

            {/* Navigation */}
            <nav className={styles.nav}>
                <div className={styles.nav__container}>
                    <h3 className={styles.navTitle}>{m.nav?.titlePrimary}</h3>
                    <ul className={styles.nav__list}>
                        {(m.nav?.primary ?? []).map((l) => (
                            <li key={l.href}>
                                <Link href={l.href}>{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.nav__container}>
                    <h3 className={styles.navTitle}>{m.nav?.titleSecondary}</h3>
                    <ul className={styles.nav__list}>
                        {(m.nav?.secondary ?? []).map((l) => (
                            <li key={l.href}>
                                <Link href={l.href}>{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Bottom bar */}
            <div className={styles.bottom}>
                <p>
                    {t.rich("bottom.copyright", {
                        year: year.toString(),
                    })}
                </p>

                <ul className={styles.legal}>
                    {(m.bottom?.legal ?? []).map((l) => (
                        <li key={l.href}>
                            <Link href={l.href}>{l.label}</Link>
                        </li>
                    ))}
                </ul>

                <button
                    className={styles.toTop}
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    aria-label={m.bottom?.toTopAria}
                >
                    ↑
                </button>
            </div>
        </footer>
    );
}
