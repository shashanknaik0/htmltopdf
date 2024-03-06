import addDetails from './componants/addDetails/addDetails.js';
import createPdf from './componants/createPdf/createPdf.js';

var details = {
  participant:{
    patientName: 'Anchor Ebanks',
    participantName: 'Anchor mybanks',
    participantEmployer: 'xyz',
    participantID: '9999'
  },
  practitioner:{
    medicalCondition: `Management of high cholesterol (E78.00)`,
    treatment:`It is medically necessary that the patient consumes products such as CARNIVORE BAR, 1-BAR SAMPLE from Carnivore Bar Inc. as supplemental nutrition. The recommended dosage is one bar per day. Continued daily use is recommended for a duration of 12 months to manage high cholesterol.`,
    clinicalRationale: ` High cholesterol levels are often associated with imbalances in lipid metabolism and inflammation. The CARNIVORE BAR provides a source of high-quality protein and healthy fats, such as omega-3 fatty acids, that help modulate cholesterol levels and reduce inflammation. The bar's grass-finished beef contains nutrients like niacin and omega-6 to omega-3 fatty acid ratios that support healthy cholesterol profiles. By providing these necessary nutrients, the CARNIVORE BAR may contribute to the management of high cholesterol.`,
    startDate: 'February 13, 2024',
    endDate: 'February 13, 2025'
  },
  signature:{
    name:'Allison Bansen, NP',
    image: 'https://wisestamp.com/wp-content/uploads/2020/08/Oprah-Winfrey-Signature-1.png',
    date: 'February 13, 2024'
  }
}

const htmlContent = addDetails(details)

createPdf(htmlContent)