// Renders template.html (or any same-structure guide) to a client-ready PDF.
// Usage: node render-pdf.js [input.html] [output.pdf]
const { chromium } = require('playwright-core');
const path = require('path');

const input = process.argv[2] || 'template.html';
const output = process.argv[3] || 'ME-CFS-Guide.pdf';

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  const filePath = path.resolve(process.cwd(), input);
  await page.goto('file://' + filePath, { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.resolve(process.cwd(), output),
    format: 'A4',
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });
  await browser.close();
  console.log('PDF generated: ' + output);
})();
