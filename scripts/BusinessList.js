import {useBusinesses} from "./businessProvider.js"
import {businessHTML} from "./business.js"


export const businessList = () => {
    
    const businessArray = useBusinesses()

    let htmlRepresentations = ""
    for (const business of businessArray) {
        htmlRepresentations += businessHTML(business)
    }


    const contentTarget = document.querySelector(".content")

    contentTarget.innerHTML  += `
    <section class="card">
        <div class="title">Active Businesses</div>
        ${htmlRepresentations}
    </section>
    `
}


