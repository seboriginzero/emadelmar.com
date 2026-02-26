const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file === 'node_modules' || file === '.next' || file === '.git' || file === '.gemini') continue;
            replaceInDir(fullPath);
        } else if (file.match(/\.(tsx|ts|js|jsx|json|md|sh)$/)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('originzero.art')) {
                content = content.replace(/originzero\.com/g, 'originzero.art');
                fs.writeFileSync(fullPath, content);
                console.log('Updated:', fullPath);
            }
        }
    }
}

replaceInDir('./services');
replaceInDir('./gateway-acasa');
replaceInDir('./shared');
replaceInDir('./');

console.log('Domain replacement finished.');
