//mdc
function mdc() {
    var a = parseInt(prompt("Digite o primeiro número para realizar o MDC: "));
    var b = parseInt(prompt("Digite o segundo número para realizar o MDC: "));

    while (b !== 0) {
        var temp = a;
        a = b;
        b = temp % b;
    }

    document.getElementById('output').innerHTML = "O máximo divisor comum (MDC) de dois inteiros é: " + a;
}

//fibo
function fibonacci() {
    let primeiro = 0;
    let segundo = 1;
    let sequenciaDeNumeros = '0 1';

    let entrada = parseInt(prompt('Digite a quantidade de números que você deseja que apareça na sequência fibonacci: '));
    for (let x = 0; x < entrada - 2; x++) {
        let soma = primeiro + segundo;
        sequenciaDeNumeros += " " + soma;
        let aux = soma;
        primeiro = segundo;
        segundo = soma;
    }

    document.getElementById('output').innerHTML = sequenciaDeNumeros + "<br>";
}

//contagem
function contagem() {
    qDeNumeros = parseFloat(prompt("Digite a quantidade de números que você quer conferir: "));
    var inteiros = 0;

    for (var i = 0; i < qDeNumeros; i++) {
        var num = parseFloat(prompt("Digite o número: "));
        if (Number.isInteger(num)) {
            inteiros++
        }
    }

    document.getElementById('output').innerHTML = "A quantidade de números inteiros inseridos é: " + inteiros;
}

//quicksort
function quicksort() {
    function promptArray() {

        let array = [];
        let input = prompt("Digite os números do array separados por vírgula:");
        let numbers = input.split(",");

        for (let number of numbers) {
            array.push(parseInt(number));
        }

        return array;
    }

    function quicksort(array) {

        if (array.length <= 1) {
            return array;
        }

        let pivot = array[array.length - 1];

        let menores = [];
        let maiores = [];

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                menores.push(array[i]);
            } else {
                maiores.push(array[i]);
            }
        }

        return quicksort(menores).concat([pivot], quicksort(maiores));
    }

    let array = promptArray();
    document.getElementById('output').innerHTML = "Array original: " + array + "<br>" +
        "Array ordenado: " + quicksort(array);
}

//primos
function primos() {
    var num = prompt("Digite um número para conferir se é primo: ");
    var aux = 0;

    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            aux += 1;
        }
    }

    if (aux >= 1) {
        document.getElementById('output').innerHTML = "O número " + num + " não é primo." + "<br>";
    } else {
        document.getElementById('output').innerHTML = "O número " + num + " é primo." + "<br>";
    }
}

//somatorio
function somatorio() {
    var num1 = parseInt(prompt("Digite a quantidade de números que você quer somar: "));
    var soma = 0;

    for (var i = 1; i <= num1; i++) {
        var aux = parseFloat(prompt("Digite o " + i + "º número: "));
        soma += aux;
    }

    document.getElementById('output').innerHTML = "A soma de todos os números é: " + soma + "<br>";
}
