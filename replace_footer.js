const fs = require('fs');

const searchTarget = `                        <a href="/" className="transition-opacity hover:opacity-80">
                            <Image
                                src="/logo.png"
                                alt={SITE_CONFIG.name}
                                width={180}
                                height={60}
                                className="h-auto w-auto max-h-16 object-contain dark:brightness-0 dark:invert"
                            />
                        </a>`;

const replacement = `                        <div className="flex items-center gap-4">
                            <a href="/" className="transition-opacity hover:opacity-80 shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt={SITE_CONFIG.name}
                                    width={180}
                                    height={60}
                                    className="h-auto w-auto max-h-16 object-contain dark:brightness-0 dark:invert"
                                />
                            </a>
                            <Image
                                src="/redbull.png"
                                alt="Red Bull"
                                width={180}
                                height={60}
                                className="h-auto w-auto max-h-16 object-contain shrink-0"
                            />
                        </div>`;

const files = [
    'services/service-parteneri-clienti/src/components/layout/footer.tsx',
    'services/service-galerie/src/components/layout/footer.tsx',
    'services/service-evenimente/src/components/layout/footer.tsx',
    'services/service-contact/src/components/layout/footer.tsx',
    'services/service-meniu/src/components/layout/footer.tsx',
    'services/service-blog/src/components/layout/footer.tsx',
    'services/service-acasa/components/layout/footer.tsx',
    'services/service-acasa/src/components/layout/footer.tsx',
    'services/service-despre-noi/src/components/layout/footer.tsx'
];

let replacedCount = 0;

for (const file of files) {
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf8');
    if (content.includes(searchTarget)) {
        content = content.replace(searchTarget, replacement);
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
        replacedCount++;
    } else {
        console.log(`Target not found in ${file}`);
    }
}

console.log(`Replaced in ${replacedCount} files.`);
