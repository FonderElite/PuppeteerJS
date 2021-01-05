//Generate pdf using puppeteer
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://neutronsec.com');
    await page.pdf({path: 'neutronsec.pdf'});
    await browser.close();
})();
