import { DrinkSection, MenuCategory, MenuItem } from "./menu-data";

export function formatNestedMenu(sections: (DrinkSection | MenuItem)[] | undefined) {
    if (!sections || sections.length === 0) return { categories: [], flatData: {} };

    // Check if it's already flat (though it shouldn't be for drinks/wines)
    if (!('section' in sections[0])) {
        return { categories: [], flatData: {} };
    }

    const drinkSections = sections as DrinkSection[];

    const categories: MenuCategory[] = drinkSections.map(group => ({
        id: group.section.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        label: group.section,
        title: group.section,
        image: group.image
    }));

    const flatData: Record<string, MenuItem[]> = {};
    drinkSections.forEach(group => {
        flatData[group.section.toLowerCase().replace(/[^a-z0-9]+/g, '-')] = group.items;
    });

    return { categories, flatData };
}
