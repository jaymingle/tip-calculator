console.log("Tip calculator")

let bill = document.querySelector("#billAmount")
let tenPercent = document.querySelector("#tenChoice")
let fifteenPercent = document.querySelector("#fifteenChoice")
let twentyPercent = document.querySelector("#twentyChoice")

let customPercent = document.querySelector("#custom")
let customTip = document.querySelector("#customTipButton")

let numberOfPeople = document.querySelector("#numberOfPeople").value


let radioValue = null



let formSubmit = document.querySelector("#theForm")
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault()

    let totalBill = 0
    let tipAmount = 0
    let billPerPerson = 0

    if(tenPercent.checked) {
        radioValue = 10;

        let billValue = bill.value

        console.log()

        // tipAmount = radioValue / 100 * billValue
        // totalBill = tipAmount + billValue
        // billPerPerson =totalBill/numberOfPeople.value
        //
        // console.log("Total Bill", totalBill)
        // console.log("Tip Amount", tipAmount)
        // console.log("Individual Bill", billPerPerson)
        // console.log("People to Split Bill", numberOfPeople.value)
        //
        // console.log("Tip Amount", typeof(tipAmount))
        // console.log("Total bill", typeof(totalBill))
        // console.log("Bill Per Person", typeof(billPerPerson))
        // // console.log("Tip Amount", typeof(tipAmount))
        //
        //
        // console.log({
        //     people: numberOfPeople.value,
        //     bill_amount: billValue.value,
        //     total_bill: totalBill,
        //     bill_per_person: billPerPerson
        // })
    }else if(fifteenPercent.checked){
        radioValue = 15;

        tipAmount = (billValue / 100) * radioValue
        totalBill = tipAmount + billValue
        billPerPerson = totalBill/numberOfPeople.value

        // console.log("Radio Value: ",radioValue)
        console.log({
            people: numberOfPeople.value,
            bill_amount: billValue,
            total_bill: totalBill,
            bill_per_person: billPerPerson
        })
    }else if(twentyPercent.checked){
        radioValue = 20;

        tipAmount = (billValue / 100) * radioValue
        totalBill = tipAmount + billValue
        billPerPerson = totalBill/numberOfPeople.value

        // console.log("Radio Value: ",radioValue)
        console.log({
            people: numberOfPeople.value,
            bill_amount: billValue,
            total_bill: totalBill,
            bill_per_person: billPerPerson
        })
    }

})