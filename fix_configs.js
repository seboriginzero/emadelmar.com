const fs = require('fs');
const path = require('path');
const dirs = fs.readdirSync('services');
for (const dir of dirs) {
    if (dir === 'service-acasa') continue;
    const cfgPath = path.join('services', dir, 'next.config.ts');
    if (fs.existsSync(cfgPath)) {
        let content = fs.readFileSync(cfgPath, 'utf8');
        if (!content.includes('standalone')) {
            content = content.replace('};', "  output: 'standalone',\n};");
            fs.writeFileSync(cfgPath, content);
            console.log('Fixed ', cfgPath);
        }
    }
}
