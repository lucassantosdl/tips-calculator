function calcularTip() {
event.preventDefault();
let bill = document.getElementById("bill").value;
let serviceQual = document.getElementById("serviceQual").value;
let NumOfPeople = document.getElementById("people").value;

if (bill == '' || serviceQual == 0) {
    alert('Por favor preencha os dados')
    return;
}
    if(NumOfPeople == '' | NumOfPeople <= 1) {
        NumOfPeople = 1;
        document.getElementById("each").style.display = "none";
    }   else {
        document.getElementById("each").style.display = "block";
    }

    let total = (bill * serviceQual) / NumOfPeople;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalTip").style.display = "block";
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("tipsForm").addEventListener('submit', calcularTip);