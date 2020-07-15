// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (var i = 1; i <= 100; i++) {
    //Primo check: se i multiplo di 3 AND 5.
    if(((i % 3) == 0) && ((i % 5) == 0)){
        console.log('FizzBuzz');
    }
    //Secondo check: i multiplo esclusivamente di 3.
    else if((i % 3) == 0){
        console.log('Fizz');
    }
    //Terzo check: i multiplo esclusivamente di 5.
    else if((i % 5) == 0){
        console.log('Buzz');
    }
    //Condizione per tutti gli altri numeri non multipli di 3 o 5.
    else {
            console.log(i);
    }
}
