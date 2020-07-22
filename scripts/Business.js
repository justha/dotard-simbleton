export const businessHTML = (businessObj) => {
    return 
    `
        <div class="business__name">${businessObj.companyName}</div>
        <div class="business__address">${businessObj.addressFullStreet} <br>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}/div>
    `
}