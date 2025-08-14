export type MenuItem = {
    name: string;
    price?: string;
    description?: string;
    lines?: string[];
    favorite?: boolean; // ✅ optionnel
};

export type MenuGroup = {
    title: string;
    menus: MenuItem[];
};

export type MenuData = {
    header: { title: string };
    sections: Record<string, MenuGroup>;
};
