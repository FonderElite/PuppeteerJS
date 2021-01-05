//fetch url
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch;
    const page = await browser.newPage();
    await page.goto('https://github.com');
    const title = await page.title();
    console.info(`"Title:" ${title}`);
    await browser.close();
})
