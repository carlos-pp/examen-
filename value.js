function salarios() {
    var salario = document.getElementById("salario").value;
    var ventas = document.getElementById("ventas").value;

    var comision = ventas / 12.5;
    var salarioComision = salario + comision;

    document.getElementById("cantidad1").textContent = comision;
    document.getElementById("cantidad2").textContent = salarioComision;

}