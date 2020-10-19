const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('*', (req, res) => {
    console.log(req.url);
    console.log(JSON.stringify(req.body));
    console.log(req.headers);

    if(req.body.ProcessName=="GOL Get Miles Extension WF")
        siebelResponse = { "MinMilesExtension": "100", "ErrorMsg": "Success", "ExtensibleMiles": "1264", "ErrorCode": "00", "ExtensionDays": "30", "MilesExtensionOptions": { "IntObjectFormat": "Siebel Hierarchical", "MessageId": "1-2GNSHDL", "IntObjectName": "GOL Miles Extension IO", "MessageType": "Integration Object", "GOLMilesExtension": [ { "MilesPrice": "1200", "ProgramName": "Programa Smiles", "StartDate": "08/13/2020", "InstallmentQty": "3", "EndDate": "08/29/2020", "Id": "1-1MUT29NK", "Bonus": "", "BonusClubDiamond": "", "PartnerName": "GOL MILHAS GERAIS", "ExtensionDays": "30", "Discount": "0.89", "MinimumMilesAmount": "" }, { "MilesPrice": "3000", "ProgramName": "Programa Smiles", "StartDate": "08/18/2020", "InstallmentQty": "6", "EndDate": "09/22/2020", "Id": "1-1MUVSTJ1", "Bonus": "", "BonusClubDiamond": "", "PartnerName": "GOL MILHAS GERAIS", "ExtensionDays": "60", "Discount": "1.99", "MinimumMilesAmount": "" }, { "MilesPrice": "5000", "ProgramName": "Programa Smiles", "StartDate": "08/19/2020", "InstallmentQty": "9", "EndDate": "08/29/2020", "Id": "1-1MUVSTJ3", "Bonus": "15", "BonusClubDiamond": "12", "PartnerName": "BANCO SANTANDER S.A.", "ExtensionDays": "90", "Discount": "1.7", "MinimumMilesAmount": "" } ] }, "AccrualItensList": { "IntObjectFormat": "Siebel Hierarchical", "MessageId": "1-2GNSHDK", "IntObjectName": "GOL LOY Accrual Item Miles Extension IO", "MessageType": "Integration Object", "GOLLOYMemberInterface": { "MemberNumber": "000103025", "Point2Value": "642612", "PrimaryTierId": "1-1WT47", "Id": "1-2TK-324", "PrimaryOrganizationId": "1-1WSYY", "Status": "Active", "ProgramId": "1-1W24X", "GOLPrimaryTierName": "Diamante", "Point1Value": "2096700", "GOLLOYAccrualItemMilesExtension": [ { "UsedValue": "368", "PointType": "Milhas", "AccrualedValue": "632", "TransactionSubType": "Cancellation", "MemberId": "1-2TK-324", "TransactionId": "1-RA8ZOJ1", "ItemNumber": "1-59392886525", "ExpirationDate": "09/15/2020 00:00:00", "ProcessDate": "01/22/2017 20:54:08", "TransactionType": "Accrual", "PointsRemaining": "264" }, { "UsedValue": "0", "PointType": "Milhas", "AccrualedValue": "1000", "TransactionSubType": "Product", "MemberId": "1-2TK-324", "TransactionId": "1-1MUXGERT", "ItemNumber": "1-128123553890", "ExpirationDate": "09/25/2020 10:23:58", "ProcessDate": "08/26/2020 10:23:58", "TransactionType": "Accrual", "PointsRemaining": "1000" } ] } } }
    else 
        siebelResponse = {
            "ErrorMsg": "Success",
            "ErrorCode": "0",
            "AccrualTransactionId": "1-ACC873H",
            "RedemptionTransactionId": "1-RED987H",
        }

    res.send(siebelResponse);
});

app.listen(8888, () => console.log(`Started server at http://localhost:8888!`));