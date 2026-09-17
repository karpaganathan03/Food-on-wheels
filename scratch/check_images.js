const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\kiris\\Desktop\\September - Projects\\Foodtruck';

const h1 = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const h2 = fs.readFileSync(path.join(dir, 'home-2.html'), 'utf8');

function extractImages(content) {
  const imgRegex = /src=["']([^"']+)["']/gi;
  const set = new Set();
  let m;
  while ((m = imgRegex.exec(content)) !== null) {
    if (!m[1].includes('.js')) {
      set.add(m[1].split('?')[0]);
    }
  }
  return set;
}

const h1Images = extractImages(h1);
const h2Images = extractImages(h2);

console.log('Home 1 content images:', Array.from(h1Images));
console.log('Home 2 content images:', Array.from(h2Images));

const duplicates = [];
h1Images.forEach(img => {
  if (h2Images.has(img)) {
    duplicates.push(img);
  }
});

console.log('Duplicate count between Home 1 and Home 2:', duplicates.length);
if (duplicates.length > 0) {
  console.log('Duplicates:', duplicates);
} else {
  console.log('SUCCESS: Zero duplicate images between Home 1 and Home 2!');
}

// Check if local image files exist
h2Images.forEach(img => {
  if (!img.startsWith('http')) {
    const localPath = path.join(dir, img);
    if (!fs.existsSync(localPath)) {
      console.error('Missing local file:', localPath);
    } else {
      console.log('Verified local asset exists:', img, 'size:', fs.statSync(localPath).size);
    }
  }
});
