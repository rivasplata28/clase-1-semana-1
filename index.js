window.onload = start;

function start() {
   var btnCalculate = document.getElementById("btnCalcuate");
   btnCalculate.addEventListener("click", clickBtnCalculate);
}

function clickBtnCalculate() {
    var txtWeight = document.getElementById("txtWeight");
    var Weight = txtWeight.value;

    var txtHeight = document.getElementById("txtHeight");
    var Height = txtHeight.value;
    
    var BMI = Weight / (Height * Height);
    alert ("His BMI is: " +  Math.round(BMI));
}