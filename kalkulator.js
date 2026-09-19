function kali(a, b) {return a*b;}
function bagi(a, b) {
    if(b > a) {return "Tidak bisa dibagi."}
    return a / b;
}

module.exports = {kali, bagi};