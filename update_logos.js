const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    // Replace /images/redbul.png and /redbull.png with /images/Redbull-emadelmar.png
    content = content.replace(/src="\/images\/redbul\.png"/g, 'src="/images/Redbull-emadelmar.png"');
    content = content.replace(/src="\/redbull\.png"/g, 'src="/images/Redbull-emadelmar.png"');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            if (!file.includes('node_modules') && !file.includes('.next')) {
                results = results.concat(walk(file));
            }
        } else { 
            /* Is a file */
            if (file.endsWith('footer.tsx') || file.endsWith('closed-overlay.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./services');
files.forEach(f => replaceInFile(f));
console.log('Finished updating footers and overlays.');
