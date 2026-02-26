const fs = require('fs');

const searchTarget = `                                <Image
                                    src="/redbull.png"`;

const replacement = `                                <Image
                                    src="/images/redbul.png"`;

const files = [
    'services/service-parteneri-clienti/src/components/ui/closed-overlay.tsx',
    'services/service-galerie/src/components/ui/closed-overlay.tsx',
    'services/service-evenimente/src/components/ui/closed-overlay.tsx',
    'services/service-contact/src/components/ui/closed-overlay.tsx',
    'services/service-meniu/src/components/ui/closed-overlay.tsx',
    'services/service-blog/src/components/ui/closed-overlay.tsx',
    'services/service-acasa/components/ui/closed-overlay.tsx',
    'services/service-acasa/src/components/ui/closed-overlay.tsx',
    'services/service-despre-noi/src/components/ui/closed-overlay.tsx'
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
