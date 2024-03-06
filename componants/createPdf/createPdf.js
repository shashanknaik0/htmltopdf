import pdf from 'html-pdf';

const createPdf = (htmlContent) => {
    const pdfOptions = {
        format: 'A4',
        base: '/',
        version: '1.5'
    };

    const outputFilePath = 'output.pdf'

    pdf.create(htmlContent, pdfOptions)
        .toFile(outputFilePath, (err, res) => {
            if (err) return console.error('Error generating PDF:', err);
            console.log('PDF generated successfully:', res);
        });
}

export default createPdf;