function fun(n) {
    if (n === 0) return;
    else {
        
        console.log(n);
        fun(n - 1);
        
    }
}
fun(5);