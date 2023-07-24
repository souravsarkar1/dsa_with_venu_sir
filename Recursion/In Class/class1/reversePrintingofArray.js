function reversePrintingofArray(n, arr) {
    if (n === 0) return;
    else {
        
        console.log(arr[n-1]);
        reversePrintingofArray(n - 1, arr);
    }
}

reversePrintingofArray(5,[1,2,3,4,5]);