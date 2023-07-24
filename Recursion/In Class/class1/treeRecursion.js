function fun(n) {
    if (n === 0) return;
    else {
        console.log(n);
        //console.log('ok');
        fun(n - 1);
        fun(n-1)
       
    }
}
fun(5);