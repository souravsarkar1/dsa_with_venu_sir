function fibonacciSeriesByRecursion(n){
    if(n===0) return 0;
    else if(n===1) return 1;
    else{
        return fibonacciSeriesByRecursion(n-1) + fibonacciSeriesByRecursion(n-2);
    }
}

let ans = fibonacciSeriesByRecursion(3);
console.log(ans);