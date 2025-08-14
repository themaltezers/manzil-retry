"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "@/styles/components/header.module.scss";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const LOCALES = ["fr", "en", "it", "es"]; // ajoute "ar" si besoin

function useLocalePathSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    const getLocaleFromPath = () => {
        const seg = pathname?.split("/")[1] || "";
        return LOCALES.includes(seg) ? seg : LOCALES[0];
    };

    const switchLocale = (nextLocale: string) => {
        if (!pathname) return;
        const parts = pathname.split("/");
        const hasLocale = LOCALES.includes(parts[1]);

        if (hasLocale) {
            parts[1] = nextLocale;
        } else {
            parts.splice(1, 0, nextLocale);
        }
        const nextPath = parts.join("/") || "/";
        router.push(nextPath);
    };

    return { current: getLocaleFromPath(), switchLocale };
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const { current, switchLocale } = useLocalePathSwitcher();

    // lock scroll quand le menu est ouvert
    useEffect(() => {
        document.documentElement.style.overflow = open ? "hidden" : "";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [open]);

    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                {/* Logo */}
                <Link
                    href="/"
                    className={styles.logo}
                    aria-label="Le Manzil Brunch, accueil"
                >
                    <Image
                        src={"/logo-manzil.svg"}
                        height={50}
                        width={50}
                        alt="logo manzil"
                    />
                </Link>

                {/* Actions droites */}
                <div className={styles.actions}>
                    {/* Sélecteur de langue */}
                    <select
                        className={styles.langSelect}
                        value={current}
                        onChange={(e) => switchLocale(e.target.value)}
                        aria-label="Sélecteur de langue"
                    >
                        <option value="fr">FR</option>
                        <option value="en">EN</option>
                        <option value="it">IT</option>
                        <option value="es">ES</option>
                    </select>

                    {/* Burger */}
                    <button
                        className={styles.burger}
                        onClick={() => setOpen(true)}
                        aria-label="Ouvrir le menu"
                        aria-haspopup="dialog"
                        aria-expanded={open}
                    >
                        <RxHamburgerMenu />
                    </button>
                </div>
            </div>

            {/* Overlay + Drawer */}
            <div
                className={`${styles.overlay} ${
                    open ? styles.overlay__show : ""
                }`}
                onClick={() => setOpen(false)}
            />
            <aside
                className={`${styles.drawer} ${
                    open ? styles.drawer__open : ""
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
            >
                <div className={styles.drawer__head}>
                    <h3 className={styles.drawer__title}>Menu</h3>
                    <button
                        className={styles.close}
                        onClick={() => setOpen(false)}
                        aria-label="Fermer le menu"
                    >
                        ×
                    </button>
                </div>

                <nav className={styles.nav}>
                    <Link href="/" onClick={() => setOpen(false)}>
                        Accueil
                    </Link>
                    <Link href="/menu" onClick={() => setOpen(false)}>
                        Menu
                    </Link>
                    {/* <Link href="/galerie" onClick={() => setOpen(false)}>
                        Galerie
                    </Link>
                    <Link href="/#reservation" onClick={() => setOpen(false)}>
                        Réserver
                    </Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>
                        Contact
                    </Link> */}
                </nav>

                <div className={styles.drawer__footer}>
                    <a
                        href="https://maps.google.com/?q=48+Rue+du+Lacydon+13002+Marseille"
                        target="_blank"
                        rel="noreferrer"
                    >
                        48 rue du Lacydon, 13002 Marseille
                    </a>
                    <a href="tel:+33614295500">+33 6 14 29 55 00</a>
                </div>
            </aside>
        </header>
    );
}
