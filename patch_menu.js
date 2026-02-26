const fs = require('fs');
const path = require('path');

const targetFiles = [
    'services/service-acasa/src/app/emadelmar-menu/emadelmar-menu.tsx',
    'services/service-blog/src/app/emadelmar-menu/emadelmar-menu.tsx',
    'services/service-contact/src/app/emadelmar-menu/emadelmar-menu.tsx',
    'services/service-despre-noi/src/app/emadelmar-menu/emadelmar-menu.tsx',
    'services/service-evenimente/src/app/emadelmar-menu/emadelmar-menu.tsx',
    'services/service-galerie/src/app/emadelmar-menu/emadelmar-menu.tsx',
    'services/service-meniu/src/app/emadelmar-menu/emadelmar-menu.tsx',
    'services/service-parteneri-clienti/src/app/emadelmar-menu/emadelmar-menu.tsx'
];

targetFiles.forEach(relPath => {
    const fullPath = path.join(__dirname, relPath);
    if (!fs.existsSync(fullPath)) {
        console.log(`Skipping (not found): ${fullPath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // Add import for usePathname
    if (!content.includes('import { usePathname } from "next/navigation"')) {
        content = content.replace(
            /import Link from "next\/link"/,
            `import Link from "next/link"\nimport { usePathname } from "next/navigation"`
        );
    }

    // Add pathname hook
    if (!content.includes('const pathname = usePathname()')) {
        content = content.replace(
            /(export function EmadelmarMenu\(\) \{\n\s*const \[isScrolled, setIsScrolled\] = React\.useState\(false\)\n\s*const \[isOpen, setIsOpen\] = React\.useState\(false\))/,
            `$1\n    const pathname = usePathname()`
        );
    }

    // Replace the mapping logic for Desktop Navigation
    const originalDesktopNav = `                    {MENU_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-[13px] font-medium uppercase tracking-[0.15em] transition-colors pb-0.5",
                                isScrolled
                                    ? "text-foreground dark:text-white/90 border-b border-foreground/40 dark:border-white/30 hover:text-primary hover:border-primary"
                                    : "text-white/90 border-b border-white/40 hover:text-white hover:border-white"
                            )}
                        >
                            {item.label}
                        </a>
                    ))}`;

    const newDesktopNav = `                    {MENU_ITEMS.map((item) => {
                        // For Acasă (href === '/'), only exact match. For others, allow partial match like /evenimente
                        const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-[13px] font-medium uppercase tracking-[0.15em] transition-colors pb-0.5 border-b",
                                    isActive
                                        ? isScrolled 
                                            ? "border-primary text-foreground dark:text-white/90" 
                                            : "border-white text-white"
                                        : isScrolled
                                            ? "border-transparent text-foreground dark:text-white/90 hover:text-primary hover:border-primary"
                                            : "border-transparent text-white/90 hover:text-white hover:border-white"
                                )}
                            >
                                {item.label}
                            </a>
                        );
                    })}`;

    if (content.includes(originalDesktopNav)) {
        content = content.replace(originalDesktopNav, newDesktopNav);
    } else {
        // Fallback for slight whitespace differences
        content = content.replace(
            /\{MENU_ITEMS\.map\(\(item\) => \(\s*<a\s*key=\{item\.href\}\s*href=\{item\.href\}\s*className=\{cn\(\s*"text-\[13px\] font-medium uppercase tracking-\[0\.15em\] transition-colors pb-0\.5",\s*isScrolled\s*\?\s*"text-foreground dark:text-white\/90 border-b border-foreground\/40 dark:border-white\/30 hover:text-primary hover:border-primary"\s*:\s*"text-white\/90 border-b border-white\/40 hover:text-white hover:border-white"\s*\)\}\s*>\s*\{item\.label\}\s*<\/a>\s*\)\)/m,
            newDesktopNav
        );
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Patched: ${relPath}`);
});
