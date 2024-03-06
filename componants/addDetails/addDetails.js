const addDetails = (details) => {
    const cssStyle = `
body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
}

#pdf {
    margin: auto;
    width: 100%;
    padding: 25px;
    height: 1120px;
    box-sizing: border-box;
    background-color: #ffffff;
    font-family: sans-serif;
    font-size: 12px;
    position: relative;
    line-height: 1.3em;
    box-sizing: border-box;
}

.head{
    margin: 20px 0;
    margin-bottom: 35px;
    font-size: 18px;
}
sup{
    font-size: 15px;
}

#logo{
    font-size: 24px;
}

.upper-content{
    margin: 25px 0;
}

.table td,
.table th {
    border: 1px solid #000000;
    padding: 5px;
}

.table th {
    padding: 5px;
    text-align: left;
    background-color: #000000;
    color: white;
}

table {
    border-collapse: collapse;
    width: 100%;
}

.table div{
    margin-top: 15px;
}

.table, .clarify, .sign{
    margin: 25px 0;
}

.sign td {
    padding-top: 10px;
    text-align: left;
}
.sign th{
    text-align: left;
    font-weight: bolder;
}
.sign{
    padding: 5px;
    border: 2px solid #000000;
    box-sizing: border-box;
}

.sign img{
    height: 70px;
}

.note{
    margin-top: 40px;
}

b{
    font-weight: bolder;
}

@media only screen and (max-width: 810px) {
    #pdf{
        width: 100%;
        height: auto;
    }
  }
`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LMN - Carnivore Bar - High Cholesterol</title>
</head>
<style>
${cssStyle}
</style>
<body>
    <div id="pdf">
        <div class="head">
            <div id="logo" style="display: inline-block;">
                <span>Health<b>Equity</b><sup>&#169</sup></span>
                <span>|</span>
                <span>WageWorks</span>
            </div>
            <div style="float: right;margin-top: 10px;">
                <span><b>Letter of Medical Necessity</b></span>
            </div>
        </div>
        <hr>
        <div class="upper-content">
            Your medical care provider must complete a Letter of Medical Necessity for any service or product that falls
            under the category of
            "Maybe Expense" or "Ineligible Expense" per IRC sec 213 (d) (1) if your provider believes the service or
            purchase is medically necessary
            for you or your eligible dependent(s). You may obtain a list of eligible and ineligible expenses, as well as
            a Claim Form, at
            <a href="https://www.HealthEquity.com/WageWorks">www.HealthEquity.com/WageWorks</a>.
        </div>
        <div class="table">
            <table id="participant"  style="font-size: 12px;">
                <tr>
                    <th>TO BE FILLED OUT BY PARTICIPANT</th>
                </tr>
                <tr>
                    <td>
                        <b>Patient Name</b><br>
                        <div>${details.participant.patientName}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Participant Name</b><br>
                        <div>${details.participant.participantName}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Participant Employer</b><br>
                        <div>${details.participant.participantEmployer}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Last 4 digits of participant ID or SSN</b><br>
                        <div>${details.participant.participantID}</div>
                    </td>
                </tr>
            </table>
        </div>

        <div class="table">
            <table id="practitioner"  style="font-size: 12px;">
                <tr>
                    <th>TO BE FILLED OUT BY LICENSED PRACTITIONER</th>
                </tr>
                <tr>
                    <td>
                        <b>Medical Condition </b><br>
                        <div>${details.practitioner.medicalCondition}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Describe recommended treatment (frequency and dosage) </b><br>
                        <div>
                            <b>Treatment:</b> ${details.practitioner.treatment}
                        </div>
                        <div>
                            <b>Clinical Rationale:</b> ${details.practitioner.clinicalRationale}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Duration of the treatment </b>
                        <div>${details.practitioner.startDate} to ${details.practitioner.endDate}</div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="clarify">
            I certify that this service or product is medically necessary to treat the specific medical condition
            described above and is not in any way for
            general health or for cosmetic purposes.
        </div>
        <div class="sign">
            <table style="font-size: 12px;">
                <tr>
                    <th>Print Name of Licensed Practitioner </th>
                    <th>Signature of Licensed Practitioner</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>${details.signature.name}</td>
                    <td><img src="${details.signature.image}" alt="signature"></td>
                    <td>${details.signature.date}</td>
                </tr>
            </table>
        </div>

        <div class="note">
            NOTE: In order for the expense referred to on this Letter of Medical Necessity to be reimbursed, you must
            attach the detailed receipt or
            Explanation of Benefits from your Medical Insurance Provider and complete a Claim Form (certain expenses may
            require additional
            documentation). Documentation must include the date of service, the services rendered or product purchased
            and the person for whom the
            services were rendered and the amount charged. These documents are required with each claim filed.
        </div>
    </div>
</body>

</html>
`
    return htmlContent

}

export default addDetails;