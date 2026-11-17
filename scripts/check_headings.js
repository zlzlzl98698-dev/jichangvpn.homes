import fs from 'fs';

const html = fs.readFileSync('docs/.vitepress/dist/airport/index.html', 'utf8');
const regex = /<h([234])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h\1>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  const level = match[1];
  const id = match[2];
  const text = match[3].replace(/<[^>]+>/g, '').trim();
  console.log(`h${level} | #${id} | ${text}`);
}
