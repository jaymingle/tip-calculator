function calculateForm(){

    const bill = Number(document.querySelector("#billAmount").value)
    console.log(bill)
    const percentageTip = Number(document.querySelector("input[name='tip']:checked"))
    console.log(percentageTip)
    const people = Number(document.querySelector("#numberOfPeople").value)
    console.log(people)
    console.log(bill)


    if(isNaN(bill) || bill <= 0 || !tipPercentageElement || isNaN(people) || people <= 0){
        alert("Fill the forms")
        return
    }

    const tipValue = Number(percentageTip) / 100 * Number(bill)
    const totalExpenses = bill + tipValue
    const individualExpenses = totalExpenses / people;

    document.querySelector("#showTotalExpense").innerText += "GHS " + totalExpenses;
    document.querySelector("#tipValue").innerText += "GHS " + tipValue
    document.querySelector("#costPerPerson").innerText += "GHS " + individualExpenses
}

function resetFields(){
    console.log("Reset")
    document.querySelector("#billAmount").value = ''
    document.querySelector("#numberOfPeople").value = ''
    document.querySelector("#showTotalExpense").innerText = " ";
    document.querySelector("#tipValue").innerText = " "
    document.querySelector("#costPerPerson").innerText = " "

    let radioButtons = document.querySelectorAll("input[name='tip']")
    radioButtons.forEach(radio => radio.checked = false)
}