function calculateForm(){
    // console.log("Calculating")

    const bill = Number(document.querySelector("#billAmount").value)
    const percentageTip = Number(document.querySelector("input[name='tip']:checked").value)
    const people = Number(document.querySelector("#numberOfPeople").value)
    console.log(bill)
    console.log(percentageTip)
    console.log(people)

    const tipValue = Number(percentageTip) / 100 * Number(bill)
    const totalExpenses = bill + tipValue
    const individualExpenses = totalExpenses / people;

    document.querySelector("#showTotalExpense").innerText += "GHS " + totalExpenses;
    document.querySelector("#tipValue").innerText += "GHS " + tipValue
    document.querySelector("#costPerPerson").innerText += "GHS " + individualExpenses
}