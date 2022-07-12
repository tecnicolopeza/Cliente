function arraySinDuplicidad(arr) {

    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));

}