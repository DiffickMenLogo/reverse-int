module.exports = function reverse (n) {
    let mas = n.toString().split('');
    if(mas[0] == '-'){
        mas.shift();
    }
    result = mas.reverse().join('');
    return result;
}
