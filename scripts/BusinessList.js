import {useBusinesses} from "./businessProvider.js"
import {businessHTML} from "./business.js"


//forEach METHOD----------------------------------------------
const contentTarget = document.querySelector(".content")

export const businessList = () => {
    const businessesArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessesArray.forEach(
        (businessObj) => {
            contentTarget.innerHTML += businessHTML(businessObj)
        }
    );
}


//LONG-HAND METHOD----------------------------------------------

// export const businessList = () => {
    
//     const businessArray = useBusinesses()

//     let htmlRepresentations = ""
//     for (const business of businessArray) {
//         htmlRepresentations += businessHTML(business)
//     }


//     const contentTarget = document.querySelector(".content")

//     contentTarget.innerHTML  += `
//         <h1>Active Businesses</h1>
//         ${htmlRepresentations}
//     `
// }