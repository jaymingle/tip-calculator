console.log("Tip calculator")

let bill = document.querySelector("#billAmount")
let tenPercent = document.querySelector("#tenChoice")
let fifteenPercent = document.querySelector("#fifteenChoice")
let twentyPercent = document.querySelector("#twentyChoice")

let customPercent = document.querySelector("#custom")
let customTip = document.querySelector("#customTipButton")

let numberOfPeople = document.querySelector("#numberOfPeople")


let radioValue = null



let formSubmit = document.querySelector("#theForm")
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault()

    let totalBill = 0
    let tipAmount = 0
    let billPerPerson = 0

    console.log("Out Bill", totalBill)

    if(tenPercent.checked) {
        radioValue = 10;

        let billValue = bill.value
        let people= Number(numberOfPeople.value)

        console.log(billValue, people)

        tipAmount = 10 / 100 * billValue
        totalBill = Number(tipAmount) + Number(billValue)
        billPerPerson = Number(totalBill) / people
        console.log(tipAmount )
        console.log(totalBill)
        console.log(billPerPerson)

        console.log("Total Bill", totalBill)
        console.log("Tip Amount", tipAmount)
        console.log("Individual Bill", billPerPerson)
        console.log("People to Split Bill", people)

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

    console.log("After Bill", totalBill)


})