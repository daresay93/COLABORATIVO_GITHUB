
function esPrimo(num) {
    if (num <= 1) {
        return false
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const num = 6
const isPrimo = esPrimo(num)


if (isPrimo) {
    console.log(`${num} es un numero primo`)
} else {
    console.log(`${num} NO es numero primo`)
}


// Si queremos mostrar los 100 primeros números primos..

for (let i = 1; i < 101; i++) {
    if (esPrimo(i)) {
        console.log(i)
    }
}