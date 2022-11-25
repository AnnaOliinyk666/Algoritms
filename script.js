function power(x, n) {
    if (n == 0) {
        return 1;
    }

    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

function powerRec(x, n) {
    if (n == 0) {
        return 1;
    }

    return x * powerRec(x, n - 1);
}

function powerRecImproved(x, n) {
    if (n == 0) {
        return 1;
    }

    let result = powerRecImproved(x, Math.floor(n/2));

    if (n%2===0) {
        result*=result;
    } else {
        result = result*result*x;
    }

    return result;
    // 1. Получить значение, равное x в степени n / 2
    // 2. Округлить полученное значение вниз до целого
    // 3. Выполнить проверку n на четность
    // 3.1. Если n четное, возвести полученное число в квадрат
    // 3.2. В противном случае возвести в квадрат и умножить на x
}
 console.log(powerRecImproved(3, 5));
 console.log(power(3, 5));

 ////////////////////////////////////////////////////////

 