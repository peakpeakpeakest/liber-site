function getPart3() {
    var x = ['b', 'e', 'Y', 'i', 'P', 'u', 'A', 'U', '3', 'O', 'w'];
    var y = '';
    for (var i = 0; i < x.length; i++) {
        y += x[i];
    }
    return y;
}

function getPart4() {
    var z = 'https://';
    var aa = 'you';
    var ab = 'tu.be/';
    var ac = getPart3();
    return z + aa + ab + ac;
}
