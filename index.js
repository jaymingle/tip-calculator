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

    if(tenPercent.checked) {
        radioValue = 10;
        console.log("Radio Value: ",radioValue)
    }else if(fifteenPercent.checked){
        radioValue = 15;
        console.log("Radio Value: ",radioValue)
    }else if(twentyPercent.checked){
        radioValue = 20;
        console.log("Radio Value: ",radioValue)
    }else {

    }

})