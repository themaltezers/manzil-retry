// app/[locale]/menu/page.tsx
import type { MenuData } from "@/types/menu";
import MenuHeader from "@/components/MenuHeader";
import MenuSection from "@/components/MenuSection";
import { getMessages, getTranslations } from "next-intl/server";

const ORDER: (keyof MenuData["sections"])[] = [
    "setMenus",
    "saltyDishes",
    "sweetDishes",
    "asAsked",
    "hotDrinks",
    "coldDrinks",
    "sodas",
    "iceAndLatte",
];

export default async function MenuPage() {
    // 1) strings si besoin (ici pour le header, mais on peut aussi le lire depuis data)
    const t = await getTranslations("Menu");

    // 2) on récup l’ensemble des messages et on extrait l’objet "Menu"
    const messages = await getMessages();
    const data = (messages as any).Menu as MenuData; // <- ton JSON complet

    if (!data?.sections) return null;

    return (
        <main>
            <MenuHeader title={t("header.title")} />
            {ORDER.map((key) => {
                const group = data.sections[key];
                if (!group) return null;
                return <MenuSection key={key} group={group} />;
            })}
        </main>
    );
}
