for( let i=0; i<10; i++ ){
    console.log(i);
}

for( let i=30; i<=100; i++ ){
    if (i  % 7 === 0){
        console.log(i);
    }
}

// WAP to print all number divisible by 7 and 11 in range of 240 - 370

for( let i=240; i<=370; i++)
    if(i % 7 === 0 && i % 11 === 0 ){
        console.log(i);
    }

//    while loop
    let num = 10

    while(num < 20){
        console.log(num);
        num+=2
    }

    // dowhile loop
    let a = 15;

    do{
        console.log(a);
     }while(a < 10)

        // for each loop
        let nums = [ 23, 45, 92, 54, 78, 37 ];
        // array

        for( let n of nums){
            console.log(n);
        }