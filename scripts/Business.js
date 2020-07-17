export constant businessHTML = (businessObj) => {
    return `
        <div class="business__name">${businessObj.companyName}</div>
        <div class="business_streetAddress">${businessObj.addressFullStreet}</div>
        <div class="business_cityStateZIP">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
    `
}