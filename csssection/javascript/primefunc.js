function prime(num1, num2) {
    if (num1 > 1 && num2 > 1) {
        for (let i = num1; i <= num2; i++) { //i=5 5<10
            for (let j = 2; j <= i; j++) {//j=2  2<5
                if (i % j == 0) {
                    break;
                }
                else {
                    console.log(i);
                }


            }
        }


    }

}

(prime(5, 10));
