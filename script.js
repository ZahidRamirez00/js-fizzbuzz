//Utilizzo il ciclo FOR
for (let i = 1; i <= 100; i++){
    //Eseguo il controllo per determinare che l'idice sia divisibile per 3 e per 5 contemporaneamente  
    if(i%3 == 0  && i%5 == 0){
        console.log(i + " FizzBuzz");
    }else if(i%3 == 0){     //Eseguo il controllo per determinare che l'idice sia divisibile solo per 3
        console.log(i + " Fizz");
    }else if(i%5 == 0){     //Eseguo il controllo per determinare che l'idice sia divisibile solo per 5
        console.log(i + " Buzz");
    }else{
        console.log(i);
    }
    
}