import puppeteer from 'puppeteer';

const createPdf = async (htmlContent) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const outputFilePath = 'output.pdf';

        await page.setContent(htmlContent);

        await page.pdf({ path: outputFilePath, format: 'A4', printBackground:true });

        await browser.close();
}

export default createPdf;