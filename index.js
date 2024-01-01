console.log("Tip calculator")

// document.querySelector("#theTestButton").onclick = function(e){
//     console.log(billValue.value)
// }

let formSubmit = document.querySelector("#theForm")
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("Submitted")

    let billValue = document.querySelector("#billAmount")
    console.log("Bill Value ",billValue.value)
    let radioValue = null

    let tenPercent = document.querySelector("#tenChoice")
    let fifteenPercent = document.querySelector("#fifteenChoice")
    let twentyPercent = document.querySelector("#twentyChoice")


    let customPercent = document.querySelector("#custom")
    let customTip = document.querySelector("#customTipButton")
    customTip.addEventListener("click",function(e){
        // e.preventDefault()

        alert("Custom Tip")
    })

    let numberOfPeople = document.querySelector("#numberOfPeople")

    let totalBill = null
    let tipAmount = null
    let billPerPerson = null

    if(tenPercent.checked) {
        radioValue = 10;

        tipAmount = (billValue / 100) * radioValue
        totalBill = tipAmount + billValue
        billPerPerson = totalBill/numberOfPeople.value



        console.log({
            people: numberOfPeople.value,
            total_bill: totalBill,
            bill_per_person: billPerPerson
        })
    }else if(fifteenPercent.checked){
        radioValue = 15;

        tipAmount = (billValue / 100) * radioValue
        totalBill = tipAmount + billValue
        billPerPerson = totalBill/numberOfPeople.value

        console.log("Radio Value: ",radioValue)
    }else if(twentyPercent.checked){
        radioValue = 20;

        tipAmount = (billValue / 100) * radioValue
        totalBill = tipAmount + billValue
        billPerPerson = totalBill/numberOfPeople.value

        console.log("Radio Value: ",radioValue)
    }else {

    }

})