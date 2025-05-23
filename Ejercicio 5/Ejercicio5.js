const inputA = document.getElementById("a")
const inputC = document.getElementById("c")
const inputB = document.getElementById("b")
const resultado = document.getElementById("resultado")

function calcular(){


    const A = inputA.value;
    const B = inputB.value;
    const C = inputC.value;

    if(A > C){
        const areaTriangulo = (A - C) * B / 2;
        const areaRectangulo = C * B;
        const areaTotal = areaTriangulo + areaRectangulo;
        resultado.innerHTML = "ÁREA total: " + areaTotal + " m2";
        
    }else{
        resultado.innerHTML = "A debe ser mayor que C.";
    }
}