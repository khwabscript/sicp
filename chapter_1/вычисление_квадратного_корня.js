function sqrt(y, sqrt_y) {
    if(abs(y - square(sqrt_y))<0.001) {
        return console.log('Квадратный корень из ' + y + 'равен: ' + sqrt_y);
    }
    else {
        console.log(sqrt_y + ' пока не подходит, попробуем другой.');
        sqrt_y = average(y/sqrt_y, sqrt_y);
        sqrt(y, sqrt_y);
    }
}
function square(x) {
    return x*x;
}
function average(x, y) {
    return (x+y)/2;
}
function abs(x) {
    if(x<0) {
        return -x;
    }
    else {
        return x;
    }
}
sqrt(81,7);