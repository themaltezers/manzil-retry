import React from "react";
import styles from "@/styles/page/menu.module.scss";
import type { MenuGroup, MenuItem } from "@/types/menu";
import Image from "next/image";

function MenuItemRow({ item }: { item: MenuItem }) {
    return (
        <li className={styles.menu__item}>
            <div className={styles.menu__item__header}>
                <p>
                    {item.name}{" "}
                    {item.favorite && (
                        <Image
                            src={"/icons/coeur-menu.svg"}
                            height={24}
                            width={24}
                            alt="coeur favori"
                        />
                    )}
                </p>
                {item.price ? <p>{item.price}</p> : <span />}
            </div>

            {item.description && (
                <p className={styles.menu__item__description}>
                    {item.description}
                </p>
            )}

            {item.lines && item.lines.length > 0 && (
                <ul className={styles.menu__item__description}>
                    {item.lines.map((line, i) => (
                        <li key={i}>{line}</li>
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function MenuSection({ group }: { group: MenuGroup }) {
    return (
        <ul className={styles.menu}>
            <h2 className={styles.menu__title}>{group.title}</h2>
            {group.menus.map((item, i) => (
                <MenuItemRow key={`${item.name}-${i}`} item={item} />
            ))}
        </ul>
    );
}
