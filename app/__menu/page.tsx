import React from "react";
import menuFr from "@/data/menu/fr";
import type { MenuData } from "@/types/menu";
import MenuHeader from "@/components/MenuHeader";
import MenuSection from "@/components/MenuSection";

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

export default function MenuPage() {
    const data = menuFr as MenuData;

    return (
        <main>
            <MenuHeader title={data.header.title} />

            {ORDER.map((key) => {
                const group = data.sections[key as string];
                if (!group) return null;
                return <MenuSection key={key as string} group={group} />;
            })}
        </main>
    );
}
