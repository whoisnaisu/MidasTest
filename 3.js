
/*
จํานวนเฉพาะ(prime) มีลําดับดังนี้ 2, 3, 5, 7, 11, 13, 17, 19, ...
กรุณาเขียน function primeAt ที่ค้นหา จํานวนเฉพาะในลําดับที่กําหนด เช่น
primeAt(1) => 2, primeAt(2) => 3, primeAt(6) => 13, primeAt(100) => 541
*/


let primes = []

function primeAt(index) {
    if (typeof index !== 'number' || index === 0) return;
    if (primes.length >= index) {
        return primes[index - 1];
    } else {
        let i = primes?.length > 0 ? primes[primes.length - 1] : 0;
        while (primes.length < index) {
            if (i === 0) {
                primes.push(2);
                i = primes[primes.length - 1];
            } else {
                let check = true;
                for (let item of primes) {
                    if (i % item === 0) {
                        check = false;
                        break;
                    }
                }
                if (check) {
                    primes.push(i);
                }
            }
            i++
        }
        return `${primes[primes.length - 1]}`
    }
}

console.log(primeAt(1))
console.log(primeAt(2000))
// console.log(primeAt(50000))
// console.log(primeAt(1000000))
// console.log(primeAt(20000000))